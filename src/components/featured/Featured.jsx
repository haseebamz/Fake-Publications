import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from "./Featured.module.css";


function Featured() {
  const [featured, setFeatured] = useState([]);

  const API_KEY = import.meta.env.VITE_API_KEY;;
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

  return (
    <div>
      <section className={styles.featuredWrap} >
        <div className="container">
          <h2 className="text-center" >Featured Products</h2>
          <Slider {...settings}>
            {featured.map((item) => (


              <div className="allCards featuredCard" key={item.ProductId}>
                {item.IsNewProduct ? <span className="newTag" >New</span> : "" }  
                <div className="cardImgWrap">
                <img src={item.ThumbnailImagePath} alt="" width={255} height={296} />
                </div>
                <span className="productName" >{item.ProductName}</span>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
}

export default Featured;
