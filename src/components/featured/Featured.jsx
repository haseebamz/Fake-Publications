import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from "./Featured.module.css";
import axios from "axios";
// import useCart from "../../hooks/useCart";

function Featured() {
  const [featured, setFeatured] = useState([]);
  const [loading, setLoading] = useState(true)

  const API_KEY = import.meta.env.VITE_API_KEY;
  const BASE_URL = "/api/Product/featuredlist?IsNew=true&IsFeatured=true";

  async function fetchFeatured() {
    try {
      const response = await fetch(BASE_URL, {
        method: "GET",
        headers: {
          "api-security-key": API_KEY,
          accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      // console.log("Fetched data:", data);
      setFeatured(data.Data);
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchFeatured();
  }, []);

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const addToCart = async (item) => {
    const payLoad = {
      ProductId: item.ProductId,
      ProductDetailId: 45798,
      Quantity: 1,
      SessionId: 6478924,
    };

    console.log("Cart clicked", item.ProductName);

    try {
      const response = await axios.post("/api/Cart/add/guest?", payLoad, {
        headers: {
          "api-security-key": API_KEY,
          accept: "application/json",
        },
      });
      console.log("API response", response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <section className={styles.featuredWrap}>
        <div className="container">
          <h2 className="text-center">Featured Products</h2>
          {loading ? <div>Loading...</div> :  <Slider {...settings}>
            {featured.map((item) => (
              <div className="allCards featuredCard" key={item.ProductId}>
                {item.IsNewProduct ? <span className="newTag">New</span> : ""}
                <div className="cardImgWrap">
                  <img
                    src={item.ThumbnailImagePath}
                    alt=""
                    width={255}
                    height={296}
                  />
                </div>
                <div className="d-flex align-items-center">
                  <span className="productName">{item.ProductName}</span>
                  <span className="cartPlus" onClick={() => addToCart(item)}>
                    +
                  </span>
                </div>
              </div>
            ))}
          </Slider> }
         
        </div>
      </section>
    </div>
  );
}

export default Featured;
