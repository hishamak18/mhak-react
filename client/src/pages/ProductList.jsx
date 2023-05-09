import React, { useState } from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import Announsment from "../components/Announsment";
import Footer from "../components/Footer";
import Product from "../components/Product";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import { useLocation } from "react-router-dom";

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
    const location = useLocation();
    const cat= location.pathname.split('/')[2]
    const [filters,setFilters] = useState({});
    const [sort,setSort] = useState("newest");


    const handleFilters = (e) =>{
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]:value,
        });
    }
    return (
        <Container>
            <NavBar/>
            <Announsment/>
            <Tittle>{cat}</Tittle>
            <FilterContainer>
                <Filter> 
                <FilterText>Filter Products:</FilterText>
                <Select name="color" onChange={handleFilters}>
                    <Option disabled >Color</Option>
                    <Option>black</Option>
                    <Option>white</Option>
                    <Option>brown</Option>
                    <Option>dark</Option>
                    <Option>red </Option>
                </Select>
                <Select name="size" onChange={handleFilters}>
                    <Option disabled >Size</Option>
                    <Option>XL</Option>
                    <Option>X</Option>
                    <Option>M</Option>
                    <Option>S</Option>
                    <Option>XS </Option>
                </Select>
                </Filter>
                <Filter>
                <FilterText>Sort Products:</FilterText>
                <Select onChange={e=>setSort(e.target.value)}>
                    <Option value="newest">Newest</Option>
                    <Option value="asc">Price asc</Option>
                    <Option value="desc">Price desc</Option>
                </Select>
                </Filter>
                     
            </FilterContainer>
            <Products cat={cat} filters={filters} sort={sort}/>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default ProductList