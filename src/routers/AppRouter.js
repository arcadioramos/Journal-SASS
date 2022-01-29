import React , {useEffect,useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from 'react-router-dom';
  import {firebase} from '../firebase/firebase-config'

import { AuthRouter } from './AuthRouter';
import { JournalScreen } from '../components/journal/JournalScreen';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';

export const AppRouter = () => {
    const dispatch = useDispatch();
    const [Checking, setChecking] = useState(true);
    const [IsLoggedIn, setIsLoggedIn] = useState(false);


    useEffect(() => {
        firebase.auth().onAuthStateChanged((user)=>{
            if(user?.uid){
                dispatch(login(user.uid,user.displayName))
                setIsLoggedIn(true);
                setChecking(false)
            }else{
                setIsLoggedIn(false);
            }
            setChecking(false)
        })
    }, [dispatch,Checking,IsLoggedIn ]);

    if(Checking){
        return(
            <>
            <h1>Cargando...</h1>
            </>
            
        )
    }

    return (
        <Router>
            <div>
                <Switch>
                    <Route 
                        path="/auth"
                        component={ AuthRouter }
                    />

                    <Route 
                        exact
                        path="/"
                        component={ JournalScreen }
                    />

                    <Redirect to="/auth/login" />


                </Switch>
            </div>
        </Router>
    )
}
