import { initializeApp } from 'firebase/app'
import { getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAYkky5O1OaBYnej7WgkXhmzST2os6cNdo",
  authDomain: "kasi-clothing-db-1f89b.firebaseapp.com",
  projectId: "kasi-clothing-db-1f89b",
  storageBucket: "kasi-clothing-db-1f89b.firebasestorage.app",
  messagingSenderId: "513563998662",
  appId: "1:513563998662:web:27da67543029ba7e131ac7"
};

// Initialize Firebase
const firesbaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup =  () => signInWithPopup(auth, provider);

const db = getFirestore();

export const createUserDocFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  console.log(userSnapshot.exists());
}
