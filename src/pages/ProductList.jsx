import React from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import Announsment from "../components/Announsment";
import Footer from "../components/Footer";
import Product from "../components/Product";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";

const Container = styled.div`

`
const FilterContainer =styled.div`
    display:flex;
    justify-content:space-between;
    
`
const Tittle = styled.h1`
    margin:20px;
`
const Filter = styled.div`
     margin:20px;

`
const FilterText =styled.span`
    font-size:20px;
    font-weight:600;
    margin-right: 20px;

`
const Select = styled.select`
    padding:10px;
    margin-right:20px;
`
const Option = styled.option`

`
const ProductList = ()=>{
    
    return (
        <Container>
            <NavBar/>
            <Announsment/>
            <Tittle>Shoes</Tittle>
            <FilterContainer>
                <Filter> 
                <FilterText>Filter Products:</FilterText>
                <Select>
                    <Option disabled selected>Color</Option>
                    <Option>Black</Option>
                    <Option>White</Option>
                    <Option>Brown</Option>
                    <Option>Dark</Option>
                    <Option>Red </Option>
                </Select>
                <Select>
                    <Option disabled selected>Size</Option>
                    <Option>XL</Option>
                    <Option>X</Option>
                    <Option>M</Option>
                    <Option>S</Option>
                    <Option>XS </Option>
                </Select>
                </Filter>
                <Filter>
                <FilterText>Sort Products:</FilterText>
                <Select>
                    <Option selected>Newest</Option>
                    <Option >Price asc</Option>
                    <Option >Price desc</Option>


                </Select>
                </Filter>
                     
            </FilterContainer>
            <Products/>
            <Newsletter/>
            {/* <Product/> */}
            <Footer/>
        </Container>
    )
}

export default ProductList