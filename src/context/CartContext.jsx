import axios from "axios";
import React, { createContext,useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [count,setCount] = useState(0)
  const [data,setData]= useState([])

  const addCount = ()=>{
    setCount(count+1)
  }
  const decriment=()=>{
    setCount(count-1)
  }
   const getData = ()=>{
     axios.get("http://localhost:8080/products").then((res) => {
       //  console.log(res.data);
       setData(res.data);
     });
   }
  //  getData()
  return <CartContext.Provider
  value={{getData,data,count,addCount,decriment}}>{children}</CartContext.Provider>;
};
