
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
const stepsContainer = document.getElementById('steps-container');
const addStepButton = document.getElementById('add-step');
const steps = document.querySelectorAll('.step');


const outputForm = document.getElementById('output');

const addStep = () => {
    let step = document.createElement('input');
    let pageBreak = document.createElement('br');
    step.className = `step`;
    stepsContainer.appendChild(step);
    stepsContainer.appendChild(pageBreak);
}

const addToRecipes = (e) => {
    e.preventDefault();
    let recipeNameData = recipeName.value;
    let recipeAuthorData = author.value;
    let recipeDescData = recipeDesc.value;
    let stepsData = [steps[0].value, steps[1].value, steps[2].value];

    recipes[recipeNameData] = {
        author: recipeAuthorData,
        description: recipeDescData,
        steps: [stepsData[0], stepsData[1], stepsData[2]]
    };
    console.log(recipes);
    form.reset();
}

form.addEventListener('submit', addToRecipes);
addStepButton.addEventListener('click', addStep);
