// Global variables
const h1 = document.querySelector('#counter');
let num = parseInt(h1.innerText);
const pauseResumeButton = document.querySelector('#pause');
const addButton = document.querySelector('#plus');
const minusButton = document.querySelector('#minus');
const likeButton = document.querySelector('#heart');
const submitButton = document.querySelector('#submit');
let ul = document.querySelector('ul');
// let li = document.createElement('li');

let likedNumbers = {
    numberLiked: '',
    timesNumberLiked: '',
}

function numberUpdates(obj, key, value) {
    obj[key] = value;

    return obj;
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
    // let li = document.createElement('li');
    // let currentLi = document.getElementById(num);
    // if (currentLi === null){
    //     li.innerText = num
    //     li.id = num
    //     li.className = 0
    //     ul.appendChild(li)
    // }
    // else if (currentLi){
    //     console.log('tapped again')
    //     let timesClicked = parseInt(currentLi.className)
    //     console.log(currentLi.id)
    //     // console.log(`${currentLi.id} clicked ${timesClicked}`)
    //     currentLi.className = timesClicked
    // }
    likedNumber()
})
// function likedNumber() {
//     let li = document.createElement('li');
//     let currentLi = document.getElementById(num);
//     if (currentLi === null){
//         li.innerText = `${currentLi.id} has been liked 1 time`
//         li.id = num
//         li.className = 0
//         // ul.appendChild(li)
//     }
//     else if (currentLi){
//         let timesClicked = parseInt(currentLi.className)+1
//         // console.log(`${currentLi.id} clicked ${timesClicked}`)
//         currentLi.className = timesClicked
//         li.innerText = `${currentLi.id} has been liked ${timesClicked} times`
//         // ul.appendChild(li)
//     }
// }

