import React from 'react'
import styled from "styled-components"
import {mobile} from "../responsive";
import { Link } from 'react-router-dom';

const Container = styled.div `
flex:1;
margin:3px;
height:70vh;
position:relative;
// background-color:#f5fafd;
border-radius:8px;
&:hover{
  box-shadow: -9px 8px 25px 2px rgba(0, 0, 0, 0.278);

}
`
const Image = styled.img`
  height:100%;
  width:100%;
  border-radius:8px;
  object-fit:cover;
  ${mobile({ height: "20vh" })}

`
const Info = styled.div`
position:absolute;
top:0;
left:0;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
width:100%;
height:100%;
font-family: 'Oswald', sans-serif;
`
const Tittle = styled.h1`
  color:white;
  font-weight:700;

  // box-shadow: 0 0 5px .5px rgba(0, 0, 0, 0.287);
  margin-bottom:20px;

  &:hover{
    transform:scale(1.1)
  }

`
const Button = styled.button`
  border:none;
  padding:10px; 
  baground-color:white;
  color:grey;
  font-weight:600;
  cursor:pointer;
  box-shadow: 0 0 5px .5px rgba(0,box 0, 0, 0.287);

  &:hover{
    background-color: rgb(92, 86, 86);
    color: white;
    font-weight: bolder;
    border-radius: 4px;
  }
`


const CatogoryItem = ({item}) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
      <Image src={item.img}/>
      <Info>
        <Tittle>{item.tittle }</Tittle>
        <Button>SHOP NOW</Button>
      </Info>
      </Link>
  
    </Container>
  )
}

export default CatogoryItem