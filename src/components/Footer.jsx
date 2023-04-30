import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from '@mui/icons-material'
import styled from 'styled-components'
import { mobile } from "../responsive";


const Container = styled.div`
  display: flex;
  margin-left: 60px;
  ${mobile({ flexDirection: "column" })}
`
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  // background:red;
`
const Logo = styled.h1`
cursor:pointer;
`

const Desc = styled.p`
  margin: 20px 0;
`

const Social = styled.div`
  display: flex;
`

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
  cursor: pointer;
  &:hover {
    transform:scale(1.1);
   
}
`

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`
const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`
const Tittle = styled.h3`
  margin-bottom: 30px;
`
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  cursor: pointer;
  flex-direction: column;
 
`
const ListItem = styled.li`
  margin-bottom: 10px;
  &:hover{
    transform:scale(1.1)
  }
`
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  cursor:pointer;

`
const Payment = styled.img`
  width: 50%;
`

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Mhak.</Logo>
        <Desc>
          Lorem ipsum dolor sit amet, <br /> consectetur adipisicing elit.{' '}
          <br /> Sunt blanditiis assumenda ex nobis quia modi vitae beatae{' '}
          <br /> excepturi corporis similique velit, <br /> praesentium odit.
          Neque porro, <br /> aperiam corporis inventore rerum velit!
        </Desc>
        <Social>
          <SocialIcon color="3B5999">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Pinterest />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Facebook />
          </SocialIcon>
        </Social>
      </Left>
      <Center>
        <Tittle>Useful Links</Tittle>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Term </ListItem>
        </List>
      </Center>
      <Right>
        <Tittle>Contact</Tittle>
        <ContactItem>
          <Room style={{ marginRight: '10px' }} className="icn"  />
          India , Kerala
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: '10px' }} className="icn" />
          +91 9876543210
        </ContactItem>
        <ContactItem>
          <Mail style={{ marginRight: '10px' }} className="icn" />
          contact@hishamKilladi.com
        </ContactItem>
        <Payment src="https://www.transparentpng.com/thumb/payment-method/KWM0Hm-payment-method-bitcoin-photo.png" />
      </Right>
    </Container>
  )
}

export default Footer
