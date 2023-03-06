// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyA-jL9TF7YX3fTE4QNENIJKY5iORQHgt7o",
  authDomain: "landing-page-73901.firebaseapp.com",
  projectId: "landing-page-73901",
  storageBucket: "landing-page-73901.appspot.com",
  messagingSenderId: "852907351231",
  appId: "1:852907351231:web:31b091baefc2f5a040ba0a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function writeUserToDatabase(
  id,
  firstName,
  secondName,
  telephone,
  email,
  date
) {
  const db = getDatabase();
  const reference = ref(db, "users/" + id);
  set(reference, {
    firstName: firstName,
    secondName: secondName,
    telephone: telephone,
    email: email,
    date: date,
  });
}

export { writeUserToDatabase };
