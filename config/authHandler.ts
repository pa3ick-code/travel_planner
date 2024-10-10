import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
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
        
        await setDoc(doc(db, "users", user.uid), {
            firstName: firstName,
            lastName: lastName,
            displayName: firstName,
        })
    } catch (err) {
        // const errorCode = err?.cod;
        // const errorMessage = err?.message;
        console.log(err);
    }
}

export const signInAuth = ({email, password}: signInAuthProps) => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
    });
}
