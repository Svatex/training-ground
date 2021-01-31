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
    border-bottom: black 1px solid;
  }
  50% {
    border-bottom: black 2px solid;
  }
  100% {
    border-bottom: black 3px solid;
  }
`

const SingleNavItem = styled.span`
  margin: 5px 10px;
  padding-bottom: 5px;

  &:hover {
    animation: ${animateUnderline} ease-in 200ms;
    animation-fill-mode: forwards;
  }
`