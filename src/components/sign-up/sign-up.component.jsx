import './sign-up.styles.css'

const SingUpForm = () => {
    return(
        <div>
            <h1>Sign Up with your email and password</h1>

            <form className="form-container" onSubmit={() => {}}>
                <label>Display Name</label>
                <input className='name' type="text" required></input>

                <label>Email</label>
                <input className='email' type="email" required></input>

                <label>Password</label>
                <input className='password' type="password" required></input>

                <label>Confirm Password</label>
                <input type="password" required></input>

                <button className='btn-submit' type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default SingUpForm;