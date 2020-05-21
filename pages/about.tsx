import { FunctionComponent } from "react";
import Head from "next/head";
import Link from "next/link";
import { Typography } from "@material-ui/core";
import { motion } from "framer-motion";
import { Main, Linc } from "../src/components/Style";
import SiteLayout from "../src/components/SiteLayout";
import { aboutTitle } from "../animations";

const About: FunctionComponent = () => {
  return (
    <SiteLayout>
      <div>
        <Head>
          <title key="title">about Next App</title>
          <link key="icon" rel="icon" href="/favicon.ico" />
        </Head>

        <Main>
          <motion.div initial="from" animate="to" exit="out">
            <motion.div variants={aboutTitle}>
              <Typography variant="h1" component="h2" gutterBottom>
                About
              </Typography>
            </motion.div>
            <Link href="/">
              <Typography variant="overline" display="block" gutterBottom>
                <Linc>back home</Linc>
              </Typography>
            </Link>
          </motion.div>
        </Main>
      </div>
    </SiteLayout>
  );
};

export default About;
