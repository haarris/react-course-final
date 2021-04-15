import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCkh3TkDormtTGORyB7BiL7RZyoJ2QCETs",
    authDomain: "crwn-clothing-7e056.firebaseapp.com",
    projectId: "crwn-clothing-7e056",
    storageBucket: "crwn-clothing-7e056.appspot.com",
    messagingSenderId: "833324025686",
    appId: "1:833324025686:web:302597d1c3c06274dbb8f7"
  };

export const createUserProfileDocument = async(userAuth, additionalData) => {
  if (!userAuth) return;
  
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  //console.log(snapShot);
  if (!snapShot.exists) {
    const {displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName, 
        email, 
        createdAt,
        ...additionalData
      })
    } catch (error){
      console.log('error creating user', error.message);
    }   
  }
  return userRef;
  // console.log(firestore.doc('users/hr38h83r'));
};

firebase.initializeApp(config);
 
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

/*
firestore.collection('users').doc('V5fvPyGOQJQ6gp9Nk6lB').collection('cartItems').doc('pkgxjAH4efCFlTmTBl8Y');
firestore.doc('/users/V5fvPyGOQJQ6gp9Nk6lB/cartItems/pkgxjAH4efCFlTmTBl8Y');


*/
export default firebase;
