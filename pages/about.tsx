import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { Main, Linc } from "../mainComponents/components/Style";
import SiteLayout from "../mainComponents/layout/SiteLayout";
import { aboutTitle } from "../animations";

const About = () => {
  return (
    <SiteLayout>
      <div>
        <Head>
          <title key="title">about Next App</title>
          <link key="icon" rel="icon" href="/favicon.ico" />
        </Head>
        <Main>
          <motion.h1 variants={aboutTitle}>About</motion.h1>
          <Link href="/">
            <Linc>back home</Linc>
          </Link>
        </Main>
      </div>
    </SiteLayout>
  );
};

export default About;
