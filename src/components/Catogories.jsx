import styled from "styled-components"
import {catogories} from "../pages/data.js"
import CatogoryItem from "./CatogoryItem"
import {mobile} from "../responsive";

const Container = styled.div `
display:flex;
padding:20px ;
justify-content:space-between;
${mobile({ padding: "0px", flexDirection:"column" })}
  
`
const Catogories = () => {
    return (<Container>
        { catogories.map(item=>(
            <CatogoryItem item={item} key={item.id }/>

        ))}
        </Container>)
        
}

export default Catogories