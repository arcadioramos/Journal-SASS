import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import validator from 'validator'
import { useDispatch } from 'react-redux';
import { uiReducer } from '../../reducers/uiReducer';
import { removeError, setError } from '../../actions/ui';
export const RegisterScreen = () => {

    /*
     {
         name: 'arcadio',
         email: 'a@gmail.com',
         password: 123,
         password2: 123,

     }
    */
    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: '',
        password2: '',

    })

    const { name, email, password, password2 } = formValues;
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isFormValid()) {
            console.log('Formulario correcto')
        }
    }

    const isFormValid = () => { 
        if (name.trim().length === 0) {
            dispatch(setError('name is required'))
            return false;
        } else if (!validator.isEmail(email)) {
            dispatch(setError('Email is not valid'))
            return false;
        } else if (password !== password2 || password.length < 5) {
            dispatch(setError('password should be at least 6 characters and match each other'))
            return false;
        }
        
        dispatch(removeError())
        return true;
    }

    return (
        <>
            <h3 className="auth__title">Register</h3>

            <form onSubmit={handleSubmit}>
                <div className="auth__alert-error">
                    Hola mundo
                </div>

                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    onChange={handleInputChange}
                    value={name}
                    className="auth__input"
                    autoComplete="off"
                />

                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    onChange={handleInputChange}
                    value={email}
                    className="auth__input"
                    autoComplete="off"
                />

                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={handleInputChange}
                    value={password}
                    className="auth__input"
                />

                <input
                    type="password"
                    placeholder="Confirm password"
                    name="password2"
                    onChange={handleInputChange}
                    value={password2}
                    className="auth__input"
                />


                <button
                    type="submit"
                    className="btn btn-primary btn-block mb-5"
                >
                    Register
                </button>



                <Link
                    to="/auth/login"
                    className="link"
                >
                    Already registered?
                </Link>

            </form>
        </>
    )
}
