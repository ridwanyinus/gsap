import React from "react";
import Loading from "@/components/Loading";
const page = () => {
  return (
    <div>
      <Loading />
      <div className="bg-black h-screen flex justify-center items-center">
        <h1 className="text-6xl text-white text-center">
          The first rule of <code>Fight Club</code> is: you do not talk about <code>Fight Club</code>.
        </h1>
      </div>
    </div>
  );
};

export default page;
