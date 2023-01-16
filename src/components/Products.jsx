import styled from "styled-components"
import {mainProducts} from "../pages/data.js"
import Product from "./Product.jsx"



const Content = styled.div`
    // display:flex;
    // align-items:center;
    // justify-content:center;
`

const Container  = styled.div
`
padding-left:30px;
display: grid;
grid-template-columns: auto auto auto auto;
gap: 30px 30px;
`

const Products = () => {
  return (
    <Content>
      <Container>
        {mainProducts.map((item)=> (
            <Product item={item} key={item.id}/>
            ))}

            
    </Container>
            </Content>
  )
}

export default Products