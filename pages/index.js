import styled from 'styled-components'
import NavBar from "../componenets/navBar";
import RightBar from "../componenets/rightBar";


export default function Home() {
    return (
        <Wrapper>
            <NavBar/>
            <LeftBar/>
            <RightBar/>
        </Wrapper>
    );
}
const Wrapper = styled.div`
  display: flex;
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
