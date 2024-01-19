import React from "react";

const Avatar = ({ image, width }) => {
  return (
    <div className="avatar">
      <div
        className={`w-${width}  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2`}
      >
        <img src={image} />
      </div>
    </div>
  );
};

export default Avatar;
