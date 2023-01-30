import React, { useContext } from "react";
import { MainContext } from "../Context/MainContext";
import { Layout } from ".";
import { MdOutlineDeleteSweep } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { data, updateCheckoutItems, deleteData } = useContext(MainContext);
  const navigate = useNavigate();
  console.log(data);
  return (
    <Layout>
      <div className="mt-5 p-5 max-w-screen-xl mx-auto">
        <div className="flex justify-between items-center">
          <p className="text-2xl mb-3">Cart Page</p>
          <p className="text-sm cursor-pointer" onClick={() => navigate("/")}>
            Back to home page
          </p>
        </div>
        {data.length !== 0 && (
          <button
            className="mb-4 bg-yellow-400 rounded p-2 w-full text-start"
            onClick={() => navigate("/checkout")}
          >
            Proceed to checkout ({data.length} items)
          </button>
        )}
        {/*  */}
        <div className="flex flex-col gap-10">
          {data.map((item) => (
            <div
              className="flex flex-col sm:flex-row border p-2 rounded"
              key={item.position}
            >
              <div className="h-[13rem] max-w-[13rem] sm:mr-5">
                <img
                  src={item?.thumbnail}
                  alt="procudt_image"
                  className="h-full w-full object-cover rounded shadow"
                />
              </div>
              <div className="flex flex-col">
                <p className="text-lg font-semibold mt-2 sm:mt-0">
                  {item?.name}
                </p>
                <p className="text-sm mt-2 text-slate-600">
                  {item?.product_desc}
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  Ships from and sold by{" "}
                  <span className="font-semibold">{item?.marketplace}</span>
                </p>
                <p className="mt-2">${item?.price}</p>
                <div className="mt-2 flex items-end h-full gap-2">
                  <div>
                    <button
                      className="text-xl py-1 px-5 bg-slate-400 rounded-tl-lg rounded-bl-lg"
                      onClick={() => updateCheckoutItems(item, item.qty - 1)}
                    >
                      -
                    </button>
                    <input
                      value={item?.qty}
                      readOnly
                      className="text-center w-10 bg-slate-300 p-1 text-xl outline-none"
                    />
                    <button
                      className="text-xl py-1 px-5 bg-slate-400 rounded-tr-lg rounded-br-lg"
                      onClick={() => updateCheckoutItems(item, item.qty + 1)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="text-xl py-2 px-5 bg-red-500 hover:bg-red-400 text-white duration-300 rounded-lg"
                    onClick={() => deleteData(item?.position)}
                  >
                    <MdOutlineDeleteSweep />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/*  */}
        {data.length === 0 && (
          <p className="text-center mt-10 text-2xl">No Items Yet</p>
        )}
      </div>
    </Layout>
  );
};

export default Cart;
