
//TODO: model a recipe database
const recipes = {
    "Lasagna": {
        author: "Lisa Winkles",
        ingredients: ['Canned Tomatoes', 'Onions', 'Ground Meat'],
        prepTime: 45,
        cookTime: 25,
        steps: [],
        description: "This is a cool dish.",
        rating: 5,
    }
}

const form = document.getElementById('add-recipe');
const recipeName = document.getElementById('recipe-name');
const author = document.getElementById('author');
const recipeDesc = document.getElementById('recipe-description');

const outputForm = document.getElementById('output');

const addToRecipes = (e) => {
    e.preventDefault();

    // TODO: Test to see if these variables are an extra step
    let recipeNameData = recipeName.value;
    let recipeAuthorData = author.value;
    let recipeDescData = recipeDesc.value;

    recipes[recipeNameData] = {
        author: recipeAuthorData,
        description: recipeDescData
    };
    console.log(recipes);
    form.reset();
}

form.addEventListener('submit', addToRecipes);