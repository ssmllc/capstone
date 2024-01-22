import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

const SignIn = () => {
  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
  }
  return(
    <div>
    <h1>Sign in page</h1>
    <button className='' onClick={logGoogleUser}>
      Sign in with google account
    </button>
  </div>
  )
}

export default SignIn;