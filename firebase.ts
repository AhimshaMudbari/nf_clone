import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

    apiKey: "AIzaSyB3hms6OEoeXr1Tb-6CrKeqX15paYszgIA",
  
    authDomain: "netflix-clone-4df3f.firebaseapp.com",
  
    projectId: "netflix-clone-4df3f",
  
    storageBucket: "netflix-clone-4df3f.appspot.com",
  
    messagingSenderId: "447916330446",
  
    appId: "1:447916330446:web:0bb395e289b6980b8e6f9f"
  
  };
  

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }