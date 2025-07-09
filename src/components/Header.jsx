import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/"); // Sign-out successful, redirect to login page
      })
      .catch((error) => {
        navigate("/error");
        console.log(error); // An error happened, redirect to login page
      });
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black to-transparent z-10 flex justify-between">
      <img
        className="w-50"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-01/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix Logo"
      />
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
