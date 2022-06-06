import axios from "axios";
import React, { useContext,useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

const Product = () => {
  // Note: this id should come from api
  const [product,setProduct] = useState([])
  const {addCount,decriment,count} = useContext(CartContext)
  const [cart,setCart] =useState([])
  const {id} =  useParams() ;
  // console.log(id)

  useEffect(() => {
   axios({
     url: `http://localhost:8080/products/${id}`,
     method: "GET",
   }).then((res)=>{
    //  console.log(res.data)
     setProduct(res.data)
   })
  },[id])

  useEffect(() => {
 axios({
   url: `http://localhost:8080/cartItems/`,
   method: "GET",
 }).then((res) => {
    console.log(res.data)
   setCart(res.data);
 });
  },[])

  // console.log(cart)
  return (
    <div data-cy={`product-${product.id}`}>
      <h3 data-cy="product-name">{product.name}</h3>
      <h6 data-cy="product-description">{product.description}</h6>
      <button data-cy="product-add-item-to-cart-button" onClick={addCount}>
        Add
      </button>
      <div>
        <button
          data-cy="product-increment-cart-item-count-button"
          onClick={addCount}
        >cart add</button>
        <span data-cy="product-count">
         {/* {cart.map((e)=>{
           return (
             <div>Count:{e.count}</div>
           )
         })} */}
        </span>
        <button
          data-cy="product-decrement-cart-item-count-button"
          onClick={decriment}
        >
          Remove
        </button>
        <button data-cy="product-remove-cart-item-button" onClick={decriment}>
          cart Remove
        </button>
      </div>
    </div>
  );
};

export default Product;
