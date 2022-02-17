import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyA_yGNQvpZScq3io8tYawJU0Az2PyOakzI",
    authDomain: "bank-b39b8.firebaseapp.com",
    projectId: "bank-b39b8",
    storageBucket: "bank-b39b8.appspot.com",
    messagingSenderId: "1000605839625",
    appId: "1:1000605839625:web:111751eb809cf5688323d8",
    measurementId: "G-2MMRKES2K8"
}

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app)