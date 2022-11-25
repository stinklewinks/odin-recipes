const recipes = {
    "Lasagna": {
        ingredients: ['Canned Tomatoes', 'Onions', 'Ground Meat'],
        cookTime: 25,
        description: "This is a cool dish.",
    }
}

const form = document.getElementById('add-recipe');
const recipeName = document.getElementById('recipe-name');
const author = document.getElementById('author');
const recipeDesc = document.getElementById('recipe-description');

const outputForm = document.getElementById('output');

const addToRecipes = (e) => {
    e.preventDefault();
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