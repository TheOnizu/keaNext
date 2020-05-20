import Head from "next/head";
import Link from "next/link";
import { Typography } from "@material-ui/core";
import SiteLayout from "../src/components/SiteLayout";
import { motion } from "framer-motion";
import { homeTitle } from "../animations";
import { Main, Linc } from "../src/components/Style";

const Home = () => {
  return (
    <SiteLayout>
      <Head>
        <title key="title">Create Next App</title>
        <link key="icon" rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <motion.div initial="from" animate="to" exit="out">
          <motion.div variants={homeTitle}>
            <Typography variant="h1" component="h2" gutterBottom>
              Home
            </Typography>
          </motion.div>

          <Link href="/about">
            <Typography variant="overline" display="block" gutterBottom>
              <Linc>about</Linc>
            </Typography>
          </Link>
        </motion.div>
      </Main>
    </SiteLayout>
  );
};

export default Home;
