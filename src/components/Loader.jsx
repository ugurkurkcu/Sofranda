import React from "react";

const Loader = () => {
  return (
    <div className=" w-lvw h-lvh flex justify-center">
      <div className="loader  place-self-center">
        <span className="hour"></span>
        <span className="min"></span>
        <span className="circel"></span>
      </div>
    </div>
  );
};

export default Loader;
