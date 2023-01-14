import { Search, ShoppingCartOutlined } from '@mui/icons-material'
import { Badge } from '@mui/material'
import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    // color:white;
    height:60px;
`
const Wrapper = styled.div`
    padding:10px 20px;
    display:flex;
    align-items:center;
    justify-content:space-between;
`
const Left = styled.div`
flex:1;
display:flex;
align-items:center;
// color:black:

`
const Language = styled.span`
    font-size:14px;
    cursor:pointer;    
`
const SearchContainer = styled.div`
    border:0.5px solid lightgray;
    display:flex;
    align-items:center;
    margin-left:25px;
`
const Input =styled.input`
    border:none;
`

const Centre = styled.div`
flex:1;
text-align:center;
`
const Logo = styled.h1`
    font-weight:bold;
`
const Right = styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:flex-end;
`
const MenuItem = styled.div `
margin-left:25px;
cursor:pointer;h
`



const NavBar = () => {
  return (
    <Container>
        <Wrapper>
    <Left>
        <Language>EN</Language>
        <SearchContainer>
            <Input/>
    <Search/>

        </SearchContainer>
        
    </Left>
    <Centre>
        <Logo>Sana.</Logo>
    </Centre>
    <Right>

        <MenuItem>Registration</MenuItem>
        <MenuItem>Sign In</MenuItem>
        <MenuItem>
        <Badge badgeContent={4} color="primary">
        <ShoppingCartOutlined color="action" />
        </Badge>
        </MenuItem>
    </Right>

        </Wrapper>
    </Container>
  )
}

export default NavBar
