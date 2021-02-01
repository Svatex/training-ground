import styled from "styled-components";
import ImgGallery from "./imgGallery";
import BottomBar from "./bottomBar";


const RightBar = () => {
    return (
        <>
        <RightWrapper>
            <ImgGallery/>
            <BottomBar/>
        </RightWrapper>
        </>

    )
}

const RightWrapper = styled.div`
  width: 80%;
  height: 100%;
  background-color: rgba(8,3,3,0.95);
`

export default RightBar