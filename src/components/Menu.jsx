import { styled } from "styled-components";
import logoImg from "../img/logo.png";
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import SportsBasketballOutlinedIcon from '@mui/icons-material/SportsBasketballOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import MovieCreationOutlinedIcon from '@mui/icons-material/MovieCreationOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import SettingsBrightnessOutlinedIcon from '@mui/icons-material/SettingsBrightnessOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { lightTheme } from "../utils/Theme";
import {Link} from "react-router-dom";


const Container = styled.div`
    flex: 1;
    background-color: ${({theme}) => theme.bgMenu};
    height:100%;
    color: ${({theme}) => theme.text};
    font-size: 14px;
    /* position: sticky;
    top: 0; */
`;
const Wrapper = styled.div`
    padding: 18px 26px;
`;
const Logo = styled.div`
    display: flex;
    align-content: center;
    gap: 5px;
    font-weight: bold;
    margin-bottom: 25px;
    
`;
const Img = styled.img`
    height: 25px;
`;
const Item = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    cursor: pointer;
    padding: 7.5px 0px;
    &:hover {
        background-color: ${({theme}) => theme.softBorder};
    }
`;
const Hr = styled.hr`
    margin: 15px 0px;
    border: 0.5px solid ${({theme}) => theme.softBorder};
`;

const Login = styled.div`
    /* display: flex;
    flex-direction: column; */
`;
const Button = styled.button`
    margin-top:5px;
    border: 1px solid #3ea6ff;
    color: #139992;
    padding: 5px 15px;
    background-color: transparent;
    cursor: pointer;
    border-radius: 3px;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 5px;

    &:hover {
        background-color: #3ea6ff;
        color: white;
    }
`;

const Title = styled.h2`
    font-size: 14px;
    font-weight: 500;
    color: #AAAAAA;
    margin-bottom: 20px;
`

const Menu = ({darkMode, setDarkMode}) => {
    return (
        <Container>
            <Wrapper>
            <Link to= "/" style={{textDecoration:"none", color: "inherit"}}>
                <Logo>
                    <Img src={logoImg} alt="" />
                    YoutiClone
                </Logo>
            </Link>
                <Item>
                    <HomeIcon />
                    Home
                </Item>
                <Item>
                    <ExploreIcon />
                    Explore
                </Item>
                <Item>
                    <SubscriptionsIcon />
                    Subscriptions
                </Item>
                <Hr />            
                <Item>
                    <VideoLibraryIcon />
                    Library
                </Item>
                <Item>
                    <HistoryIcon />
                    History
                </Item>
                <Hr />
                <Login>
                    Sign in to like videos, comment, and subscribe.
                    <Link to="signin" style={{textDecoration: "none"}}>
                        <Button>
                            <AccountCircleOutlinedIcon />
                            SIGN IN
                        </Button>
                    </Link>
                </Login>
                <Hr />
                <Title>BEST OF YOUTICLONE</Title>
                <Item>
                    <LibraryMusicOutlinedIcon />
                    Music
                </Item>
                <Item>
                    <SportsBasketballOutlinedIcon />
                    Sports
                </Item>
                <Item>
                    <SportsEsportsOutlinedIcon />
                    Gaming
                </Item>
                <Item>
                    <MovieCreationOutlinedIcon />
                    Movies
                </Item>
                <Item>
                    <ArticleOutlinedIcon />
                    News
                </Item>
                <Item>
                    <LiveTvOutlinedIcon />
                    Live
                </Item>
                <Hr />
                <Item>
                    <SettingsOutlinedIcon />
                    Settings
                </Item>
                <Item>
                    <FlagOutlinedIcon />
                    Report
                </Item>
                <Item>
                    <HelpOutlineOutlinedIcon />
                    Help
                </Item>
                <Item onClick={() => setDarkMode(!darkMode)}>
                    <SettingsBrightnessOutlinedIcon />
                    {darkMode ? "Light" : "Dark"} Mode
                </Item>
            </Wrapper>
        </Container>
    )
}

export default Menu;