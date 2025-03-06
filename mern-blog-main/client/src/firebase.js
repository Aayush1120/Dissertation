// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCsjTUpvceJqOBmPU9jREQGCffeHjnAHeI",
//   authDomain: "mernstackblog-794a3.firebaseapp.com",
//   projectId: "mernstackblog-794a3",
//   storageBucket: "mernstackblog-794a3.appspot.com",
//   messagingSenderId: "449865902794",
//   appId: "1:449865902794:web:72322278678cf2f305e233",
// };

const firebaseConfig = {
  apiKey: "AIzaSyCsjTUpvceJqOBmPU9jREQGCffeHjnAHeI",
  authDomain: "mernstackblog-794a3.firebaseapp.com",
  projectId: "mernstackblog-794a3",
  storageBucket: "mernstackblog-794a3.appspot.com",
  messagingSenderId: "449865902794",
  appId: "1:449865902794:web:0447dcd778edf69905e233",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
