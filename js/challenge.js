// Global variables
const h1 = document.querySelector('#counter');
let num = parseInt(h1.innerText);
const pauseResumeButton = document.querySelector('#pause');
const addButton = document.querySelector('#plus');
const minusButton = document.querySelector('#minus');
const likeButton = document.querySelector('#heart');
const submitButton = document.querySelector('#submit');
let ul = document.querySelector('ul');
let li = document.createElement('li');

let likedNumbers = {
    numberLiked: '',
    timesNumberLiked: '',
}

// console.log(likedNumbers.numberLiked)

function disableButtons(){
    addButton.disabled = true
    minusButton.disabled = true
    likeButton.disabled = true
    submitButton.disabled = true
}

function enableButtons(){
    addButton.disabled = false
    minusButton.disabled = false
    likeButton.disabled = false
    submitButton.disabled = false    
}

function numberUpdates(obj, key, value) {
    obj[key] = value;

    return obj;
}

function counterValue() {
    num++
    h1.innerText = num
};

function minusCounterValue() {
    num--
    h1.innerText = num
};

// function liked() {
//     let ul = document.querySelector('ul');
//     let li = document.createElement('li');
//     li.appendChild(document.createTextNode(`${num} has been liked 1 times!`));
//     ul.appendChild(li)
// }

// function addComment() {
//     let commentList = document.querySelector('#list');
//     let p = document.createElement('p');
//     commentList.appendChild(p)
// }

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

addButton.addEventListener('click', function() {
    counterValue()
});

minusButton.addEventListener('click', function() {
    minusCounterValue()
});

likeButton.addEventListener('click', function() {
    // likedNumbers.numberLiked = num
    console.log(num)
    // liked()
})


