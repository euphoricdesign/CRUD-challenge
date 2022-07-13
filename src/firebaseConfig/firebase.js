import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAPFFbZPdOTkh2FuYrr82ADCp0Tp8D5BK4",
  authDomain: "crud-challenge-309a6.firebaseapp.com",
  projectId: "crud-challenge-309a6",
  storageBucket: "crud-challenge-309a6.appspot.com",
  messagingSenderId: "658540929399",
  appId: "1:658540929399:web:1e217b7e73c685c8e28172"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

// initializeApp() creates and initializes a Firebase app instance.
// Parameters: 
// options: Object. Options to configure the app's services.
// name: string. Optional name of the app to initialize. If no name is provided, the default is "[DEFAULT]".
// Returns the initialized app.

// getFirestore() initializes Cloud Firestore and get a reference to the service