import firebase from "firebase/app";
import "@firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDbyVTI4QvaQ48dOc6gRxwbDtyyhnvSbIs",
  authDomain: "react-coderhouse-203e5.firebaseapp.com",
  projectId: "react-coderhouse-203e5",
  storageBucket: "react-coderhouse-203e5.appspot.com",
  messagingSenderId: "535408988548",
  appId: "1:535408988548:web:057b48622c78f7b28a8dd1",
  measurementId: "G-444ZYH9R2Q",
});

export const getFirebase = () => {
  return app;
};

export const getFirestore = () => {
  return firebase.firestore(app);
};
