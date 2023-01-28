import React from "react";
import { MainContext } from "../Context/MainContext";
import { Layout } from ".";
import { useNavigate } from "react-router-dom";

const ComplateOrder = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center mt-[10rem]">
        <p className="text-3xl font-semibold">ORDER COMPLETED SUCCESSFULLY</p>
        <div className="flex flex-col justify-center items-center mt-10 gap-5">
          <p className="text-2xl">Order Date: {new Date().toDateString()}</p>
          <p className="text-2xl">Order Number: {new Date().getTime()}</p>
        </div>
        <p
          className="mt-10 text-xl cursor-pointer hover:bg-slate-200 p-5 rounded duration-300"
          onClick={() => navigate("/")}
        >
          Back to home page
        </p>
      </div>
    </Layout>
  );
};

export default ComplateOrder;
