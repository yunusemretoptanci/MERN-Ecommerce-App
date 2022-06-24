import React from "react";
import { useLocation } from "react-router-dom";
import "./Categories.css"

const Categories = () =>{
    const location= useLocation();
    const cat=location.pathname.split("/")[1];

    return(
        <div className="categories">
            {/* <div className="categories-list">
                <ul>
                    <li>All</li>
                    <li>T-Shirt</li>
                    <li>Shoes</li>
                    <li>Bottoms</li>
                </ul>
            </div> */}
        <h2>Shop {cat ? cat: "All"}</h2>
        </div>
    )
}

export default Categories;