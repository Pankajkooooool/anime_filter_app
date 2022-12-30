import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="https://i.imgur.com/LnC2Gx9.png&w=1600"
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">
              Naruto
            </Link>
          </button>
        </div>
        <div className="row">
          <img
            src="https://i.imgur.com/KcqneA7.png&w=1600"
            alt=""
          />
          <button>
            <Link to="/products/2" className="link">
              Haikyuu
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row scam">
          {" "}
          <img
            src="https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <button>
            <Link to="/products/3" className="link">
              New Season
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="https://i.imgur.com/I7pg4aI.png&w=1600"
                alt=""
              />
              <button>
                <Link to="/products/4" className="link">
                 AOT
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              {" "}
              <img
                src="https://imgur.com/vpWb79c.png&w=1600"
                alt=""
              />
              <button>
                <Link to="/products/5" className="link">
                  One Piece
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="https://i.imgur.com/DkdtetU.png"
            alt=""
          />
          <button>
            <Link to="/products/6" className="link">
              JJK
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
