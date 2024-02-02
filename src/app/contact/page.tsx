import React from "react";
import Form from "../components/Form";

const page = () => {
  return (
    <>
      <div className="bg-style bg-center bg-cover h-auto flex flex-col items-center gap-16 pt-52 ">
        <div>
          <h1 className="text-white text-5xl">
            {" "}
            <span className="text-9xl text-[#EA5709]">K</span>ontakta oss
          </h1>
        </div>
        <div>
          <h1 className="text-white p-4 text-center text-2xl">
            Var god fyll i formuläret nedan så återkommer vi så snabbt vi kan
          </h1>
        </div>

        <Form />
      </div>

      <div className="bg-[#002444]  h-[10vh]"> </div>
    </>
  );
};

export default page;
