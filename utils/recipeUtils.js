const recipes = [
  {
    id: 0,
    title: "Cashew Chicken Stir Fry (aka Finmat)",
    description:
      "A mix between various existing recipes to find a recipe suiting my tastes for what I want from Cashew Chicken.",
    ingredients: [
      "1000g of chicken (breast or thigh)",
      "2 bell peppers (any color), chopped",
      "3 onion, sliced",
      "6 cloves garlic, pressed",
      "150g of broccoli",
      "4 carrot, chopped",
      "3 red large red chilis, chopped",
      "1 bunch of spring onions, chopped",
      "200g of cashew nuts, natural",
      "1 tbsp salt",
      "1 tbsp black pepper",
      "1 tbsp MSG",
      "3 egg whites",
      "1 dl cornstarch",
      "350 ml Oyster Sauce (preferably Healthy Boy Brand)",
      "Sriracha to taste",
      "vegetable oil, cooking",
    ],
    instructions: [
      "Combine salt, pepper and MSG into a large bowl.",
      "Slice chicken into bite-sized pieces and place into bowl of spice-mix. Coat chicken with spices.",
      "Add egg whites and stir until mixed. Add cornstarch and mix. Let sit until use to velvet chicken.",
      "Heat up a large wok and add vegetable oil to season the wok. Add onions, carrots, bell peppers and broccoli into wok when hot. Stir.",
      "Turn on oven to 175°C and place cashews on a baking sheet. Stir in vegetable oil and cook for 10-15 minutes, stirring every 5 minutes until golden brown. Salt to taste.",
      "Heat a large skillet and add vegetable oil. Place chilis in skillet and stir until cooked. Add chicken and combine, cook until chicken is no longer pink.",
      "When vegetables are cooked, place chicken and chilis into wok and combine. Add oyster sauce, sriracha to taste. Mix until evenly distributed and add garlic and cashews. Stir again. Add spring onions. Stir and let cook until hot on medium-low heat.",
      "Serve with jasmine rice.",
    ],
  },
  {
    id: 1,
    title: "Pasta Bolognese",
    description: "A quick and easy way to make flavorful bolognese.",
    ingredients: [
      "750g minced meat, 50/50",
      "3 onions, finely chopped",
      "3 boxes of crushed tomatoes, 500g/each",
      "150g tomato puré",
      "4 cloves garlic, pressed",
      "4-5 beef stock cubes",
      "Cooking butter",
      "Oregano",
    ],
    instructions: [
      "Heat up a large pot, add in cooking butter or oil",
      "Add minced meat and cook until brown. Mash the meat to get it separated into small pieces. Remove from pot.",
      "Add more oil and cook onion until gently caramelized. Add garlic.",
      "Add tomato puré and combine, cook on medium heat until the mixture sticks to the pan.",
      "Add crushed tomatoes, cooked mince meat, beef stock and oregano to taste. Stir.",
      "Let simmer for a minimum of 20 minutes, adding salt and pepper to taste. Let sit for as long as you like, the longer the more flavourful.",
      "When bolognese tastes as prefered, serve with pasta.",
    ],
  },
  {
    id: 2,
    title: "Tacos",
    description: "Spicy tacos with plenty of fillings.",
    ingredients: [
      "1000g of minced meat, 50/50",
      "1 red onion, chopped",
      "1 cucumber, chopped",
      "2 tomatoes, chopped",
      "250g of shredded cheese, your preference",
      "1 can of sour cream (or prefered yoghurt substitute)",
      "1 can of taco sauce, to your prefered level of spicy",
      "1 can of corn, drained",
      "3 packets of taco seasoning, preferably spicy",
    ],
    instructions: [
      "Heat up a skillet and cook the minced meat with butter. Drain if overly juicy.",
      "Add taco seasoning to skillet, stir whilst simultaneously adding water until mixture and coating reaches your preference. Taste.",
      "Serve on soft or hard taco shells, adding your preference of vegetables or suggested vegetables from ingredient list as well as cheese, taco sauce and cream.",
    ],
  },
];

export const getOneRecipe = (id) => {
  return recipes[id];
};
export const getAllRecipes = () => {
  return recipes.map((r) => ({ id: r.id, title: r.title }));
};
