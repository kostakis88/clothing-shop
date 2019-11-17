import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDR94Q7atoRxM_mZoycaYLh7GEuKD0pR7s",
  authDomain: "clothing-db-e4020.firebaseapp.com",
  databaseURL: "https://clothing-db-e4020.firebaseio.com",
  projectId: "clothing-db-e4020",
  storageBucket: "clothing-db-e4020.appspot.com",
  messagingSenderId: "104883208394",
  appId: "1:104883208394:web:8b8b25828c883519b57433",
  measurementId: "G-V2967DZXTK"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(error) {
      console.error('error creating user ', error.message);
    }
  }

  return userRef;

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ 'prompt': 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;