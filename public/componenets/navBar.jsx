import styled from "styled-components";
import NavItem from "./navItem";


const NavBar = () => {
    return (
        <Navigation>
            <h1>LOGO KÁMO</h1>
            <ul>
                <NavItem Item={"About"}/>
                <NavItem Item={"Contact"}/>
                <NavItem Item={"Relive"}/>
            </ul>
        </Navigation>
    )
}

const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`
export default NavBar