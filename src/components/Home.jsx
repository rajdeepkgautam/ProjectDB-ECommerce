import React, { useState } from "react";
import { APIData } from "./APIData";
import "./css.css";
// import iphone8 from "../assests/iphone_8.png";
import { useCart } from "react-use-cart";

const Home = () => {
  const [ApiData] = useState(APIData);
  const { addItem } = useCart();
  console.log(addItem);
  console.log(ApiData);
  return (
    <div>
      {/* <div className='header' style={{marginLeft:"230px" ,backgroundColor:"pink"}}></div> */}
      <div
        style={{marginTop:"40px"}}
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            data-bs-target="#carouselExampleIndicators"
            data-slide-to="0" 
            class="active" aria-current="true" aria-label="Slide 1"
          ></button>
          <button data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              class="d-block w-100"
              src="https://cdn.thegeekherald.com/wp-content/uploads/2021/04/fmvHKrrEtTParjkThaBpfU-scaled.jpg"
              alt="First slide"
              height="500px"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src="https://bgr.com/wp-content/uploads/2020/04/iphone-12-pro-jonas-daehnert.jpg?quality=70&strip=all"
              alt="Second slide"
              height="500px"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src="https://tse2.mm.bing.net/th?id=OIP.jDxzKqNtAf52YXjSspn2XwHaEK&pid=Api&P=0"
              alt="Third slide"
              height="500px"
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div className="container">
        {/* <img src={iphone8} alt="iphone-8"cla height="500px"ssName='iphone_img , iphone-img-home'/> */}
        <div className="home-product">
          <span className="best-sel">BEST SELLER</span>
          <br />
          <div className="product-home">
            {ApiData.filter((item) => item.id <= 6).map((item) => {
              return (
                <div>
                  <lable className="home-lable">HOT</lable>
                  <img
                    src={item.img}
                    alt="cover"
                    height="500px"
                    className="product-img-home"
                  ></img>
                  <br />
                  <br />
                  <span className="product-name">{item.name}</span>
                  <br />
                  <span className="product-cost">
                    $499 <del>$599</del>
                  </span>
                  <br />
                  <br />
                  <button
                    className="cart-btn"
                    onClick={() => {
                      alert("Item added to cart Please Click On Cart To See Item");
                      addItem(item);
                    }}
                  >
                    Add to cart
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
