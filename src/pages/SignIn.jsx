import React from 'react'
import { styled } from 'styled-components'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: calc(100vh - 56px);
    color: ${({theme}) => theme.text};
`
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: ${({theme}) => theme.bgMenu};
    border: 1px solid ${({theme}) => theme.softBorder};
    padding: 20px 50px;
    gap: 10px;
`
const Title = styled.h1`
    font-size: 24px;
`;
const Subtitle = styled.h2`
    font-size: 18px;
    font-weight: 300;
`;
const Input = styled.input`
    border: 1px solid ${({theme}) => theme.softBorder};
    border-radius: 3px;
    padding: 10px;
    background-color: transparent;
    width: 100%;
`;
const Button = styled.button`
    border-radius: 3px;
    border: none;
    padding: 10px 20px;
    font-weight: 500;
    cursor: pointer;
    background-color: ${({theme}) => theme.softBorder};
    color: ${({theme}) => theme.textSoft};

`;
const More = styled.div`
    display: flex;
    
    font-size: 12px;
    color: ${({theme}) => theme.textSoft};
    margin-top: 10px;
`;
const Links = styled.div`
    margin-left: 50px;
`;
const Link = styled.span`
    margin-left: 30px;
    

`;


const SignIn = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Sign In</Title>
            <Subtitle>to see more videos</Subtitle>
            <Input placeholder='Username' />
            <Input type="password" placeholder='Password'/>
            <Button>Sign In</Button>
            <Title>or</Title>
            <Input placeholder='Username' />
            <Input type="email" placeholder='Your email'/>
            <Input type="password" placeholder='Password'/>
            <Button>Sign Up</Button>
        </Wrapper>
        <More>
            Spanish (Arg)
            <Links>
                <Link>Help</Link>
                <Link>Privacy</Link>
                <Link>Terms</Link>
            </Links>
        </More>
    </Container>
  )
}

export default SignIn