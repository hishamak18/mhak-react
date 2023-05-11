import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import {mainProducts} from "../pages/data.js"
import Product from "./Product.jsx"
import axios from 'axios'
import { userRequest } from '../requestMethods.js'



const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap:30px;
    
`;

const Products = ({cat,filters,sort}) => {
  const [products,setProducts] = useState([]);
  const [filteredProducts,setFilteredProducts] = useState([]);

  useEffect(()=>{
    const getProducts = async ()=>{
      try{
        const res = await userRequest.get(cat ? `/products?category=${cat}`
        : "/products" )
        setProducts(res.data)
      }catch(err){

      };

    };
    getProducts();
  },[cat]);

    useEffect(()=>{
      cat && setFilteredProducts(
        products.filter(item=>Object.entries(filters).every(([key,value])=>
        item[key].includes(value)))
      )
    },[products,cat,filters]);

    useEffect(() => {
      if (sort === "newest") {
        setFilteredProducts((prev) =>
          [...prev].sort((a, b) => a.createdAt - b.createdAt)
        );
      } else if (sort === "asc") {
        setFilteredProducts((prev) =>
          [...prev].sort((a, b) => a.price - b.price)
        );
      } else {
        setFilteredProducts((prev) =>
          [...prev].sort((a, b) => b.price - a.price)
        );
      }
    }, [sort]);

  return (
    <Container>
      {cat
        ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
        : products
            .slice(0, 10)
            .map((item) => <Product item={item} key={item.id} />)}
    </Container>
  );
};

export default Products