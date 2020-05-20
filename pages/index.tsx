import Head from "next/head";
import Link from "next/link";
import SiteLayout from "../mainComponents/layout/SiteLayout";
import { motion } from "framer-motion";
import { homeTitle } from "../animations";
import { Main, Linc } from "../mainComponents/components/Style";

const Home = () => {
  return (
    <SiteLayout>
      <Head>
        <title key="title">Create Next App</title>
        <link key="icon" rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <motion.h1 variants={homeTitle}>Home</motion.h1>
        <Link href="/about">
          <Linc>about</Linc>
        </Link>
      </Main>
    </SiteLayout>
  );
};

export default Home;
