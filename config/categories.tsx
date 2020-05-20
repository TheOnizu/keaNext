import {
    red,
    brown,
    orange,
    grey,
    lightGreen,
    deepOrange,
    green,
  } from "@material-ui/core/colors";

  type category {
    name: string,
      id: string,
      bg:  string,
      img: string,     
  }

const categories : category[] = [
    {
      name: "Légumes",
      id: "1t5jiT85ZWtCRVtEZJlZ",
      bg: green[600],
      img: "/vegetables.jpg",
    },
    {
      name: "Poissons",
      id: "4sLiQozuTETYxKepfsKt",
      bg: grey[600],
      img: "/sea.jpg",
    },
    {
      name: "Crèmerie",
      id: "apaZxnGJfcKRDKKsr7jA",
      bg: deepOrange[600],
      img: "/cream.jpg",
    },
    {
      name: "Produits sec",
      id: "lyAehUmm0jBxkuXtTuq9",
      bg: brown[600],
      img: "/dry.jpg",
    },
    {
      name: "Fruits",
      id: "qJ1cHgPWRGTANlLNtC4S",
      bg: orange[600],
      img: "/friuts_2.jpg",
    },
    {
      name: "Viandes",
      id: "ZkBO6OBaiwoH0byolWlu",
      bg: red[600],
      img: "/meat.jpg",
    },
    {
      name: "Paniers",
      id: "EmvctAukSJmq4lWvywmI",
      bg: lightGreen[600],
      img: "/basket.jpg",
    },
  ]