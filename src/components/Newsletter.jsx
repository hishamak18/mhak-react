import { Send } from '@mui/icons-material'
import styled from 'styled-components'

const Container = styled.div`
  height: 60vh;
  backgroundcolor: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Tittle = styled.h1`
    font-size:70px;
    margin-bottom:20px;
`
const Desc = styled.div`
    font-size:24px;
    font-weight:300;
    margin-bottom:20px; 
`
const InputContainer = styled.div`
    width:50%;
    height:40px;
    background-color:white;
    display:flex;
    justify-conten:space-between;
    border: 1px solid lightgray;

`
const Input = styled.input`
    border:none;
    flex:8;
    padding-left:20px;
`
const Button = styled.button`
    flex:2;
    border:none;
    background-color:teal;
    color:white;
    cursor:pointer;
    &:hover{
        background-color:black;
    }
`

const Newsletter = () => {
  return (
    <Container>
      <Tittle>News Letter</Tittle>
      <Desc>Get timely updates from us.</Desc>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  )
}

export default Newsletter
