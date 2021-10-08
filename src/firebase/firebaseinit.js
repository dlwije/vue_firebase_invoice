import firebase from "firebase/compat/app"
import "firebase/compat/firestore"

var firebaseConfig = {
    apiKey: "AIzaSyBEkhKdKFTQ0PAjBHQvhEQxr_uA26sx0lg",
    authDomain: "vue3-invoice-example.firebaseapp.com",
    projectId: "vue3-invoice-example",
    storageBucket: "vue3-invoice-example.appspot.com",
    messagingSenderId: "465999525927",
    appId: "1:465999525927:web:319ba5b9557bf957697602"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();