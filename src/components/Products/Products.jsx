import React, { useContext,useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import styles from "./Product.module.css";

const Products = () => {
   const {data,getData} = useContext(CartContext)
  //  console.log(data)
  useEffect(() =>{
getData()
  },[])
  return <div>
  {data.map((e)=>{
    return (
      <div key={e.id} style={{display:"flex"}}>
        <div>{e.name}</div>
        <div>{e.description}</div>
        <Link to={`/products/${e.id}`}>See More</Link>
      </div>
    );
  })}
  </div>;
};

export default Products;
