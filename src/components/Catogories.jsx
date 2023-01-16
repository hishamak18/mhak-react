import styled from "styled-components"
import {catogories} from "../pages/data.js"
import CatogoryItem from "./CatogoryItem"

const Container = styled.div `
display:flex;
padding:20px ;
justify-content:space-between;
  
`
const Catogories = () => {
    return (<Container>
        { catogories.map(item=>(
            <CatogoryItem item={item} key={item.id }/>

        ))}
        </Container>)
        
}

export default Catogories