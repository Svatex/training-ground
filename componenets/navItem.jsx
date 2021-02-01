import styled, {keyframes} from "styled-components";

const NavItem = ({Item}) => {
    return (
        <>
            <SingleNavItem>{Item}</SingleNavItem>
        </>

    )
}

export default NavItem

const animateUnderline = keyframes`
  0% {
    border-bottom: white 1px solid;
  }
  50% {
    border-bottom: white 3px solid;
  }
  100% {
    border-bottom: white 5px solid;
  }
`

const SingleNavItem = styled.span`
  margin: 5px 10px;
  padding-bottom: 5px;
  color: white;

  &:hover {
    animation: ${animateUnderline} ease-in 50ms;
    animation-fill-mode: forwards;
  }
`