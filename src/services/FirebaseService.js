import "firebase/firestore";
import "firebase/auth";
import * as firebase from "firebase/app"

const config = {
  apiKey: "AIzaSyCBToAXiNSn5EIUwm0AbYF3jtRJkzGQRs8",
  authDomain: "webmobile-sub2-510fa.firebaseapp.com",
  databaseURL: "https://webmobile-sub2-510fa.firebaseio.com",
  projectId: "webmobile-sub2-510fa",
  storageBucket: "",
  messagingSenderId: "69251272917",
  appId: "1:69251272917:web:e3d748f5c506995f"
};
firebase.initializeApp(config);
// const auth = firebase.auth();
// const ui = new firebaseui.auth.AuthUI(auth);

const firestore = firebase.firestore();
const POSTS = "Posts";
const USERS = "Users";
const TODO = "ToDo";
export default {
  getPosts() {
    const postsCollection = firestore.collection(POSTS);
    return postsCollection.get().then(docSnapshots => {
      return docSnapshots.docs.map(doc => {
        let data = doc.data();
        return data;
      });
    });
  },
  postPost(title, postWriter, writerUid, category, content, image) {
    return firestore.collection(POSTS).add({
      title,
      postWriter,
      writerUid,
      category,
      content,
      image
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
        return docSnapshots.docs.map(doc => {
          let data = doc.data();
          return data;
        });
      });
  },
  getUserfield(){
    return firestore
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
      });
  },
  getisSignup(loginUid){
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
    return usersList.get().then(docSnapshots => {
      return docSnapshots.docs.map(doc => {
        let data = doc.data();
        return data;
      });
    });
  },
  createUser(uid, nickname, eamil, level, createdAt) {
    return firestore.collection(USERS).add({
      uid,
      nickname,
      eamil,
      level,
      createdAt,
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
