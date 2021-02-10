import styled from 'styled-components'
import NavBar from "../componenets/navBar";
import RightColumn from "../componenets/rightColumn";
import LeftColumn from "../componenets/leftColumn";
import Theme from "../componenets/theme";
import {useState} from 'react'


export default function Home() {
    const [Light, setLight] = useState(false)
    console.log(Light)

    const changeTheme = () => {
        setLight(!Light)
    };


    return (
        <Theme>
            <Wrapper>
                <NavBar/>
                <LeftColumn themeSetting={Light} changeTheme={changeTheme}/>
                <RightColumn themeSetting={Light}/>
            </Wrapper>
        </Theme>


    );
}


const Wrapper = styled.div`
  display: flex;
  margin: 0px auto;
  max-width: 1440px;
  height: 100vh;
  position: relative;
`

