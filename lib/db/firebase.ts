import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
	apiKey: "AIzaSyDg-Wd4LCHHh586qFeAzxQoVi0SsbAHJxI",
	authDomain: "whatsup-files.firebaseapp.com",
	projectId: "whatsup-files",
	storageBucket: "whatsup-files.appspot.com",
	messagingSenderId: "48249775306",
	appId: "1:48249775306:web:a71271b53eb13c1e520033",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
