import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard/ProductCard";

const Products = () => {
    const [items,setItems] = useState([]);
//   const fetchProducts = () => {
//     // # API CALLS HERE
//     // fakestore api is E-commerce website jo products ka data return krti h
//     axios.get("https://fakestoreapi.com/products")
//     .then((response) => {
//         // console.log(response);
//         console.log(response.data);
//         setItems(response.data);

//     })
//     .catch((error) => {
//         console.log("Error: ",error);
//     })
//     .finally(() => {
//         console.log("Finally run this code");
//     })
//     ;
//     // console.log(response);
//   };

// alternative way

const fetchProducts = async () => {

    try {
        const response = await axios.get("https://fakestoreapi.com/products");
        // console.log(response);
        setItems(response.data);
    } catch (error) {
        console.log("Error: ",error);
    }

}

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <p>This is Product List</p>
      {items.map((itemsEntry)=>{
        return(
            <ProductCard key={itemsEntry.id} item ={itemsEntry} />
        ) 
      })}
    </div>
  );
};

export default Products;