import Link from "next/link";
import Head from "next/head";
import styled from 'styled-components';




export default function FirstPost() {
  return (
    <div>
      <Head>
        <title>First Post</title>
      </Head>
        <WelcomeWrapper>
            <WelcomeText className="blue">Welcome!</WelcomeText>
        </WelcomeWrapper>
      <Link href='/'>
        <a>Back home</a>
      </Link>
    </div>
  );
}


const WelcomeWrapper = styled.div`

    h1 {
      color: yellow;
    }

`
const WelcomeText = styled.h1`
  
`