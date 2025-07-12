import React from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase"; // Adjust the import path as necessary

import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignIn, setSignIn] = React.useState(true);
  const [errorMessage, setErrorMessage] = React.useState(null);

  const dispatch = useDispatch();

  const email = React.useRef(null);
  const password = React.useRef(null);
  const firstName = React.useRef(null);
  const lastName = React.useRef(null);

  const handleButtonClick = () => {
    let message;
    if (isSignIn) {
      message = checkValidData(email.current.value, password.current.value);
    } else {
      message = checkValidData(
        email.current.value,
        password.current.value,
        firstName.current.value,
        lastName.current.value
      );
    }
    setErrorMessage(message);

    if (!message) {
      if (isSignIn) {
        // Handle sign-in logic here

        signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log("User signed in:", user);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + ": " + errorMessage);
          });

        console.log("Signing in with", email.current.value);
      } else {
        // signUp logic

        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;

            updateProfile(user, {
              displayName: `${firstName.current.value} ${lastName.current.value}`,
            })
              .then(() => {
                const { uid, email, displayName } = auth.currentUser;
                dispatch(
                  addUser({ uid: uid, email: email, displayName: displayName })
                );
              })
              .catch((error) => {
                setErrorMessage(error.message);
              });
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + ": " + errorMessage);
            // ..
          });
      }
    }
  };

  const toggleForm = () => {
    setSignIn(!isSignIn);
  };

  return (
    <div>
      <Header />

      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/05e91faa-6f6d-4325-934e-5418dcc2567b/web/IN-en-20250630-TRIFECTA-perspective_159086b1-425f-435b-bcd5-1ed8039cdef9_large.jpg" />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute bg-black p-12 mx-auto my-38 right-0 left-0 text-white opacity-85"
      >
        <h1 className="text-3xl font-bold py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignIn && (
          <div>
            <input
              ref={firstName}
              type="text"
              placeholder="Fisrt Name"
              className="p-4 my-4 border border-gray-300 rounded w-full bg-gray-600"
            />
            <input
              ref={lastName}
              type="text"
              placeholder="Last Name"
              className="p-4 my-4 border border-gray-300 rounded w-full bg-gray-600"
            />
          </div>
        )}

        <input
          ref={email}
          type="email"
          placeholder="Email"
          className="p-4 my-4 border border-gray-300 rounded w-full bg-gray-600"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 border border-gray-300 rounded w-full bg-gray-600"
        />

        <p className="text-red-400 py-2 font-bold text-l">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-600 text-white hover:bg-red-700 w-full rounded-lg cursor-pointer"
          onClick={handleButtonClick}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4" onClick={toggleForm}>
          {isSignIn
            ? "New to Netflix? SignUp here."
            : "Already have an account? SignIn here."}
        </p>
      </form>
    </div>
  );
};

export default Login;
