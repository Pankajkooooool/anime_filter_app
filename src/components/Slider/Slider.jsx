import React, { useState, useEffect } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import "./Slider.scss";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
   
    "https://i.imgur.com/H02AwQX.jpg",
    "https://i.imgur.com/fNA6cd9.jpg",
    "https://i.imgur.com/U0EY1Id.jpg",
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);

  };

  useEffect(() => {
    nextSlide();
    }, []);

  setTimeout(() => {
    nextSlide();
    }, 60000);

  return (
    <div className="slider">
      <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
        <img src={data[0]} alt="" />
        {/* <img src="../../../public/img/1672420183492.png" alt="" /> */}
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
        {/* <img src={data[3]} alt="" /> ₹ */  }
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <WestOutlinedIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <EastOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;
