import { FunctionComponent } from "react";
import Link from "next/link";
import { makeStyles, Typography, Grid } from "@material-ui/core";
import { categoriesList } from "../../../config/categories";
import { Linc } from "../Style";

const useStyles = makeStyles((theme) => ({
  container: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
    padding: theme.spacing(6, 3),
    backgroundColor: "black",
    color: "white",
  },
  link: {
    textDecoration: "none",
    // padding: theme.spacing(10, 2),
  },
  h5: {
    margin: theme.spacing(0, 0, 2),
  },
}));

export const Footer: FunctionComponent = () => {
  const classes = useStyles();
  return (
    <footer className={classes.container}>
      <Grid container direction="row" justify="flex-start">
        <Grid item xs={4}>
          {categoriesList.map((category) => {
            return (
              <Link
                key={`${category.lowerName}_#_${category.bg}`}
                href={{ pathname: `/${category.lowerName}` }}
              >
                <Linc className={classes.link} style={{ color: category.bg }}>
                  <Typography variant="h4">{category.name}</Typography>
                </Linc>
              </Link>
            );
          })}
        </Grid>

        <Grid item xs={8}>
          <Grid
            container
            direction="row"
            justify="flex-start"
            spacing={3}
            // alignItems="center"
          >
            <Grid item xs={4}>
              <Typography variant="h5" className={classes.h5}>
                A propos
              </Typography>
              <Typography variant="subtitle1">Nos engagements</Typography>
              <Typography variant="subtitle1">Nous rejoindre</Typography>
              <Typography variant="subtitle1">Nos engagements</Typography>
              <Typography variant="subtitle1">
                Comme sur votre marché, les produits vendus au poids sont
                facturés selon le poids réel des produits livrés, lequel peut
                différer légèrement du poids commandé.
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h5" className={classes.h5}>
                Contactez-nous
              </Typography>

              <Typography variant="subtitle1">
                Nous répondons à vos questions
              </Typography>
              <Typography variant="subtitle1">
                par chat ou au 01 48 90 13 23
              </Typography>
              <Typography variant="subtitle1">7j/7 de 9h à 21h</Typography>
              <Typography variant="subtitle1">ou par email :</Typography>
              <Typography variant="subtitle1">contact@mon-marche.fr</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h5" className={classes.h5}>
                Téléchargez l'application
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </footer>
  );
};
