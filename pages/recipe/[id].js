import { getOneRecipe } from "@/utils/recipeUtils";
import {
  Card,
  Link,
  List,
  ListItem,
  Typography,
  Grid,
  Container,
  CardContent,
} from "@mui/material";
import { Box } from "@mui/system";

export default function RecipePage(props) {
  if (!props.recipe) {
    return <div>Not Found</div>;
  }

  return (
    <Container>
      <Typography variant="h2">{props.recipe.title}</Typography>
      <Typography variant="h5" sx={{ mb: 2 }}>
        {props.recipe.description}
      </Typography>
      <Grid container spacing={2}>
        <Grid item>
          <Card
            sx={{ maxWidth: 300, backgroundColor: "#627894" }}
            variant="outlined"
          >
            <CardContent>
              <Typography variant="h6">Ingredients</Typography>
              <List>
                {props.recipe.ingredients.map((ing) => (
                  <ListItem key={ing}>{ing}</ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card
            sx={{ maxWidth: 400, backgroundColor: "#627894" }}
            variant="outlined"
          >
            <CardContent>
              <Typography variant="h6">Instructions</Typography>
              <List>
                {props.recipe.instructions.map((inst) => (
                  <ListItem key={inst}>{inst}</ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Box>
        <Link href="/">← Back to home</Link>
      </Box>
    </Container>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      recipe: getOneRecipe(context.params.id) || null,
    }, // will be passed to the page component as props
  };
}
