import React from "react";

function CustomButton({ children, varient }) {
  let btnStyles = "";
  let spanStyles = "";
  if (varient === "green") {
    btnStyles = "bg-[#40916c]";
    spanStyles = "bg-[linear-gradient(to_bottom,#80ed99,#40916c)]";
  } else if (varient === "purple") {
    btnStyles = "bg-[#6a76fa]";
    spanStyles = "bg-[linear-gradient(to_bottom,#917efe,#5d43ee)]";
  } else {
    btnStyles = "";
    spanStyles = "";
  }
  return (
    <button
      className={`font-medium px-5 max-md:px-3 py-1.5 rounded-xl text-white hover:text-black ${spanStyles}`}
    >
      {children}
    </button>
  );
}

export default CustomButton;
