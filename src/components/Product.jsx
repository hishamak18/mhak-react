import styled from "styled-components"
import { ShoppingCartOutlined,FavoriteBorderOutlined,SearchOutlined } from '@mui/icons-material'



const Info=styled.div`  
    opacity: 0;
    width:100%;
    height:100%;
    position:absolute;
    top:295px;
    left:50px;
    z-index:3;
    display:flex;
    // align-items:center;
    background-color:rgba(0,0,0,0.2);
    position:absolute;
    top:0;
    left:0;
    border-radius:12px;
     
`
const Container=styled.div`
margin:5px;
width:300px;
height:370px;
display:flex;
align-items:center;
justify-content:center;
position:relative;
background-color:black;
// border-top:1px  solid teal;
// border:1px  solid grey;
border:none;
border-radius:12px;
position:relative;

&:hover ${Info}{
   opacity:1;
    box-shadow: 0 0 0 .5px rgba(0, 0, 0, 0.287);
    
}
`



const Image=styled.img`
height:100%;
width:100%;
border-radius:12px;
position:absolute;
top:0;
  `


const Icon=styled.div`
width:40px;
height:40px;
border-radius:50%;
background-color:white;
display:flex:
align-items:center;
justify-content:center;
margin:10px;
&:hover {
    transform:scale(1.1);
   
}
`

const Product = ({item }) => {
  return (
    <Container>
        <Image src={item.img} />
        <Info>
            <Icon>
                <ShoppingCartOutlined className="icon"/>
            </Icon>
            <Icon>
                <SearchOutlined className="icon"/>
            </Icon>
            <Icon>
                <FavoriteBorderOutlined className="icon" />
            </Icon>
        </Info>

    </Container>

  )
}

export default Product