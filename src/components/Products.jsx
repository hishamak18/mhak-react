import styled from "styled-components"
import {mainProducts} from "../pages/data.js"
import Product from "./Product.jsx"



const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap:30px;
    
`;

const Products = () => {
  return (
    <Container>
      {mainProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products