import './sign-up.styles.css'
import { useState } from 'react';

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

    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value});
    }

    return(
        <div>
            <h1>Sign Up with your email and password</h1>

            <form className="form-container" onSubmit={() => {}}>

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