import React, { createContext, useCallback, useEffect, useState } from "react";
import { toast } from "react-hot-toast";

export const MainContext = createContext();

export const MainProvider = ({ children }) => {
  const [data, setData] = useState([]);

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
      if (item.id === ItemId) {
        items.splice(idx, 1);
        setData([...items]);
      }
    });
    localStorage.setItem("items", JSON.stringify([...items]));
    toast.success("Item successfully deleted");
  };

  const addClick = (newItem) => {
    let items = getData();
    if (items.filter((x) => x?.id === newItem.id).length !== 0) {
      toast.error("You have already added this item");
    } else {
      items.push(newItem);
      localStorage.setItem("items", JSON.stringify([...items]));
      toast.success("Item successfully added");

      setData([...data, newItem]);
    }
  };

  const updateCheckoutItems = (checkoutItem, qty) => {
    let items = getData();
    for (let product of items) {
      if (product.id === checkoutItem.id) {
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

  useEffect(() => {
    loadAllData();
  }, [loadAllData]);

  return (
    <MainContext.Provider
      value={{ addClick, data, deleteData, updateCheckoutItems }}
    >
      {children}
    </MainContext.Provider>
  );
};
