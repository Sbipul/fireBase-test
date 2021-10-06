import { initializeApp } from 'firebase/app';
import firebaseConfig from "./FireBase.config";

const initializeAuthentication = () => {
    initializeApp(firebaseConfig)
}

export default initializeAuthentication;