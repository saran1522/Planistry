import { SignIn } from "@clerk/nextjs";
import React from "react";

function page() {
  return (
    <div className="w-full flex justify-center items-center py-10">
      <SignIn />
    </div>
  );
}

export default page;
