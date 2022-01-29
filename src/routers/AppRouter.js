import React , {useEffect,useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from 'react-router-dom';
  import {firebase} from '../firebase/firebase-config'

import { AuthRouter } from './AuthRouter';
import { JournalScreen } from '../components/journal/JournalScreen';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

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
                    <PublicRoute 
                        path="/auth"
                        component={ AuthRouter }
                        isAuthenticated={IsLoggedIn}
                    />

                    <PrivateRoute 
                        exact
                        path="/"
                        component={ JournalScreen }
                        isAuthenticated={IsLoggedIn}
                    />

                    <Redirect to="/auth/login" />


                </Switch>
            </div>
        </Router>
    )
}
