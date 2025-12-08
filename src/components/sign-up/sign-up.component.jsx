import './sign-up.styles.scss'
import { useState } from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocFromAuth } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const SingUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {  displayName, email, password, confirmPassword } = formFields;


    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();


        if(password !== confirmPassword) {
            alert('password do not match');
            return;
        }

        try{

            console.log(`Username is: ${email} and password is ${password}`);
            const {user} = await createAuthUserWithEmailAndPassword(email, password);

            await createUserDocFromAuth(user, {displayName})
            console.log(user);
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

                <FormInput label='Display Name' type="text" required onChange={handleChange} name='displayName' value={displayName}></FormInput>

                <FormInput label='Email' type="email" required onChange={handleChange} name='email' value={email}></FormInput>

                <FormInput label='Password' type="password" required onChange={handleChange} name='password' value={password}></FormInput>

                <FormInput label='Confirm Password' type="password" required onChange={handleChange} name='confirmPassword' value={confirmPassword}></FormInput>

                <button className='btn-submit' type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default SingUpForm;