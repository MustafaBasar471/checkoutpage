import axios from "axios";
import React, { createContext, useCallback, useEffect, useState } from "react";
import { toast } from "react-hot-toast";

export const MainContext = createContext();

export const MainProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [apiData, setApiData] = useState([]);

  const getData = () => {
    let items;
    if (localStorage.getItem("items") === null) {
      items = [];
    } else {
      items = JSON.parse(localStorage.getItem("items"));
    }
    return items;
  };

  const deleteData = (ItemId) => {
    let items = getData();

    items.forEach((item, idx) => {
      if (item.position === ItemId) {
        items.splice(idx, 1);
        setData([...items]);
      }
    });
    localStorage.setItem("items", JSON.stringify([...items]));
    toast.success("Item successfully deleted");
  };

  const addClick = (newItem) => {
    let items = getData();
    if (items.filter((x) => x?.position === newItem.position).length !== 0) {
      toast.error("You have already added this item");
    } else {
      const savedItem = {
        ...newItem,
        qty: 1,
      };
      items.push(savedItem);
      localStorage.setItem("items", JSON.stringify([...items]));
      toast.success("Item successfully added");
      setData([...data, savedItem]);
    }
  };

  const updateCheckoutItems = (checkoutItem, qty) => {
    let items = getData();
    for (let product of items) {
      if (product.position === checkoutItem.position) {
        if (qty < 1) {
          toast.error("QTY cannot be less than one");
          return false;
        }
        product.qty = qty;
      }
    }
    setData([...items]);
    localStorage.setItem("items", JSON.stringify(items));
  };

  const loadAllData = useCallback(() => {
    let items = getData();
    setData([...items]);
  }, []);

  const getDataFromApi = useCallback(async () => {
    const result = await axios.get("https://api.chimoney.io/v0.2/info/assets");
    const items = result.data.data.ecommerce;
    let productList = [];
    for (let i = 0; i < 9; i++) {
      productList.push(items[i]);
    }
    setApiData(productList);
  }, []);

  useEffect(() => {
    getDataFromApi();
  }, [getDataFromApi]);

  useEffect(() => {
    loadAllData();
  }, [loadAllData]);

  // Text Func

  const filterText = (text) => {
    const filter = text.split(",")[0];
    const returnText = filter.length > 40 ? filter.slice(0, 35) : filter;
    return returnText;
  };

  return (
    <MainContext.Provider
      value={{
        addClick,
        data,
        apiData,
        deleteData,
        updateCheckoutItems,
        filterText,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
