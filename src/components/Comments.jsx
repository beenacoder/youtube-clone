import React from 'react'
import { styled } from 'styled-components'
import Comment from './Comment'

const Container = styled.div``

const NewComment = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`

const Avatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`

const Input = styled.input`
    border: none;
    border-bottom: 1px solid ${({theme}) => theme.softBorder};
    background-color: transparent;
    outline: none;
    padding: 5px;
    width: 100%;
`

const Comments = () => {
  return (
    <Container>
        <NewComment>
            <Avatar src='https://avatars.githubusercontent.com/u/96301519?v=4'  />
            <Input placeholder='Add a comment...'/>
        </NewComment>
        <Comment />
    </Container>
  )
}

export default Comments