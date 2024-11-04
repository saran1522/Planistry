import { SignUp } from "@clerk/nextjs";
import React from "react";

function page() {
  return (
    <div className="w-full flex justify-center items-center py-10">
      <SignUp />
    </div>
  );
}

export default page;
