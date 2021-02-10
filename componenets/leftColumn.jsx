import styled from "styled-components";


const LeftColumn = ({changeTheme, themeSetting}) => {
    return (
        <>
            <LeftBar mode={themeSetting}>
                <ChangeButton onClick={changeTheme}>CHANGE THEME</ChangeButton>
            </LeftBar>
        </>

    )
}




const LeftBar = styled.div`
  background-color: ${(props) => (props.mode ? props.theme.color.dark : props.theme.color.light)};
  width: 25%;
  height: 100%;
  overflow: hidden;
`

const ChangeButton = styled.button`
    width: 100%;
    margin-top: 100px;
`

export default LeftColumn