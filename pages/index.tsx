import Head from "next/head";
import { motion } from "framer-motion";
import { useEffect, useLayoutEffect, useState } from "react";
import { NextPage } from "next";
import { getContext } from "kea";
import Link from "next/link";
import { Grid, LinearProgress, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Layout from "../src/components/Layout";
import { CategoryCard } from "../src/components/Category/CategoryCard";
import { ProductCard } from "../src/components/Product/Card";
import { SectionTitle } from "../src/components/SectionTitle";
import { categories } from "../config/categories";
import { dataLogic } from "../kea/data";
import { homeTitle } from "../animations";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  bgPapaer: {
    "background-image": "url(/collaboration.png)",
    "background-repeat": "no-repeat",
    "background-size": "100% 100%",
    height: 260,
    display: "flex",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  topTextes: {
    margin: theme.spacing(0, 0, 5, 0),
  },
  lroot: {
    width: "100%",
    margin: theme.spacing(2, 0),
  },
  grid: {
    margin: theme.spacing(0, -1.5, 12),
  },
}));

const Home: NextPage<any> = ({
  actions: { setTitle },
  categories: { home },
  isLoading,
}) => {
  const [list, setList] = useState([]);
  const [bestSold, setBestSold] = useState([]);
  const [isLoadedAndHasData, setLoaded] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    setTitle("home");
  }, []);

  useLayoutEffect(() => {
    setList(home.data.list);
    setBestSold(home.data.bestSold);
    setLoaded(Boolean(list.length));
  }, [isLoading, list]);

  return (
    <Layout>
      <Head>
        <title key="title">Create Next App</title>
        <link key="icon" rel="icon" href="/favicon.ico" />
      </Head>

      <Grid container spacing={3} className={classes.topTextes}>
        <Grid item xs={9}>
          <Typography variant="h1" component="h2" gutterBottom>
            Profitez de nos produits de saison bio
          </Typography>

          <Typography variant="h4" component="h4" gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus.
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        {categories.map((category) => (
          <Grid item xs key={category.id}>
            <CategoryCard category={category} />
          </Grid>
        ))}
      </Grid>

      <SectionTitle title="Notre sélection" />

      <Grid container spacing={3}>
        <Grid item xl={12} style={{ height: "60px" }}>
          {isLoading && (
            <div className={classes.lroot}>
              <LinearProgress variant="query" color="secondary" />
            </div>
          )}
        </Grid>
      </Grid>

      <Grid container spacing={3} className={classes.grid}>
        {isLoadedAndHasData &&
          list.map((data) => (
            <Grid item xl={2} lg={3} md={6} sm={6} xs={12} key={data.id}>
              <motion.div whileHover={{ scale: 1.06 }}>
                <ProductCard data={data} key={data.id} />
              </motion.div>
            </Grid>
          ))}
      </Grid>

      <SectionTitle title="Meilleures ventes" />

      <Grid container spacing={3} className={classes.grid}>
        {isLoadedAndHasData &&
          bestSold.map((data) => (
            <Grid item xl={2} lg={3} md={6} sm={6} xs={12} key={data.id}>
              <motion.div whileHover={{ scale: 1.06 }}>
                <ProductCard data={data} key={data.id} />
              </motion.div>
            </Grid>
          ))}
      </Grid>
    </Layout>
  );
};

Home.getInitialProps = async function (ctx) {
  console.log("Home.getInitialProps");
  const { store } = getContext();

  const unmount = dataLogic.mount();
  store.dispatch(dataLogic.actions.setTitle("home"));
  unmount();
};

export default dataLogic(Home);
