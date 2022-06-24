import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import "./ProductList.css"
const ProductList = () =>{
const location= useLocation();
const cat=location.pathname.split("/")[1];
const [products,setProducts]=useState([]);

useEffect(()=>{
const getProducts = async ()=>{
    try{
        const res=await axios.get(cat ? `https://mernfashionop.herokuapp.com/api/products?category=${cat}` : `https://mernfashionop.herokuapp.com/api/products`);
        setProducts(res.data);
    }catch(err){
    }
};
getProducts();
},[cat])

    return(
        <div className="product-list">

        {products.map((product)=>(
           <div className="product">
           <Link to={`/product/${product._id}`}>
           <div className="image-container">
           <img className="product-image" src={product.img}></img>
           </div>
           </Link>
            <h3 className="product-title">{product.title}</h3>
            <p className="product-price">${product.price}</p>
           </div> 
        ))}

        </div>
    )
}

export default ProductList;
