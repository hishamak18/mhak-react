import styled from "styled-components"
import {catogories} from '../data. js'
import CatogoryItem from "./CatogoryItem"

const Container = styled.div `
display:flex;
padding:20px ;
  
`
const Catogories = () => {
    return (<Container>
        { catogories.map(item=>(
            <CatogoryItem item={item}/>
        ))}
        </Container>)
        
}

export default Catogories