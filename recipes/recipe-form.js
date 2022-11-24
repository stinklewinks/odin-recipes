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

const addToRecipes = (e) => {
    e.preventDefault();
    recipes[recipeName.value] = author.value
    form.reset();
}

form.addEventListener('submit', addToRecipes);