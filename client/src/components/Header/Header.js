import React, { useState } from "react";
import "./Header.css"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";
import Badge from '@mui/material/Badge';
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/userRedux";

const Header = () =>{
  const quantity = useSelector(state=>state.cart.quantity)
  const user= useSelector((state)=>state.user.currentUser);
  const dispatch=useDispatch();
  const[selectCatState,setSelectCatState]=useState("all");

  const signOut=()=>{
    dispatch(logout());
  }
  
    return (
        <div className="header">

        <div class="hamburger-menu">
    <input id="menu__toggle" type="checkbox" />
    <label class="menu__btn" for="menu__toggle">
      <span></span>
    </label>
    <ul class="menu__box">
      <li class="menu__item">Categories</li>
      <Link to="/men" style={{ textDecoration: "none", color: "black" }}><li className="menu__item" onClick={()=>setSelectCatState("men")} style={(selectCatState=="men")?{textDecoration:"underLine",fontWeight:"600"}:{}}>Men</li></Link>
      <Link to="/women" style={{ textDecoration: "none", color: "black" }}><li className="menu__item" onClick={()=>setSelectCatState("women")} style={(selectCatState=="women")?{textDecoration:"underLine",fontWeight:"600"}:{}}>Women</li></Link>
      <Link to="/" style={{ textDecoration: "none", color: "black" }}><li className="menu__item" onClick={()=>setSelectCatState("all")} style={(selectCatState=="all")?{textDecoration:"underLine",fontWeight:"600"}:{}}>ShopAll</li></Link>
    </ul>
  </div>

         <Link
                to="/"
                onClick={()=>setSelectCatState("all")}
                style={{ textDecoration: "none", color: "black" }}
              ><div className="brand">
                <p>FASHIONOP</p>
            </div></Link>
            
            <div className="main-categories">
                <ul>
                <Link to="/men" style={{ textDecoration: "none", color: "black" }}><li onClick={()=>setSelectCatState("men")} style={(selectCatState=="men")?{textDecoration:"underLine",fontWeight:"600"}:{}}>Men</li></Link>
                <Link to="/women" style={{ textDecoration: "none", color: "black" }}><li onClick={()=>setSelectCatState("women")} style={(selectCatState=="women")?{textDecoration:"underLine",fontWeight:"600"}:{}}>Women</li></Link>
                <Link to="/" style={{ textDecoration: "none", color: "black" }}><li onClick={()=>setSelectCatState("all")} style={(selectCatState=="all")?{textDecoration:"underLine",fontWeight:"600"}:{}}>ShopAll</li></Link>
                </ul>
            </div>
            <div className="login-cart">
                    
            {user?<Link to="/" style={{ textDecoration: "none", color: "black" }}>
                <p onClick={signOut}>Sign Out</p>
              </Link>:<>
            <Link to="/login" style={{ textDecoration: "none", color: "black" }}>
                <p>Sign In</p>
              </Link>

              <Link
                to="/register"
                style={{ textDecoration: "none", color: "black" }}
              >
                <p>Register</p>
              </Link>
              </>}

              <Link
                to="/cart"
                
                style={{ textDecoration: "none", color: "black" }}
              >
              <Badge badgeContent={quantity} color="primary">
              <ShoppingCartIcon style={{fontSize: "28px",cursor:"pointer"}}></ShoppingCartIcon>
              </Badge>
              </Link>
              
                    
            </div>
        </div>
    )
}

export default Header