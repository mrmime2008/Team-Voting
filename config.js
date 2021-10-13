import firebase from 'firebase';


var firebaseConfig = {
  apiKey: "AIzaSyCtrzkyuNcsc_ELZDBmDLU7y3lUrILUjlE",
  authDomain: "voting-project-10dab.firebaseapp.com",
  databaseURL: "https://voting-project-10dab-default-rtdb.firebaseio.com",
  projectId: "voting-project-10dab",
  storageBucket: "voting-project-10dab.appspot.com",
  messagingSenderId: "158205862439",
  appId: "1:158205862439:web:0e20114586b0891d65a402"
};


firebase.initializeApp(firebaseConfig);

export default firebase.database();