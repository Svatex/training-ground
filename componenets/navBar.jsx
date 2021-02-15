import styled from "styled-components";
import NavItem from "./navItem";


const NavBar = () => {
    return (
        <Navigation>
            <ul>
                <NavItem Item={"Abou"}/>
                <NavItem Item={"Contact"}/>
                <NavItem Item={"Relive"}/>
            </ul>
        </Navigation>
    )
}


const Navigation = styled.div`
  display: flex;
  position: absolute;
  justify-content: flex-end;
  width: 100%;
  padding: 30px 30px 0 0;
`


export default NavBar