import styled from 'styled-components'
import NavBar from "../componenets/navBar";

export default function Home() {
    return (
        <Wrapper>
            <NavBar/>
            <LeftBar/>
        </Wrapper>
    );
}
const Wrapper = styled.div`
  margin: 0px auto;
  max-width: 1440px;
  height: 100vh;
  position: relative;
`

const LeftBar = styled.div`
  background-color: #060300;
  width: 20%;
  height: 100%;
  overflow: hidden;
`
