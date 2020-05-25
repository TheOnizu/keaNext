import React, { useState, useEffect } from "react";
import { getContext, useActions, connect } from "kea";
import {
  Fab,
  Card,
  Chip,
  Typography,
  CardContent,
  CardHeader,
  CardActions,
  CardMedia,
  IconButton,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import { categoryObject } from "../../../config/categories";
import { modalLogic } from "../../../kea/modal";
import { cartLogic } from "../../../kea/cart";
import { useStyles } from "./style";

interface CardType {
  min_descr: string;
  price: number;
  qtt: number;
  title: string;
  watch_qtt: Boolean;
  wieght: number;
  category: string;
  soldCount?: number;
  description?: string;
  min_desc?: string;
  id: string;
  image: {
    price: number;
    src: string;
    title: string;
  };
  unity?: string;
}
interface ProductType {
  data: CardType;
  popUp?: Boolean;
}

const ProductCard = ({
  data: {
    id,
    min_descr,
    price,
    description,
    title,
    category,
    image,
    unity,
    soldCount,
  },
  popUp = false,
}: ProductType) => {
  const classes = useStyles();
  const [qtt, setQtt] = useState(1);
  const { open, close } = useActions(modalLogic);
  const { add } = useActions(cartLogic);
  const _height = popUp ? 380 : 200;
  const linkedCat = categoryObject[category];
  const dataToSend = {
    id,
    min_descr,
    price,
    description,
    title,
    category,
    image,
    unity,
    soldCount,
  };
  const dataToAdd = {
    id,
    name: title,
    price,
    qtt,
    soldCount: soldCount ? soldCount : 0,
  };

  const palyAddSound = () => {
    const audio: HTMLAudioElement = document.getElementById("audio");
    audio.volume = 0.5;
    audio.pause();
    audio.currentTime = 0;
    audio.play();
  };

  const increaseQtt = () => setQtt(qtt + 1);
  const decreaseQtt = () => !(qtt <= 1) && setQtt(qtt - 1);
  const resetQtt = () => setQtt(1);

  return (
    <Card className={classes.root} variant="outlined">
      <div
        style={{ cursor: "pointer" }}
        onClick={() => {
          open(dataToSend);
        }}
      >
        <CardHeader title={title} subheader="" />
        <CardContent style={{ paddingBottom: 0 }}>
          <Chip
            className={classes.chip}
            label={linkedCat.name}
            color="secondary"
            style={{ backgroundColor: linkedCat.bg }}
            size="small"
          />

          <CardMedia
            className={classes.media}
            image={image ? image.src : "/noImage.png"}
            component="img"
            loading="lazy"
            height={_height}
            style={{
              height: `${_height}px`,
              backgroundPosition: "center center",
              backgroundSize: "cover",
            }}
            title={title}
          />

          <Typography
            variant="h4"
            className={classes.title}
            color="textSecondary"
          >
            {price} €
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {unity ? unity : "-"}
          </Typography>
          <Typography
            gutterBottom
            display="inline"
            dangerouslySetInnerHTML={{ __html: min_descr }}
          />
        </CardContent>
      </div>
      <CardActions disableSpacing>
        <div className={classes.actiondiv}>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <Fab
            size="small"
            color="secondary"
            aria-label="add"
            className={classes.fab}
            onClick={() => {
              // palyAddSound();
              add(dataToAdd);
            }}
          >
            <AddIcon />
          </Fab>

          {popUp && (
            <div className={classes.fabContainer}>
              <Fab
                size="small"
                color="secondary"
                aria-label="remove"
                className={classes.fab}
                onClick={() => decreaseQtt()}
              >
                <RemoveIcon />
              </Fab>
              <Typography variant="body1" className={classes.body1}>
                {qtt}
              </Typography>
              <Fab
                size="small"
                color="secondary"
                aria-label="add"
                className={classes.fab}
                onClick={() => increaseQtt()}
              >
                <AddIcon />
              </Fab>
            </div>
          )}
          {popUp && (
            <IconButton
              style={{ backgroundColor: linkedCat.bg }}
              aria-label="add to favorites"
              className={classes.addToCart}
              onClick={() => {
                // add(dataToAdd);
                resetQtt();
                close();
              }}
            >
              <LocalMallIcon />
            </IconButton>
          )}
        </div>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
