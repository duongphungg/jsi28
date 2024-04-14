const firebaseConfig = {
  apiKey: "AIzaSyCpzOZ4Ed79Bs8aM84ORK6ronGXs7QYKCA",
  authDomain: "mindx-jsi28.firebaseapp.com",
  projectId: "mindx-jsi28",
  storageBucket: "mindx-jsi28.appspot.com",
  messagingSenderId: "267228206809",
  appId: "1:267228206809:web:c760b67b48e7eefbeb90c8",
  measurementId: "G-486WRFGWZJ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = firebase.auth();