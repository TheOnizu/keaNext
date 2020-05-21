import { useEffect } from "react";
import { FunctionComponent } from "react";
import Head from "next/head";
import { getContext, useActions, useValues } from "kea";
import { motion } from "framer-motion";
import Link from "next/link";
import { Grid, LinearProgress, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SiteLayout from "../src/components/SiteLayout";
import { CategoryCard } from "../src/components/CategoryCard";
import { homeTitle } from "../animations";
import { Main, Linc } from "../src/components/Style";
import { categories } from "../config/categories";
import { dataLogic } from "../kea/data";

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
}));

const Home: React.FC = ({ actions: { setTitle } }) => {
  const classes = useStyles();
  // const { categories, isLoading } = useValues(dataLogic);
  // const { setTitle } = useActions(dataLogic);

  useEffect(() => {
    // setTitle("home");
  }, []);

  return (
    <SiteLayout>
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
      <Button onClick={() => setTitle("home")}>hello</Button>
      <Grid container spacing={3}>
        {categories.map((category) => (
          <Grid item xs key={category.id}>
            <CategoryCard category={category} />
          </Grid>
        ))}
      </Grid>
    </SiteLayout>
  );
};

// Home.getInitialProps = async function (ctx) {
//   console.log("Index.getInitialProps");
//   const { store } = getContext();

//   const unmount = dataLogic.mount();
//   store.dispatch(dataLogic.actions.setTitle("home"));
//   unmount();
// };

// export default Home;
Home.getInitialProps = async function (ctx) {
  console.log("Home.getInitialProps");
  const { store } = getContext();

  const unmount = dataLogic.mount();
  store.dispatch(dataLogic.actions.setTitle("home"));
  unmount();
};

export default dataLogic(Home);
