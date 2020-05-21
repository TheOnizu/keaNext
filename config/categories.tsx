import {
  red,
  brown,
  orange,
  grey,
  lightGreen,
  deepOrange,
  green,
} from "@material-ui/core/colors";

type category = {
  name: string;
  lowerName: string;
  id: string;
  bg: string;
  img: string;
};

export const categories: category[] = [
  {
    name: "Légumes",
    lowerName: "legumes",
    id: "1t5jiT85ZWtCRVtEZJlZ",
    bg: green[600],
    img: "/vegetables.jpg",
  },
  {
    name: "Poissons",
    lowerName: "poissons",
    id: "4sLiQozuTETYxKepfsKt",
    bg: grey[600],
    img: "/sea.jpg",
  },
  {
    name: "Crèmerie",
    lowerName: "cremerie",
    id: "apaZxnGJfcKRDKKsr7jA",
    bg: deepOrange[600],
    img: "/cream.jpg",
  },
  {
    name: "Produits sec",
    lowerName: "produits_sec",
    id: "lyAehUmm0jBxkuXtTuq9",
    bg: brown[600],
    img: "/dry.jpg",
  },
  {
    name: "Fruits",
    lowerName: "fruits",
    id: "qJ1cHgPWRGTANlLNtC4S",
    bg: orange[600],
    img: "/friuts_2.jpg",
  },
  {
    name: "Viandes",
    lowerName: "viandes",
    id: "ZkBO6OBaiwoH0byolWlu",
    bg: red[600],
    img: "/meat.jpg",
  },
  {
    name: "Paniers",
    lowerName: "paniers",
    id: "EmvctAukSJmq4lWvywmI",
    bg: lightGreen[600],
    img: "/basket.jpg",
  },
];
