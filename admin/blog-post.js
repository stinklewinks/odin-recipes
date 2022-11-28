const blogPostArea = document.getElementById('post');
const button = document.getElementById('bold');
const outputDiv = document.getElementById('output');
const submitee = document.getElementById('submitee');
const tester = {
    post: ""
};

const makeBold = (e) => {
    e.preventDefault();
    blogPostArea.style.fontWeight = 'bold';
}

const theSubmit = (e) => {
    e.preventDefault();
    let blogPostData = blogPostArea.value;

    tester.post = blogPostData;
    console.log(tester);
    // blogPostArea.reset();
}

button.addEventListener('click', makeBold);
submitee.addEventListener('submit', theSubmit);

