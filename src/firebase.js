import * as firebase from "firebase";

var config = {    
        apiKey: "AIzaSyCX2rBclVP5S5KQ_3apGP_LEV2TAnQaTkw",
        authDomain: "kulinarny-swiat.firebaseapp.com",
        databaseURL: "https://kulinarny-swiat.firebaseio.com",
        projectId: "kulinarny-swiat",
        storageBucket: "kulinarny-swiat.appspot.com",
        messagingSenderId: "1087622485048"
    };
      firebase.initializeApp(config);
  


const fire = firebase.firestore();
fire.settings({ timestampsInSnapshots: true })

export const db = fire;