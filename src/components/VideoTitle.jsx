import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] px-18 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className=" py-5 text-md w-1/3">{overview}</p>
      <div>
        <button className="cursor-pointer bg-red-500 text-white text-xl font-bold w-30 h-12 rounded-md m-2 p-2 hover:bg-red-400">
          Play{" "}
        </button>
        <button className="cursor-pointer bg-orange-50 text-red-500 text-md font-bold w-30 h-12 rounded-md m-2 p-2 pb-5 hover:bg-orange-100">
          {" "}
          <span className="text-xl">🛈</span> More info{" "}
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
