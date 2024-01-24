import SignUpform from '../../components/sign-up-form/sign-up-form.component';

import {
  signInWithGooglePopup, 
  createUserDocumentFromAuth 
} from '../../utils/firebase/firebase.utils';

const SignIn = () => {
  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  }

  return(
    <div>
    <h1>Sign in page</h1>
    <button className='' onClick={logGoogleUser}>
      Sign in with google account
    </button>
    <SignUpform />
  </div>
  )
}

export default SignIn;