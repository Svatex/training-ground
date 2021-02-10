import styled from "styled-components";
import ImgGallery from "./imgGallery";
import BottomBar from "./bottomBar";


const RightColumn = ({themeSetting}) => {
    return (
        <>
        <RightWrapper>
            <ImgGallery/>
            <BottomBar themeSetting={themeSetting}/>
        </RightWrapper>
        </>

    )
}

const RightWrapper = styled.div`
  width: 80%;
  height: 100%;
  background-color: ${props => props.theme.color.dark };
`

export default RightColumn