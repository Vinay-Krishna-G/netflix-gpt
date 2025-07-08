import React from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setSignIn] = React.useState(true);

  const toggleForm = () => {
    setSignIn(!isSignIn);
  };

  return (
    <div>
      <Header />

      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/05e91faa-6f6d-4325-934e-5418dcc2567b/web/IN-en-20250630-TRIFECTA-perspective_159086b1-425f-435b-bcd5-1ed8039cdef9_large.jpg" />
      </div>

      <form className="w-3/12 absolute bg-black p-12 mx-auto my-38 right-0 left-0 text-white opacity-85">
        <h1 className="text-3xl font-bold py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignIn && (
          <div>
            <input
              type="text"
              placeholder="Fisrt Name"
              className="p-4 my-4 border border-gray-300 rounded w-full bg-gray-600"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="p-4 my-4 border border-gray-300 rounded w-full bg-gray-600"
            />
          </div>
        )}

        <input
          type="email"
          placeholder="Email"
          className="p-4 my-4 border border-gray-300 rounded w-full bg-gray-600"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 border border-gray-300 rounded w-full bg-gray-600"
        />
        <button className="p-4 my-6 bg-red-600 text-white hover:bg-red-700 w-full rounded-lg">
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
