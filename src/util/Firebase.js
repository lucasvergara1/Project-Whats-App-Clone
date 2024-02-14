import firebase from 'firebase/app';
import 'firebase/firestore';

//const firebase = require('firebase');
//require('firebase/firestore');


export class Firebase {

    constructor(){

        this.config = {
                apiKey: "AIzaSyBLS7fPJ33nzkvUaYrJHXgU-P_pMBZAGZI",
                authDomain: "whatsapp-clone-855d2.firebaseapp.com",
                projectId: "whatsapp-clone-855d2",
                storageBucket: "whatsapp-clone-855d2.appspot.com",
                messagingSenderId: "537252908377",
                appId: "1:537252908377:web:c93ad5d089d3a3c0d61048",
                measurementId: "G-GBSYZW4VCX"
              };

        this.init();

    }

    init(){
        
        if (!this._initialized) {
        firebase.initializeApp(this.config);

        firebase.firestore().settings({
            timestampsInSpapshots: true
        });

        this._initialized = true;
        }

    }

    static db(){

        return firebase.firestore();

    }

    static hd(){

        return firebase.storage();

    }


}