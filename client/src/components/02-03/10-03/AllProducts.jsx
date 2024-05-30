import axios from "axios";
import React, { useEffect, useState } from "react";
const AllProducts = (props) => {
  const { awdiz } = props;
  console.log(awdiz, "awdiz");
  const [allProducts, setAllProducts]=useState([]);

  useEffect(()=>{
   async function getProducts(){
      try{
        const response=await axios.get('/api/v1/product/get-products');
        if(response?.data?.success){
          setAllProducts(response.data.products)
        }
      }catch(error){
        console.log(error)
      }
    }
    getProducts();
  }, []);
  return (
    <div>
      <h1>All Products</h1>
      {allProducts.length? <div style={{display:"flex", flexWrap:"flex-wrap", justifyContent: 'space-between'}}>
      {allProducts.map((productObj)=>(
        <div style={{ width: "50%", border: "2px solid black", height: "550px" }}>
          <img src="https://shop.symphonylimited.com/cdn/shop/files/Group206962.png?v=1711970541" width={300}/>
          <h1>Name: {productObj.name}</h1>
          <p>Category: {productObj.category}</p>
          <p>Price: {productObj.price}</p>
          <p>Total Quantities: {productObj.quantity}</p>
          <p>{productObj.tags}</p>
            {/* <img style={{ height: "70%", width: '100%' }} src={productObj.image}/>
            <h1>{productObj.name}</h1> */}
        </div>
      ))}
      </div> : <div>Loading...</div>}
      
      {/* <div style={{display:"flex", flexWrap:"flex-wrap", justifyContent: 'space-between'}}>
      {awdiz.map((productObj)=>(
        <div style={{ width: "50%", border: "2px solid black", height: "250px" }}>
            <img style={{ height: "70%", width: '100%' }} src={productObj.image}/>
            <h1>{productObj.name}</h1>
        </div>
      ))}
      </div> */}
    </div>
  );
};
export default AllProducts;
