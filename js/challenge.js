
const h1 = document.querySelector('#counter');
let num = parseInt(h1.innerText);
const pauseResumeButton = document.querySelector('#pause');
const addButton = document.querySelector('#plus');
const minusButton = document.querySelector('#minus');
const likeButton = document.querySelector('#heart');
const submitButton = document.querySelector('#submit');

function counterValue() {
    num++
    h1.innerText = num
};

function minusCounterValue() {
    num--
    h1.innerText = num
};

function liked() {
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    console.log(num)
    li.appendChild(document.createTextNode(`${num} has been liked 5 times!`));
    ul.appendChild(li)
}

// function addComment() {
//     let commentList = document.querySelector('#list');
//     let p = document.createElement('p');
//     commentList.appendChild(p)
// }

let startCounter = setInterval(counterValue, 1000);

pauseResumeButton.addEventListener('click', function() {
    if (pauseResumeButton.textContent === ' pause '){
        clearInterval(startCounter)
        pauseResumeButton.textContent = ' resume '
    }else {
        startCounter = setInterval(counterValue, 1000),
        pauseResumeButton.textContent = ' pause '
    }
});

addButton.addEventListener('click', function() {
    if (pauseResumeButton.textContent != ' resume ') {
        counterValue()
    }
});

minusButton.addEventListener('click', function() {
    if (pauseResumeButton.textContent != ' resume ') {
        minusCounterValue()
    }
});

likeButton.addEventListener('click', function() {
    if (pauseResumeButton.textContent != ' resume ') {
        liked()
    }
})

// submitButton.addEventListener('input', function() {
//     addComment();
//     preventDefault()
// })
