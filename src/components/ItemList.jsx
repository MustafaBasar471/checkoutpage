import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MainContext } from "../Context/MainContext";

const ItemList = () => {
  const { addClick, data, apiData, filterText } = useContext(MainContext);
  const navigate = useNavigate();

  return (
    <div className="p-5">
      {/*  */}
      <div className="flex justify-center md:justify-between items-center flex-wrap max-w-screen-xl gap-2 mx-auto">
        {apiData.map((item) => (
          <div className="bg-slate-100 w-[25rem] h-[22rem]" key={item.position}>
            <div className="p-2">
              <div className="w-full h-[15rem] rounded">
                <img
                  src={item.thumbnail}
                  alt="imag"
                  className="object-cover h-full w-full"
                />
              </div>
              <div>
                <div className="mt-2 flex justify-between items-center">
                  <p className="text-lg">{filterText(item.name)}</p>
                  <p className="text-sm">${item.price}</p>
                </div>
                <button className="w-full p-2 bg-blue-500 mt-2 text-white hover:bg-blue-400 duration-300 rounded">
                  {data.find((x) => x.position === item.position) ? (
                    <p onClick={() => navigate("/cart")}>Go Cart</p>
                  ) : (
                    <p onClick={() => addClick(item)}>Add to Cart</p>
                  )}
                </button>
              </div>
            </div>
          </div>
        ))}
        {/*  */}
      </div>
    </div>
  );
};

export default ItemList;
