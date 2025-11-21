import {
  signInWithGooglePopup,
  createUserDocFromAuth,
} from "../../utils/firebase/firebase.utils";
import SingUpForm from "../../components/sign-up/sign-up.component";

const SignIn = () => {
  

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocFromAuth(user);
  };

  return (
    <div>
      <h1>I am Sign in Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <SingUpForm/>
    </div>
  );
};

export default SignIn;
