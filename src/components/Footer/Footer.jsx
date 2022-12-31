import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="section">
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span><Link className="link" to="/products/1">Naruto</Link> </span>
          <span><Link className="link" to="/products/2">Haikyuu</Link> </span>
          <span><Link className="link" to="/products/3">Attack On Titan</Link> </span>
          <span><Link className="link" to="/products/4">One Piece</Link> </span>
          <span><Link className="link" to="/products/5">Jujutsu Kaisen</Link> </span>
        </div>
        <div className="item">
          <h1>Site Map</h1>
          <span><Link className="link" to="/trackorder" >Track your Order</Link> </span>
          <span><Link className="link" to="/contactus" ></Link> Contact</span>
          {/* <span><Link className="link" to="/stores" ></Link>Stores</span> */}
          <span><Link className="link" to="/terms" >Terms of Service</Link></span>
          <span><Link className="link" to="/returnpolicy" >Privacy Policy</Link></span>
        </div>
       
      </div>
      <div className="bottom">
        <div id="bottom-flex" className="left center">
          <span className="logo">Anime Filter</span>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        {/* <div className="right">
          <img src="/img/payment.png" alt="" />
        </div> */}
      </div>
    </div>
  </div>
  );
};

export default Footer;
