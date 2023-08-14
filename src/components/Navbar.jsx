import { styled } from "styled-components";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from "react-router-dom";


const Container = styled.div`
    position: sticky;
    top: 0;
    background-color: ${({theme}) => theme.bgMenu};
    height: 56px;
`

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
    padding: 0px 20px;
    position: relative;
`

const Search = styled.div`
    position: absolute;
    right: 0;
    left: 0;
    margin: auto;
    width: 40%;
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 3px;
`

const Input = styled.input`
    border: none;
    background-color: transparent;
    &:focus{
        
        outline: none;
    }
`

const Button = styled.button`
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

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Search>
                    <Input placeholder="search"/>
                    <SearchOutlinedIcon />
                </Search>
                <Link to="signin" style={{textDecoration: "none"}}>
                    <Button>
                        <AccountCircleOutlinedIcon />
                        SIGN IN
                    </Button>
                </Link>
            </Wrapper>
        </Container>
    )
}

export default Navbar;