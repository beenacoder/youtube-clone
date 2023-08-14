import React from 'react'
import { styled } from 'styled-components'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';
import Comments from '../components/Comments';
import Card from '../components/Card';

const Container = styled.div`
    display: flex;
    gap:24px;
`
const Content = styled.div`
    flex: 5;
`
const VideoWrapper = styled.div``

const Title = styled.div`
    font-size: 18px;
    font-weight: 700;
    margin-top: 20px;
    margin-bottom: 10px;
    color: ${({theme}) => theme.text};
`;

const Details = styled.div`
    display:flex;
    align-items: center;
    justify-content:space-between;
`;
const Info = styled.span`
    color: ${({theme}) => theme.textSoft};
`;
const Buttons = styled.div`
    display:flex;
    color: ${({theme}) => theme.text};
    gap:20px;
    
`;
const Button = styled.div`
    display:flex;
    align-items: center;
    gap: 5px;
    cursor:pointer;
`;

const Hr = styled.hr`
    margin: 15px 0px;
    border: 0.5px solid ${({theme}) => theme.softBorder};
`;

const Recommendations = styled.div`
  flex: 2;
`

const Channel = styled.div`
    display: flex;
    justify-content: space-between;
`
const ChannelInfo = styled.div`
    display: flex;
    gap: 20px;

`
const Img = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`


const ChannelDetails = styled.div`
    display: flex;
    flex-direction: column;
    color: ${({theme}) => theme.text};

`
const ChannelName = styled.span`
    font-weight: 500;

`
const ChannelCounter = styled.span`
    margin-top: 5px;
    margin-bottom: 20px;
    color: ${({theme}) => theme.textSoft};
    font-size: 12px;

`
const Description = styled.p`
    font-size: 14px;
`
const Subscribe = styled.button`
    background-color: #cc1a00;
    font-weight: 500;
    color: #ffffff;
    border: none;
    border-radius: 3px;
    height: max-content;
    padding: 10px 20px;
    cursor: pointer;
`

const CommentsCounter = styled.h2`
    font-size: 18px;
    font-weight: 700;
    margin-top: 20px;
    margin-bottom: 10px;
    color: ${({theme}) => theme.text};
    margin: 20px 0px;

`

const Video = () => {
    return (
        <Container>
            <Content>
                <VideoWrapper>
                <iframe 
                    width="833" 
                    height="527" 
                    src="https://www.youtube.com/embed/9xBnI34EofE" 
                    title="Mix Tape 80 en Inglés" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen
                >
                </iframe>
                </VideoWrapper>
                <Title>Mix Ochentoso Copado</Title>
                <Details>
                    <Info>1.000.000 visualizaciones . Ago 13, 2023</Info>
                    <Buttons>
                        <Button><ThumbUpOutlinedIcon />342</Button>
                        <Button><ThumbDownOffAltOutlinedIcon/>Dislike</Button>
                        <Button><ReplyOutlinedIcon/>Share</Button>
                        <Button><AddTaskOutlinedIcon/>Save</Button>

                    </Buttons>
                </Details>
                <Hr />
                <Channel>
                    <ChannelInfo>
                        <Img src='https://avatars.githubusercontent.com/u/96301519?v=4' />
                        <ChannelDetails>
                            <ChannelName>Lauticab</ChannelName>
                            <ChannelCounter>500K subscribers</ChannelCounter>
                            <Description>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet accusamus doloremque adipisci enim nisi eum veritatis maxime iure optio, possimus eaque molestiae! Alias ratione quae itaque dolore, praesentium et labore.</Description>
                        </ChannelDetails>
                    </ChannelInfo>
                    <Subscribe>SUBSCRIBE</Subscribe>
                </Channel>
                <Hr />
                <CommentsCounter>247 Comments</CommentsCounter>
                <Comments />
            </Content>
            <Recommendations>
                <Card type="sm"/>
                <Card type="sm"/>
                <Card type="sm"/>
                <Card type="sm"/>
                <Card type="sm"/>
                <Card type="sm"/>
                <Card type="sm"/>
                <Card type="sm"/>
                <Card type="sm"/>
                <Card type="sm"/>
                <Card type="sm"/>
                <Card type="sm"/>
                <Card type="sm"/>
            </Recommendations>
        </Container>
    )
}

export default Video