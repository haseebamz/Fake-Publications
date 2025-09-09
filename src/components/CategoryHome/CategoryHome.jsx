import React, { useState, useEffect } from "react";
import styles from "./CategoryHome.module.css";

function CategoryHome() {
  const [productsData, setProductsData] = useState({
    entryTestList: [],
    entryTestName: "",
    entryTestDescription: "",
    intermediateList: [],
    intermediateName: "",
    intermediateDescription: "",
    matricList: [],
    matricName: "",
    matricDescription: "",
    lowerSecondaryList: [],
    lowerSecondaryName: "",
    lowerSecondaryDescription: "",
  });

  const API_KEY = import.meta.env.VITE_API_KEY;;
  const BASE_URL = "/api/Product/landingpageproductlist"; // proxied path

  async function fetchProductList() {
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

      const entryTestCategory = data.Data.find(
        (item) => item.Category.CategoryName === "ENTRY TEST"
      );

      const intermediateCategory = data.Data.find(
        (item) => item.Category.CategoryName === "INTERMEDIATE"
      );

      const matricCategory = data.Data.find(
        (item) => item.Category.CategoryName === "MATRIC"
      );

      const lowerSecondaryCategory = data.Data.find(
        (item) => item.Category.CategoryName === "LOWER SECONDARY"
      );

      setProductsData({
        entryTestName: entryTestCategory?.Category.CategoryName || "",
        entryTestDescription:
          entryTestCategory?.Category.CategoryDescription || "",
        entryTestList: entryTestCategory?.ProductList || [],
        intermediateName: intermediateCategory?.Category.CategoryName || "",
        intermediateDescription:
          intermediateCategory?.Category.CategoryDescription || "",
        intermediateList: intermediateCategory?.ProductList || [],
        matricName: matricCategory?.Category.CategoryName || "",
        matricDescription: matricCategory?.Category.CategoryDescription || "",
        matricList: matricCategory?.ProductList || [],
        lowerSecondaryName: lowerSecondaryCategory?.Category.CategoryName || "",
        lowerSecondaryDescription:
          lowerSecondaryCategory?.Category.CategoryDescription || "",
        lowerSecondaryList: lowerSecondaryCategory?.ProductList || [],
      });
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }

  useEffect(() => {
    fetchProductList();
  }, []);

  return (
    <div>
      <section className={styles.productsByCategoryWrap} >
        <div className={styles.productsByCategoryList}>
          <div className="container">
            <div className="row">
              <div className="col-lg-3 d-flex flex-column justify-content-center">
                <h2>{productsData.entryTestName}</h2>
                <p className={styles.categoryDesc}>
                  {productsData.entryTestDescription}
                </p>
              </div>
              <div className={`col-lg-9 ${styles.categoryCardsWrap} `}>
                {productsData.entryTestList.slice(0, 3).map((item) => (
                  <div className="allCards " key={item.ProductId}>
                    {item.IsNewProduct ? <span className="newTag" >New</span> : ""}
                    <div className="cardImgWrap">
                      <img
                        src={item.ThumbnailImagePath}
                        alt="Entry Test Books"
                        width={255}
                        height={296}
                      />
                    </div>
                    <span className="productName">{item.ProductName}</span>
                    <span className="productPrice">Rs {item.MinPrice}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.productsByCategoryList}>
          <div className="container">
            <div className="row flex-row-reverse">
              <div className="col-lg-3 d-flex flex-column justify-content-center">
                <h2>{productsData.intermediateName}</h2>
                <p className={styles.categoryDesc}>
                  {productsData.intermediateDescription}
                </p>
              </div>
              <div className={`col-lg-9 ${styles.categoryCardsWrap} `}>
                {productsData.intermediateList.slice(0, 3).map((item) => (
                  <div className="allCards " key={item.ProductId}>
                    {item.IsNewProduct ? <span className="newTag" >New</span> : ""}
                    <div className="cardImgWrap">
                      <img
                        src={item.ThumbnailImagePath}
                        alt="Entry Test Books"
                        width={255}
                        height={296}
                      />
                    </div>
                    <span className="productName">{item.ProductName}</span>
                    <span className="productPrice">Rs {item.MinPrice}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.productsByCategoryList}>
          <div className="container">
            <div className="row">
              <div className="col-lg-3 d-flex flex-column justify-content-center">
                <h2>{productsData.matricName}</h2>
                <p className={styles.categoryDesc}>
                  {productsData.matricDescription}
                </p>
              </div>
              <div className={`col-lg-9 ${styles.categoryCardsWrap} `}>
                {productsData.matricList.slice(0, 3).map((item) => (
                  <div className="allCards " key={item.ProductId}>
                    {item.IsNewProduct ? <span className="newTag" >New</span> : ""}
                    <div className="cardImgWrap">
                      <img
                        src={item.ThumbnailImagePath}
                        alt="Entry Test Books"
                        width={255}
                        height={296}
                      />
                    </div>
                    <span className="productName">{item.ProductName}</span>
                    <span className="productPrice">Rs {item.MinPrice}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>


        <div className={styles.productsByCategoryList}>
          <div className="container">
            <div className="row flex-row-reverse">
              <div className="col-lg-3 d-flex flex-column justify-content-center">
                <h2>{productsData.lowerSecondaryName}</h2>
                <p className={styles.categoryDesc}>
                  {productsData.lowerSecondaryDescription}
                </p>
              </div>
              <div className={`col-lg-9 ${styles.categoryCardsWrap} `}>
                {productsData.lowerSecondaryList.slice(0, 3).map((item) => (
                  <div className="allCards " key={item.ProductId}>
                    {item.IsNewProduct ? <span className="newTag" >New</span> : ""}
                    <div className="cardImgWrap">
                      <img
                        src={item.ThumbnailImagePath}
                        alt="Entry Test Books"
                        width={255}
                        height={296}
                      />
                    </div>
                    <span className="productName">{item.ProductName}</span>
                    <span className="productPrice">Rs {item.MinPrice}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CategoryHome;
