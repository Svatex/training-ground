import styled from "styled-components";


const BottomBar = ({themeSetting}) => {
    return (
        <>
            <BottomWrapper mode={themeSetting}>

            </BottomWrapper>
        </>

    )
}

const BottomWrapper = styled.div`
    height: 30%;
  background-color: ${(props) => (props.mode ? props.theme.color.dark : props.theme.color.light)};
`

export default BottomBar