import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import "./Navbar.scss"
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";
import MLogo from "./logo.svg"

const Navbar = () => {
  const [open,setOpen] = useState(false)
  const products = useSelector((state) => state.cart.products);

  return (
    <div className="navbar">
      <div className="wrapper">
        
        <div className="center">
        <Link className ="link" to="/">Anime Filter</Link>
        </div>
        <div className="right">
          {/* <div className="item">
            <Link className ="link" to="/">Home</Link>
          </div> */}
         
          <div className="item">
            <Link className ="link" to="/contactus">Contact  </Link>
          </div>
       
          <div className="icons">
            {/* <SearchIcon/> */}
            {/* <PersonOutlineOutlinedIcon/> */}
            {/* <FavoriteBorderOutlinedIcon/> */}
            <div className="cartIcon" onClick={()=>setOpen(!open)}>
              <ShoppingCartOutlinedIcon/>
              <span>{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart/>}
    </div>
  );
};

export default Navbar;
