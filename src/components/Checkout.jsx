import React, { useCallback, useContext, useEffect, useState } from "react";
import { MainContext } from "../Context/MainContext";
import { Layout } from ".";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [totalP, setTotal] = useState(0);
  const { data } = useContext(MainContext);

  const navigate = useNavigate();

  const totalPrice = useCallback(() => {
    let total = 0;
    data.map((x) => (total += x?.price * x?.qty));
    setTotal(total);
  }, [data]);

  const controlForm = (e) => {
    e.preventDefault();
    navigate("/checkout/order-complate");
  };

  useEffect(() => {
    totalPrice();
  }, [totalPrice]);

  return (
    <Layout>
      <div className="max-w-screen-xl mx-auto">
        <div className="sm:mt-10 flex flex-col sm:flex-row sm:gap-10">
          {/*  */}
          <div className="w-full sm:w-2/3 bg-slate-100 py-5 px-20 rounded">
            <p className="text-lg font-semibold">Payment Details</p>
            <div className="mt-5">
              <form className="space-y-5" onSubmit={controlForm}>
                <div className="flex flex-col">
                  <label className="text-gray-600 mb-3">Name on card</label>
                  <input
                    className="px-5 py-2 bg-slate-300 rounded outline-none focus:bg-slate-200 duration-300"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-gray-600 mb-3">Card number</label>
                  <input
                    className="px-5 py-2 bg-slate-300 rounded outline-none focus:bg-slate-200 duration-300"
                    type="number"
                    required
                  />
                </div>
                <div className="flex flex-col sm:flex-row border-b-2 pb-5">
                  <div className="flex flex-col">
                    <label className="text-gray-600 mb-1">Expiration</label>
                    <div className="flex items-center gap-2">
                      <input
                        className="p-2 bg-slate-300 rounded outline-none focus:bg-slate-200 duration-300 w-[5rem]"
                        type="number"
                        required
                      />
                      /
                      <input
                        className="p-2 bg-slate-300 rounded outline-none focus:bg-slate-200 duration-300 w-[5rem]"
                        type="number"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex flex-col w-full sm:ml-5">
                    <label className="text-gray-600 mb-1">CVC</label>
                    <input
                      className="p-2 bg-slate-300 rounded outline-none focus:bg-slate-200 duration-300 w-full"
                      type="number"
                      required
                    />
                  </div>
                </div>
                <div className="flex justify-center sm:justify-end mt-5">
                  <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-8">
                    <button
                      className="px-5 py-2 hover:bg-slate-400 duration-300 hover:text-white rounded"
                      onClick={() => navigate("/cart")}
                    >
                      Cancel Order
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2 bg-blue-500 text-white rounded shadow-md hover:bg-blue-400 duration-300"
                    >
                      Complate Order
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full sm:w-1/3 bg-slate-100 py-5 px-10 rounded">
            <div className="flex flex-col gap-5 max-h-[20rem] overflow-auto mb-5">
              {data?.map((item) => (
                <div
                  className="flex rounded pb-3 border-b pt-2 sm:pt-0"
                  key={item.id}
                >
                  <div className="h-[8rem] w-[8rem] mr-5 relative">
                    <img
                      src={item?.imageUrl}
                      alt="procudt_image"
                      className="h-full w-full object-cover rounded shadow"
                    />
                    <span className="absolute -top-2 -right-2 w-5 h-5 bg-white rounded-full flex justify-center items-center">
                      {item?.qty}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-lg font-semibold">
                      {item?.product_Name}
                    </p>
                    <p className="mt-2">${item?.price}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <p>Sub Total</p>
                <p className="text-lg font-semibold">${totalP}</p>
              </div>
              <div className="flex justify-between items-center">
                <p>Tax</p>
                <p className="text-lg font-semibold">$5.59</p>
              </div>
              <div className="flex justify-between items-center">
                <p>Shipping</p>
                <p className="text-lg font-semibold text-[#38B2AC]">Free</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="font-semibold">Total</p>
                <p className="text-lg font-semibold">
                  ${(totalP + 5.59).toFixed(2)}
                </p>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
