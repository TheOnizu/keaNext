import Head from 'next/head';
import SiteLayout from "../mainComponents/layout/SiteLayout";
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  position: relative;
  width: 100vw;
`

const Home = () => {
  return (
    <SiteLayout>
      <div>
        <Head>
          <title key="title">Create Next App</title>
          <link key="icon" rel="icon" href="/favicon.ico" />
        </Head>
        <Main>
          <h1>
            Home
          </h1>
        </Main>
      </div>
    </SiteLayout>
  )
}

export default Home;