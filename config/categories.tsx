import {
  red,
  brown,
  orange,
  grey,
  lightGreen,
  deepOrange,
  green,
} from "@material-ui/core/colors";

interface categoryType {
  name: string;
  lowerName: string;
  id: string;
  bg: string;
  img: string;
}

export const categoriesList: Array<categoryType> = [
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

export const categoryObject = {
  "1t5jiT85ZWtCRVtEZJlZ": {
    name: "Légumes",
    lowerName: "legumes",
    id: "1t5jiT85ZWtCRVtEZJlZ",
    bg: green[600],
    img: "/vegetables.jpg",
  },
  "4sLiQozuTETYxKepfsKt": {
    name: "Poissons",
    lowerName: "poissons",
    bg: grey[600],
    img: "/sea.jpg",
  },
  apaZxnGJfcKRDKKsr7jA: {
    name: "Crèmerie",
    lowerName: "cremerie",
    bg: deepOrange[600],
    img: "/cream.jpg",
  },
  lyAehUmm0jBxkuXtTuq9: {
    name: "Produits sec",
    lowerName: "produits_sec",
    bg: brown[600],
    img: "/dry.jpg",
  },
  qJ1cHgPWRGTANlLNtC4S: {
    name: "Fruits",
    lowerName: "fruits",
    bg: orange[600],
    img: "/friuts_2.jpg",
  },
  ZkBO6OBaiwoH0byolWlu: {
    name: "Viandes",
    lowerName: "viandes",
    bg: red[600],
    img: "/meat.jpg",
  },
  EmvctAukSJmq4lWvywmI: {
    name: "Paniers",
    lowerName: "paniers",
    bg: lightGreen[600],
    img: "/basket.jpg",
  },
};
