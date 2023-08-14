import React from 'react'
import { styled } from 'styled-components'

const Container = styled.div`
    display: flex;
    gap: 10px;
    margin: 30px 0px;
`
const Avatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`

const Details = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const Name = styled.span`
    font-size:13px;
    font-weight: 500;
    color: ${({theme}) => theme.text};
    
`;
const Date = styled.span`
    font-size: 12px;
    font-weight: 400;
    color: ${({theme}) => theme.textSoft};
    margin-left: 5px;
`;

const Text = styled.p`
    font-size: 14px;
    color: ${({theme}) => theme.text};

`


const Comment = () => {
  return (
    <Container>
        <Avatar src='https://avatars.githubusercontent.com/u/96301519?v=4'/>
        <Details>
            <Name>Agustin <Date>13 days ago</Date></Name>
            <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi repellendus delectus nihil alias atque eaque blanditiis deleniti incidunt qui facere sed odit, facilis libero impedit similique molestias expedita sunt at?</Text>
        </Details>
    </Container>
  )
}

export default Comment