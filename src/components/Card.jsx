import React from 'react'
import { styled } from 'styled-components'
import {Link} from "react-router-dom";

const Container = styled.div`
    width: 360px;
    margin-bottom: 45px;
    cursor: pointer;
`
const Img = styled.img`
    width: 100%;
    height: 202px;
    background-color: #999;
`
const Details = styled.div`
    display: flex;
    margin-top: 16px;
    gap: 12px;
`
const ChannelAvatar = styled.img`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: #999;
`
const Texts = styled.div``
const Title = styled.h1`
    font-size: 16px;
    font-weight: 700;
    color: ${({theme}) => theme.text};
`
const ChannelName = styled.h2`
    font-size: 14px;
    color: ${({theme}) => theme.textSoft};
    margin: 10px 0px;
`
const Info = styled.div`
    font-size: 14px;
    color: ${({theme}) => theme.textSoft};
`

const Card = () => {
  return (
      <Link to= "/video/test" style={{textDecoration:"none"}}>
          <Container>
              <Img src='https://image.api.playstation.com/vulcan/ap/rnd/202009/3021/B2aUYFC0qUAkNnjbTHRyhrg3.png' />
              <Details>
                  <ChannelAvatar src='https://avatars.githubusercontent.com/u/96301519?v=4' />
                  <Texts>
                      <Title>Video Spiderman</Title>
                      <ChannelName>LautiCab</ChannelName>
                      <Info>550.000 views . 1 day ago</Info>
                  </Texts>
              </Details>

          </Container>
      </Link>
  )
}

export default Card