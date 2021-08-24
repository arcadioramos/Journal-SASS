
import { types } from '../components/types/types';
import {firebase, googleAuthProvider} from '../firebase/firebase-config';

export const startLoginEmailPassword = (email,password)=>{
    return(dispatch)=>{
        setTimeout(() => {
            dispatch(login(email,password))
        }, 3500);
    }
}

export const startGoogleLogin = ()=>{
    return(dispatch)=>{
        firebase.auth().signInWithPopup(googleAuthProvider)
        .then(({user}) =>{
            dispatch(
                login(user.uid,user.displayName)
                )
        } )
    }
}

export const login = (uid,displayName)=>{
    return{
        type:types.login,
        payload: {
            uid,
            displayName
        }
    }

}