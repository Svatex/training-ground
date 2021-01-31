import Head from "next/head";
import Link from "next/link";
import styled from 'styled-components'
import NavBar from "../public/componenets/navBar";

export default function Home() {
    return (
        <Wrapper>
            <NavBar/>
        </Wrapper>
    );
}
const Wrapper = styled.div`
  margin: 0px auto;
  max-width: 800px;
`