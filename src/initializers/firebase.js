import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYgwRbUoEAACHy2sxYIRVBFgLDJGZLQVg",
  authDomain: "testtug-201f2.firebaseapp.com",
  projectId: "testtug-201f2",
  storageBucket: "testtug-201f2.appspot.com",
  messagingSenderId: "284726007057",
  appId: "1:284726007057:web:7d13264589fd4269c9a8b0",
  measurementId: "G-QHXM9786W3"
};

 //Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const db = getFirestore(app);
 export default db;