
import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import { useForm } from 'react-hook-form';
import "../App.css"

const config = {
    apiKey: "AIzaSyCpgy8EXYbQRgyGu41jDmMfQW4RWIUnQyY",
    authDomain: "react1-822a3.firebaseapp.com",
    projectId: "react1-822a3",
    storageBucket: "react1-822a3.appspot.com",
    messagingSenderId: "900800620257",
    appId: "1:900800620257:web:c2f5debb961ab0192fb9a0",
    measurementId: "G-BRQDF76L6J"
};
firebase.initializeApp(config);

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  signInSuccessUrl: '/upload',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/upload',
  // We will display Google and Facebook as auth providers.
  signInOptions:[
    {
        provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        scopes: [
          'https://www.googleapis.com/auth/contacts.readonly'
        ],
        customParameters: {
          // Forces account selection even when one account
          // is available.
          prompt: 'select_account'
        }
      },
  {
    provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
    recaptchaParameters: {
      type: 'image', // 'audio'
      size: 'normal', // 'invisible' or 'compact'
      badge: 'bottomleft' //' bottomright' or 'inline' applies to invisible.
    },
    defaultCountry: 'IN', // Set default country to the United Kingdom (+44).
    // For prefilling the national number, set defaultNationNumber.
    // This will only be observed if only phone Auth provider is used since
    // for multiple providers, the NASCAR screen will always render first
    // with a 'sign in with phone number' button.
    defaultNationalNumber: '7014797081',
    // You can also pass the full phone number string instead of the
    // 'defaultCountry' and 'defaultNationalNumber'. However, in this case,
    // the first country ID that matches the country code will be used to
    // populate the country selector. So for countries that share the same
    // country code, the selected country may not be the expected one.
    // In that case, pass the 'defaultCountry' instead to ensure the exact
    // country is selected. The 'defaultCountry' and 'defaultNationaNumber'
    // will always have higher priority than 'loginHint' which will be ignored
    // in their favor. In this case, the default country will be 'GB' even
    // though 'loginHint' specified the country code as '+1'.
    loginHint: '+11234567890'
  }]
};

function SignupScreen() {

  const { register, handleSubmit } = useForm();
    const onSubmit = data => {
      console.log(data);
      var gmail1 = data.gmail;
      var password1 = data.password
      firebase.auth().createUserWithEmailAndPassword(gmail1, password1)
  .then((userCredential) => {
     upload1();
       window.location = '/upload';
    
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });

      
    }
    function upload1(){
      firebase.auth().currentUser.sendEmailVerification()
  .then(() => {
    alert("Verification mail send successfully");
  });
    }

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        
        var uid = user.uid;
        
        
      } else {
        
      }
    });




  return (
    <div className="head">
      <h1>Project-1</h1>
      <p>Please sign-Up:</p>
      <div className="card contact-form">
      <div className="contact-form-block w-form">
      <form className="contact-form-grid" onSubmit={handleSubmit(onSubmit)}>
      
    <input placeholder="Gmail" className="input w-input" {...register("gmail")} /> 
    <input placeholder="Password" className="input w-input"  {...register("password")} /> 
    <input placeholder="Confirm" className="input w-input"  {...register("confirm_password")} />

      <input className="button-primary w-button"  type="submit" />
    </form>
    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div></div>
      
      
    </div>
  );
}

export var storage1 = firebase.storage();


export default SignupScreen;