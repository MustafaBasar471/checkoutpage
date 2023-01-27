import React, { useContext } from "react";
import { MainContext } from "../Context/MainContext";
import { Layout } from ".";
import { Link } from "react-router-dom";
import { MdOutlineDeleteSweep } from "react-icons/md";

const Cart = () => {
  const { data, updateCheckoutItems, deleteData } = useContext(MainContext);

  return (
    <Layout>
      <div className="mt-5 p-5 sm:p-0 max-w-screen-xl mx-auto">
        <div className="flex justify-between items-center">
          <p className="text-2xl mb-3">Cart Page</p>
          <Link className="text-sm" to="/">
            Back to home page
          </Link>
        </div>
        {data.length !== 0 && (
          <p className="mb-4 bg-yellow-400 rounded p-2">
            Proceed to checkout ({data.length} items)
          </p>
        )}
        {/*  */}
        <div className="flex flex-col gap-10">
          {data.map((item) => (
            <div className="flex border p-2 rounded" key={item.id}>
              <div className="h-[13rem] w-[15rem] mr-5">
                <img
                  src={item?.imageUrl}
                  alt="procudt_image"
                  className="h-full w-full object-cover rounded shadow"
                />
              </div>
              <div className="flex flex-col">
                <p className="text-lg font-semibold">{item?.product_Name}</p>
                <p className="text-sm mt-2 text-slate-600">
                  {item?.product_desc}
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  Ships from and sold by{" "}
                  <span className="font-semibold">{item?.product_owner}</span>
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
                    onClick={() => deleteData(item?.id)}
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
