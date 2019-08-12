import "firebase/firestore";
import "firebase/auth";
import * as firebase from "firebase/app";
import "firebase/messaging";

const config = {
  apiKey: process.env.VUE_APP_FIREBASE_apiKey,
  authDomain: "webmobile-sub2-510fa.firebaseapp.com",
  databaseURL: "https://webmobile-sub2-510fa.firebaseio.com",
  projectId: "webmobile-sub2-510fa",
  storageBucket: "",
  messagingSenderId: process.env.VUE_APP_FIREBASE_messagingSenderId,
  appId: process.env.VUE_APP_FIREBASE_appId
};
firebase.initializeApp(config);
// const auth = firebase.auth();
// const ui = new firebaseui.auth.AuthUI(auth);
const messaging = firebase.messaging();
const messagingKey = process.env.VUE_APP_FIREBASE_fcm;
messaging.usePublicVapidKey(messagingKey);

const firestore = firebase.firestore();
let db = firebase.firestore();
const POSTS = "Posts";
const POSTCOMMENT = "PostComment"
const LIKEPOST = "LikePost";
const USERS = "Users";
const TODO = "ToDo";
const TEAMPOST = "TeamPost";
const TEAMCOMMENT = "TeamComment";
const GITHUBGRAPH = "GithubGraph";
// The default cache size threshold is 40 MB. Configure "cacheSizeBytes"
// for a different threshold (minimum 1 MB) or set to "CACHE_SIZE_UNLIMITED"
// to disable clean-up.
firestore.settings({
  cacheSizeBytes: firestore.CACHE_SIZE_UNLIMITED
});

firestore.enablePersistence().catch(function(err) {
  if (err.code == "failed-precondition") {
    // Multiple tabs open, persistence can only be enabled
    // in one tab at a a time.
    // ...
  } else if (err.code == "unimplemented") {
    // The current browser does not support all of the
    // features required to enable persistence
    // ...
  }
});
// Subsequent queries will use persistence, if it was enabled successfully

// db.collection("Posts")
//   .where("state", "==", "CA")
//   .onSnapshot({ includeMetadataChanges: true }, function(snapshot) {
//     snapshot.docChanges().forEach(function(change) {
//       if (change.type === "added") {
//         console.log("New city: ", change.doc.data());
//       }

//       var source = snapshot.metadata.fromCache ? "local cache" : "server";
//       console.log("Data came from " + source);
//     });
//   });

