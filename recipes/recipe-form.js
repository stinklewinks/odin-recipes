
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


// TODO: Add a counter event that keeps track of clicks on the Add Step button
const addStep = () => {
    let step = document.createElement('input');
    stepsContainer.appendChild(step);
    step.class= `step`;
    step.id = 'new-step';
}
 
const removeStep = (e) => {
    e.preventDefault();
    let step = document.querySelector('#new-step');
    if(step){
        step.remove();
    } else {
        console.log('Nothing is happening...');
    }
}

    // TODO: Figure out how to add proper space to added steps.

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