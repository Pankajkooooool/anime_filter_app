import React from "react";
import "./Contact.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsappIcon from "@mui/icons-material/WhatsApp";


const Contact = () => {
  return (
    <div className="contact">
      <div className="wrapper">
        <form action="formsubmit.io/pankajkooooool6@gmail.com" method="POST">
        <span>Subscribe to Our Newsletter:</span>
        <div className="mail">
          <input type="text" placeholder="Enter your e-mail..." />
          <button type='submit'>Subscribe</button>
        </div>
        </form>
        <div className="icons">
          <a className='link' href="https://facebook.com/"><FacebookIcon /></a>
          <a className='link' href="https://instagram.com/animefilter_"><InstagramIcon /></a>
          <a className='link' href="https://twitter.com/animefilter_"><TwitterIcon /></a>
          <a className='link'  href="https://whatsapp.com/"><WhatsappIcon /></a>
        
        </div>
      </div>
    </div>
  );
};

export default Contact;
