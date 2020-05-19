import Head from 'next/head';
import SiteLayout from "../mainComponents/layout/SiteLayout";
import styled from "styled-components";
const Main = styled.div`
  min-height: 80vh;
  position: relative;
  width: 100vw;
`

export default function Home() {
  return (
    <SiteLayout>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Main>
          <h1 className="title">
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>
        </Main>

    </SiteLayout>
  )
}