export default {
  getPosts() {
    const postsCollection = firestore.collection(POSTS);
    return postsCollection
      .orderBy("createdAt", "desc")
      .get()
      .then(docSnapshots => {
        return docSnapshots.docs.map(doc => {
          let data = doc.data();
          data.id = doc.id;
          return data;
        });
      });
  },
  postPost(title, postWriter, writerUid, content, image) {
    return firestore.collection(POSTS).add({
      title,
      postWriter,
      writerUid,
      content,
      image,
      createdAt: new Date()
    });
  },
  deletePost(deletePostId) {
    const deletePost = firestore.collection(POSTS).doc(deletePostId);
    deletePost.delete();
    return true;
  },
  getPostsByCategoryId(category, uid) {
    return firestore
      .collection(POSTS)
      .where("writerUid", "==", uid)
      .where("category", "==", category)
      .get()
      .then(docSnapshots => {
        return docSnapshots.docs.map(doc => {
          let data = doc.data();
          // console.log(data);
          return data;
        });
      });
  },
  getPostsByCategory(category) {
    return firestore
      .collection(POSTS)
      .where("category", "==", category)
      .get()
      .then(docSnapshots => {
        return docSnapshots.docs.map(doc => {
          let data = doc.data();
          // console.log(data);
          return data;
        });
      });
  },
  getPostsById(uid) {
    return firestore
      .collection(POSTS)
      .where("writerUid", "==", uid)
      .get()
      .then(docSnapshots => {
        // console.log(docSnapshots);
        return docSnapshots.docs.map(doc => {
          let data = doc.data();
          data.id = doc.id;
          return data;
        });
      });
  },
  createPostComment(postId, commentUser, newComment) {
    const PostCommentCollection = firestore
      .collection(POSTS)
      .doc(postId)
      .collection(POSTCOMMENT);
    return PostCommentCollection.add({
      displayName: commentUser.displayName,
      uid: commentUser.uid,
      comment: newComment,
      createdAt: new Date()
    });
  },
  getLikePost(postId, userUid) {
    const LikePostCollection = firestore
      .collection(POSTS)
      .doc(postId)
      .collection(LIKEPOST)
    return LikePostCollection
      .get()
      .then(docSnapshots => {
        return docSnapshots.docs.map(doc => {
          let data = doc.data();
          data.id = doc.id;
          return data;
        });
      })

  },
  createLikePost(postId, commentUser) {
    const LikePostCollection = firestore
      .collection(POSTS)
      .doc(postId)
      .collection(LIKEPOST);
    return LikePostCollection.doc(commentUser).set({
      isLike: true
    });
  },
  deleteLikePost(postId, userUid) {
    const LikePostCollection = firestore
      .collection(POSTS)
      .doc(postId)
      .collection(LIKEPOST)
      .doc(userUid)
    LikePostCollection.delete();
  },
  createUser(uid, nickname, eamil, level, createdAt, photoURL) {
    return firestore
      .collection(USERS)
      .doc(uid)
      .set({
        uid,
        nickname,
        eamil,
        level,
        createdAt,
        photoURL,
        post: 0,
        pushToken: null
      });
  },
  getisSignup(loginUid) {
    return firestore
      .collection(USERS)
      .where("uid", "==", loginUid)
      .get()
      .then(docSnapshots => {
        return docSnapshots.docs.map(doc => {
          let data = doc.data();
          return data;
        });
      });
  },
  getUsers() {
    const usersList = firestore.collection(USERS);
    return usersList
      .orderBy("createdAt", "desc")
      .get()
      .then(docSnapshots => {
        return docSnapshots.docs.map(doc => {
          let data = doc.data();
          return data;
        });
      });
  },
  getAdminUsers() {
    const usersList = firestore.collection(USERS);
    return usersList
      .where("level", "==", "maintainer")
      .orderBy("createdAt", "desc")
      .get()
      .then(docSnapshots => {
        return docSnapshots.docs.map(doc => {
          let data = doc.data();
          return data;
        });
      });
  },
  getVisitorUsers() {
    const usersList = firestore.collection(USERS);
    return usersList
      .where("level", ">=", "visitor")
      .get()
      .then(docSnapshots => {
        return docSnapshots.docs.map(doc => {
          let data = doc.data();
          return data;
        });
      });
  },
  getUserByName(name) {
    return firestore
      .collection(USERS)
      .where("nickname", "==", name)
      .where("level", "==", "maintainer")
      .get()
      .then(docSnapshots => {
        return docSnapshots.docs.map(doc => {
          let data = doc.data();
          return data;
        });
      });
  },
  updateUserLevel(loginUserUid, updateUserLevel) {
    // console.log(loginUserUid, updateUserLevel)
    const changeUser = firestore.collection(USERS).doc(loginUserUid);
    // console.log(changeUser);
    changeUser.update({
      level: updateUserLevel
    });
    return true;
  },
  updateUserPostUP(loginUserUid) {
    const changeUser = firestore.collection(USERS).doc(loginUserUid);
    return db.runTransaction(function(transaction) {
      return transaction.get(changeUser).then(function(changeUserDoc) {
        if (!changeUserDoc.exists) {
          throw "Document does not exist!";
        }
        let newPost = changeUserDoc.data().post + 1;
        transaction.update(changeUser, { post: newPost });
      });
    });
  },
  updateUserPostDOWN(loginUserUid) {
    const changeUser = firestore.collection(USERS).doc(loginUserUid);
    return db.runTransaction(function(transaction) {
      return transaction.get(changeUser).then(function(changeUserDoc) {
        if (!changeUserDoc.exists) {
          throw "Document does not exist!";
        }
        let newPost = changeUserDoc.data().post - 1;
        transaction.update(changeUser, { post: newPost });
      });
    });
  },
  updateUserPushToken(loginUserUid, token) {
    const changeUser = firestore.collection(USERS).doc(loginUserUid);
    changeUser.update({
      pushToken: token
    });
    return true;
  },
  updateUserPhotoURL(loginUserUid, url) {
    const changeUser = firestore.collection(USERS).doc(loginUserUid);
    changeUser.update({
      photoURL: url
    });
    return true;
  },
  deleteUser(deleteUserUid) {
    const deleteUser = firestore.collection(USERS).doc(deleteUserUid);
    deleteUser.delete();
    return true;
  },
  getTeamPost() {
    const TeamPostCollection = firestore.collection(TEAMPOST);
    return TeamPostCollection.get().then(docSnapshots => {
      return docSnapshots.docs.map(doc => {
        let data = doc.data();
        data.id = doc.id;
        return data;
      });
    });
  },
  getTeamPostComment(postId) {
    const TeamCommentCollection = firestore
      .collection(TEAMPOST)
      .doc(postId)
      .collection(TEAMCOMMENT);
    return TeamCommentCollection.orderBy("createdAt")
      .get()
      .then(docSnapshots => {
        return docSnapshots.docs.map(doc => {
          let data = doc.data();
          data.id = doc.id;
          return data;
        });
      });
  },
  createTeamPostComment(postId, commentUser, newComment) {
    const TeamCommentCollection = firestore
      .collection(TEAMPOST)
      .doc(postId)
      .collection(TEAMCOMMENT);
    return TeamCommentCollection.add({
      displayName: commentUser.displayName,
      uid: commentUser.uid,
      comment: newComment,
      createdAt: new Date()
    });
  },
  deleteTeamPostComment(postId, comment) {
    const deleteComment = firestore
      .collection(TEAMPOST)
      .doc(postId)
      .collection(TEAMCOMMENT)
      .doc(comment);
    deleteComment.delete();
    return true;
  },
  // getToDo() {
  //   const postsCollection = firestore.collection(TODO);
  //   return postsCollection.get().then(docSnapshots => {
  //     return docSnapshots.docs.map(doc => {
  //       let data = doc.data();
  //       return data;
  //     });
  //   });
  // },
  // createToDo(completed, item) {
  //   return firestore.collection(TODO).add({
  //     completed,
  //     item
  //   });
  // },
  updateGithubData(githubId, commitCount) {
    return firestore
      .collection(GITHUBGRAPH)
      .doc(githubId)
      .update({
        commitCount,
        updatedAt: new Date()
      });
  },
  getGithubData() {
    const postsCollection = firestore.collection(GITHUBGRAPH);
    return postsCollection.get().then(docSnapshots => {
      return docSnapshots.docs.map(doc => {
        let data = doc.data();
        return data;
      });
    });
  }
};
