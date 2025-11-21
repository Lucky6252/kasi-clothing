import './sign-up.styles.css'
import { useState } from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocFromAuth } from '../../utils/firebase/firebase.utils';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const SingUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {  displayName, email, password, confirmPassword } = formFields;

    console.log(formFields);

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(password !== confirmPassword) {
            alert('password od not match');
            return;
        }

        try{
            const {user} = await createAuthUserWithEmailAndPassword(email, password);

            await createUserDocFromAuth(user, {displayName})
            resetFormFields();

        }catch(error){

            if(error.code === 'auth/email-already-in-use'){
                alert('cannot create user, email already in use');
            }
            else{

                console.log('user creation encontered an errror', error);
            }
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value});
    }

    return(
        <div>
            <h1>Sign Up with your email and password</h1>

            <form className="form-container" onSubmit={handleSubmit}>

                <label>Display Name</label>
                <input type="text" required onChange={handleChange} name='displayName' value={displayName}></input>

                <label>Email</label>
                <input className='email' type="email" required onChange={handleChange} name='email' value={email}></input>

                <label>Password</label>
                <input className='password' type="password" required onChange={handleChange} name='password' value={password}></input>

                <label>Confirm Password</label>
                <input type="password" required onChange={handleChange} name='confirmPassword' value={confirmPassword}></input>

                <button className='btn-submit' type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default SingUpForm;