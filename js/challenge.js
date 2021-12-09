// Global variables

const h1 = document.querySelector('#counter');
let num = parseInt(h1.innerText);
const pauseResumeButton = document.querySelector('#pause');
const addButton = document.querySelector('#plus');
const minusButton = document.querySelector('#minus');
const likeButton = document.querySelector('#heart');
const submitButton = document.querySelector('#submit');
const comments = document.querySelector('h3');
let ul = document.querySelector('ul');

//Functions

function addComments(userComment) {
    let p = document.createElement('p');
    p.textContent = userComment
    comments.appendChild(p)
}

function disableButtons() {
    addButton.disabled = true
    minusButton.disabled = true
    likeButton.disabled = true
    submitButton.disabled = true
}

function enableButtons() {
    addButton.disabled = false
    minusButton.disabled = false
    likeButton.disabled = false
    submitButton.disabled = false    
}

function counterValue() {
    num++
    h1.innerText = num
};

function minusCounterValue() {
    num--
    h1.innerText = num
};

function likedNumber() {
    let li = document.createElement('li');
    let currentLi = document.getElementById(num);
    if (currentLi === null){
        li.innerText = `${num} has been liked 1 time`
        li.id = num
        li.className = 0
        ul.appendChild(li)
    }
    else if (currentLi){
        let timesClicked = parseInt(currentLi.className)+1
        currentLi.className = timesClicked
        currentLi.innerText = `${currentLi.id} has been liked ${timesClicked} times`
    }
}

let startCounter = setInterval(counterValue, 1000);

// Event Listeners

pauseResumeButton.addEventListener('click', function() {
    if (pauseResumeButton.textContent === ' pause '){
        clearInterval(startCounter)
        disableButtons()
        pauseResumeButton.textContent = ' resume '
    }else {
        startCounter = setInterval(counterValue, 1000),
        pauseResumeButton.textContent = ' pause '
        enableButtons()
    }
});

addButton.addEventListener('click', () => {
    counterValue()
});

minusButton.addEventListener('click', () => {
    minusCounterValue()
});

likeButton.addEventListener('click', () => {
    likedNumber()
})

document.addEventListener('DOMContentLoaded', () => {
    let form = document.querySelector('form')
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        addComments(e.target.comment.value)
        form.reset()
    })
})

// document.querySelector('body').addEventListener('submit', (e) => {
//     e.preventDefault()
//     console.log(e.target.comment.value)

// })

