import Head from "next/head";
import { motion } from "framer-motion";
import { useEffect, useLayoutEffect, useState } from "react";
import { NextPage } from "next";
import { useValues, useActions } from "kea";
// import Link from "next/link";
import { Grid, LinearProgress, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Layout from "../src/components/Layout";
import { CategoryCard } from "../src/components/Category/CategoryCard";
import ProductCard from "../src/components/Product/Card";
import { SectionTitle } from "../src/components/SectionTitle";
import { categoriesList } from "../config/categories";
import { dataLogic } from "../kea/data";
// import { homeTitle } from "../animations";

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

const Home: NextPage<any> = (
  {
    // actions: { setTitle },
    // categories: { home },
    // isLoading,
  }
) => {
  const classes = useStyles();
  const [list, setList] = useState([]);
  const [bestSold, setBestSold] = useState([]);
  const [isLoadedAndHasData, setLoaded] = useState(false);
  const { categories, isLoading } = useValues(dataLogic);
  const { setTitle } = useActions(dataLogic);

  useEffect(() => {
    // setTitle("home");
  }, []);

  useLayoutEffect(() => {
    const { home } = categories;
    if (home) {
      setList(home.data.list);
      setBestSold(home.data.bestSold);
      setLoaded(Boolean(list.length));
    }
  }, [isLoading, list, bestSold]);

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
        {categoriesList.map((category) => (
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
        <Grid item xl={2} lg={3} md={6} sm={6} xs={12}>
          <motion.div whileHover={{ scale: 1.06 }}>
            <ProductCard
              data={{
                id: "123",
                min_descr: "litle description",
                price: 3,
                description: "big description",
                title: "Apple",
                category: "qJ1cHgPWRGTANlLNtC4S",
                image: null,
                unity: "/kg",
                soldCount: 5,
                qtt: 0,
                wieght: 0.5,
                watch_qtt: false,
              }}
            />
          </motion.div>
        </Grid>
      </Grid>
    </Layout>
  );
};

Home.dataLogic = dataLogic;
export default Home;
