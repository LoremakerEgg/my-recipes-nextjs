import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { getAllRecipes } from "@/utils/recipeUtils";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Container } from "@mui/system";
import { Link, List, Typography } from "@mui/material";

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Anton's Key Recipes</title>
        <meta name="description" content="Welcome to Anton's key recipes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Typography variant="h1">Anton's Key Recipes</Typography>
        {props.recipes?.length &&
          props.recipes.map((r) => (
            <List key={r.id}>
              <Link href={`/recipe/${r.id}`}>{r.title}</Link>
            </List>
          ))}
      </Container>
    </>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      recipes: getAllRecipes(),
    }, // will be passed to the page component as props
  };
}
