import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD3xDsw9Gm7DxUKPCm39wev7kf-OODcEnQ",
    authDomain: "slack-clone-1e588.firebaseapp.com",
    projectId: "slack-clone-1e588",
    storageBucket: "slack-clone-1e588.appspot.com",
    messagingSenderId: "58821738492",
    appId: "1:58821738492:web:b6133f1080f64993023c79"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider, db };