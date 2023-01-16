import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import { useState } from 'react'
import styled from 'styled-components'
import {sliderItems} from '../pages/data'
import '../style.css'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow:hidden;
`
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === 'left' && '10px'};
  right: ${(props) => props.direction === 'right' && '10px'};
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`
const Wrapper = styled.div`
  height: 100%;
  display: flex;

  transition: all 1s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`

const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  flex: 1;
`
const InfoContainer = styled.div`
  padding: 40px;
  flex: 1;
`

const Tittle = styled.h1`
  font-size: 70px;
`

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  border-radius:8px;
  border:none;
  box-shadow: 0 0 5px .5px rgba(0, 0, 0, 0.287);
  cursor: pointer;
  
`

const Image = styled.img`
  height: 80%;
  border-radius:12px;
`

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0)
  const handleClick = (direction) => {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
    }
  }

  return (
    <div>
      <Container>
        <Arrow direction="left" onClick={() => handleClick('left')}>
          <ArrowLeftOutlined />
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
          {sliderItems.map((item) => {
            return (
              <Slide bg={item.bg}>
                <ImgContainer>
                  <Image src={item.img} />
                </ImgContainer>

                <InfoContainer>
                  <Tittle>{item.tittle}</Tittle>
                  <Desc>{item.desc}</Desc>
                  <Button className='btns'>SHOP NOW</Button>
                </InfoContainer>
              </Slide>
            )
          })}
        </Wrapper>
        <Arrow direction="right" onClick={() => handleClick('right')}>
          <ArrowRightOutlined />
        </Arrow>
      </Container>
    </div>
  )
}

export default Slider
