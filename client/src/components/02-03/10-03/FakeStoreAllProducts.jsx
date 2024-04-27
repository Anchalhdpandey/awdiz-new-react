import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FakeStoreAllProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  console.log(allProducts, "allproducts");
  const router = useNavigate();
  async function getProducts() {
    // api call
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      //   console.log(response, "response from fake-store API");
      if (response?.data.length) {
        setAllProducts(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  }
  async function redirect(id) {
    router(`/fake-single-product/${id}`);
    // alert(id)
  }
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <h1>FakeStoreAllProducts</h1>
      {allProducts?.length ? (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          {allProducts.map((productObj) => (
            <div
              onClick={() => redirect(productObj.id)}
              style={{
                width: "18%",
                border: "2px solid black",
                height: "250px",
                marginBottom: "25px",
                padding: "30px",
              }}
            >
              <img
                src={productObj.image}
                style={{ height: "70%", width: "100%" }}
              />
              <p>{productObj.title}</p>
            </div>
          ))}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};
export default FakeStoreAllProducts;
