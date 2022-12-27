import React from "react";
import { useState } from "react";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import BalanceIcon from "@mui/icons-material/Balance";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";

const Product = () => {
  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

  return (
    <div className="product">
      {loading ? (
        "loading"
      ) : (
        <>
          <div className="left">
            <div className="images">
              <img
                src={
                  data?.attributes?.img?.data?.attributes?.url
                }
                alt=""
                onClick={(e) => setSelectedImg("img")}
              />
              <img
                src={
                  data?.attributes?.img2?.data?.attributes?.url
                }
                alt=""
                onClick={(e) => setSelectedImg("img2")}
              />
            </div>
            <div className="mainImg">
              <img
                src={ 
                  data?.attributes[selectedImg]?.data?.attributes?.url
                }
                alt=""
              />
            </div>
          </div>
          <div className="right">
            <h2 className=" Pains">{data?.attributes?.title}  <span className="price">₹{data?.attributes?.price}</span></h2>
            
            <p>{data?.attributes?.desc}</p>
            <div className="quantity">
              <button
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
              >
                -
              </button>
              {quantity}
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>
            <button
              className="add"
              onClick={() =>
                dispatch(
                  addToCart({
                    id: data.id,
                    title: data.attributes.title,
                    desc: data.attributes.desc,
                    price: data.attributes.price,
                    img: data.attributes.img.data.attributes.url,
                    quantity,
                  })
                )
              }
            >
              <AddShoppingCartIcon /> ADD TO CART
            </button>
            <div className="links">
              {/* <div className="item">
                <FavoriteBorderIcon /> ADD TO WISH LIST
              </div> */}
              {/* <div className="item">
                <BalanceIcon /> ADD TO COMPARE
              </div> */}
            </div>
            <div className="info">
              <span>Vendor: Anime Filter</span>
              <span>Product Type:  {data?.attributes?.type}</span>
            </div>
            <hr />
            <div className="info">
              <span>DESCRIPTION</span>
              
    Made of 100% combed cotton with a wrinkle-free and smooth finish. <br />
    320 GSM of fabric weight, which will last long enough to make you forget the year of purchase <br />
    100% Bio-washed cotton with a soft fabric feel.<br />
    Non-zipped with convenient kangaroo pockets. <br />
    Unisex hoodie pattern with a regular fit<br />
    Side-seamed <br />

    <span>Washing Guidelines:</span> <br />
  

    Do not IRON directly on the print. <br />
    Always turn your garment INSIDE OUT before washing & drying to prevent fading.<br />
    Hand/Machine wash with similar clothes in COLD water.<br />
    Do Not Wring (Squeeze and twist the clothing).<br />
    Dry on a flat surface as hanging may cause measurement variations.<br />



              <hr />
             
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Product;
