import { useState } from "react";
import FormField from "../form-field/form-field.component";
import Button from "../button/button.component";

import '../../components/sign-in-form/sign-in-form.styles.scss';

import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword
} from '../../utils/firebase/firebase.utils';

const defaultFormFields = {
  email: '',
  password: '',
}

const SignInform = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {email, password} = formFields;

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  }

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(email, password);
      
      resetFormFields();
    } catch (error) {
      switch(error.code) {
        case 'auth/invalid-credential':
          alert('Error, invalid password');
          break;
        case 'auth/user-not-found':
          alert('Error, user with that email not found');
          break;
        default:
          console.log(error);
      }
    }
  }

  const handleChange = (evt) => {
    const {name, value} = evt.target;

    setFormFields({...formFields, [name]: value});
  }

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormField
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormField
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType='google' onClick={signInWithGoogle}>Google Sign In</Button>
        </div>
      </form>
    </div>
  )
}

export default SignInform;