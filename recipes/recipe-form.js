
//TODO: model a recipe database
const recipes = {
    "Lasagna": {
        author: "Lisa Winkles",
        ingredients: ['Canned Tomatoes', 'Onions', 'Ground Meat', 'Fresh Herbs', 'Sugar', 'Spices & Seasonings', 'Noodles', 'Cheese', 'Eggs'],
        prepTime: 45,
        cookTime: 25,
        totalTime: this.prepTime + this.cookTime,
        steps: ['Cook the meat', 'Cook the noodles', 'Make the cheese layer', 'Assemble the Lasagna', 'Bake the Lasagna'],
        description: "This is a cool dish.",
        rating: 5,
        notes: ""
    }
}

const form = document.getElementById('add-recipe');
const recipeName = document.getElementById('recipe-name');
const author = document.getElementById('author');
const recipeDesc = document.getElementById('recipe-description');
const stepsContainer = document.getElementById('steps-container');
const notes = document.getElementById('notes');
const addStepButton = document.getElementById('add-step');
const removeStepButton = document.getElementById('remove-step');
const steps = document.querySelectorAll('.step');


const outputForm = document.getElementById('output');

const addStep = () => {
    let step = document.createElement('input');
    let pageBreak = document.createElement('br');
    step.className = `step`;
    step.id = 'new-step';
    stepsContainer.appendChild(step);
    stepsContainer.appendChild(pageBreak);
}

// TODO: Figure out the spacing & layout issues when adding steps. 
const removeStep = () => {
    let step = document.querySelector('#new-step');
    step.remove();
}

const addToRecipes = (e) => {
    e.preventDefault();
    let recipeNameData = recipeName.value;
    let recipeAuthorData = author.value;
    let recipeDescData = recipeDesc.value;
    let stepsData = [steps[0].value, steps[1].value, steps[2].value];
    let notesData = notes.value;

// TODO: Create conditional function that checks the number of steps and if there's value conatined within them

    recipes[recipeNameData] = {
        author: recipeAuthorData,
        description: recipeDescData,
        steps: [stepsData[0], stepsData[1], stepsData[2]],
        notes: notesData
    };
    console.log(recipes);
    form.reset();
}

form.addEventListener('submit', addToRecipes);
addStepButton.addEventListener('click', addStep);
removeStepButton.addEventListener('click', removeStep);