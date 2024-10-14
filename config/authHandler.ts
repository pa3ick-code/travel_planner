import { createUserWithEmailAndPassword, signInWithEmailAndPassword, inMemoryPersistence, setPersistence } from "firebase/auth";
import { collection, addDoc, setDoc, doc } from "firebase/firestore"; 
import { auth, db } from "./firebaseConfig";


type signInAuthProps = {
    email: string,
    password: string,
}

type signUpAuthProps = signInAuthProps & {
    firstName: string,
    lastName: string
}

export const signUpAuth = async({email, password, firstName, lastName}: signUpAuthProps) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        if(user){
            await setDoc(doc(db, "users", user.uid), {
                firstName: firstName,
                lastName: lastName,
                displayName: firstName,
            });
            return !!user;
        }
    } catch (err) {
        console.log(err);
    }
}

export const signInAuth = async({email, password}: signInAuthProps) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        if(user) {
            return !!user
        }
    } catch (error) {
        console.log(error);
        
    }
}
