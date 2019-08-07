import "firebase/firestore";
import "firebase/auth";
import * as firebase from "firebase/app";

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

const firestore = firebase.firestore();
let db = firebase.firestore();
const POSTS = "Posts";
const USERS = "Users";
const TODO = "ToDo";
export default {
  getPosts() {
    const postsCollection = firestore.collection(POSTS);
    return postsCollection
      .orderBy("createdAt", "desc")
      .get()
      .then(docSnapshots => {
        return docSnapshots.docs.map(doc => {
          let data = doc.data();
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
          return data;
        });
      });
  },
  getUserfield() {
    return (
      firestore
        .collection(USERS)
        // .orderBy("uid")
        .limit(1)
        .get()
        .then(docSnapshots => {
          return docSnapshots.docs.map(doc => {
            let data = doc.data();
            let userFields = Object.getOwnPropertyNames(data);
            // console.log(data);
            return userFields;
          });
        })
    );
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
  getUIdByName(name) {
    return firestore
      .collection(USERS)
      .where("nickname", "==", name)
      .where("level", "==", "maintainer")
      .get()
      .then(docSnapshots => {
        return docSnapshots.docs.map(doc => {
          let data = doc.data();
          return data.uid;
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
  deleteUser(deleteUserUid) {
    const deleteUser = firestore.collection(USERS).doc(deleteUserUid);
    deleteUser.delete();
    return true;
  },
  createUser(uid, nickname, eamil, level, createdAt) {
    return firestore
      .collection(USERS)
      .doc(uid)
      .set({
        uid,
        nickname,
        eamil,
        level,
        createdAt,
        post: 0
      });
  },
  getToDo() {
    const postsCollection = firestore.collection(TODO);
    return postsCollection.get().then(docSnapshots => {
      return docSnapshots.docs.map(doc => {
        let data = doc.data();
        return data;
      });
    });
  },
  createToDo(completed, item) {
    return firestore.collection(TODO).add({
      completed,
      item
    });
  }
};
