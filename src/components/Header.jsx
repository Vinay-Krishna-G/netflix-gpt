import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error); // An error happened, redirect to login page
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse"); // User is signed in, redirect to browse page
      } else {
        dispatch(removeUser());
        navigate("/"); // User is signed out, redirect to login page
      }
    });

    return () => {
      unsubscribe(); // Cleanup the subscription on component unmount
    };
  }, []);

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black to-transparent z-10 flex justify-between">
      <img className="w-50" src={LOGO} alt="Netflix Logo" />
      {user && (
        <div className="flex justify-between items-center">
          <button
            className=" m-4 w-25 bg-red-600 h-10 text-white font-bold rounded-md cursor-pointer"
            onClick={handleSignOut}
          >
            Log Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
