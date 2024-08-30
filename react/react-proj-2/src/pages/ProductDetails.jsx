import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
    const params = useParams();
    const [items,setItems] = useState([])

    const fetchProducts = async () => {

      try {
          const response = await axios.get("https://fakestoreapi.com/products");
          console.log(response);
          setItems(response.data);
      } catch (error) {
          console.log("Error: ",error);
      }
  }

    useEffect(() => {
        console.log("PARAMS: ", params)
        fetchProducts()
    },[params])

    // useEffect(() => {
    //     // MAKE API CALL FOR PARAMS.PRODUCT_NUM
    // },[])

    
  
    useEffect(() => {
      fetchProducts();
    }, []);

    const filteredProduct= items.filter((item) => {
      return (item.id === params)
    })

    console.log("filteredProduct",filteredProduct)
  
  return (
    <div>
      <h1>Product Details</h1>
      {/* <h3>{filteredProduct}</h3> */}
      {}
    </div>
  )
}

export default ProductDetails
