

// document.addEventListener('DOMContentLoaded', () => {
//     const h1 = document.querySelector('#counter');
//     let num = parseInt(h1.innerText);
    
//     function startCounting() {
//         let counter = parseInt(num);
//         setInterval(() => {
//             counter++
//             h1.innerText = counter
//         }, 1000);
//     }
    
//     startCounting();
// })

const h1 = document.querySelector('#counter');
let num = parseInt(h1.innerText);
const pauseResumeButton = document.querySelector('#pause');
const addButton = document.querySelector('#plus');
const minusButton = document.querySelector('#minus');
const likeButton = document.querySelector('#heart');

function counterValue() {
    const h1 = document.querySelector('#counter');
    let num = parseInt(h1.innerText);
    num++
    h1.innerText = num
}

let startCounter = setInterval(counterValue, 1000);

pauseResumeButton.addEventListener('click', function() {
    if (pauseResumeButton.textContent === ' pause '){
        clearInterval(startCounter)
        pauseResumeButton.textContent = ' resume '
    }else {
        startCounter = setInterval(counterValue, 1000),
        pauseResumeButton.textContent = ' pause '
    }
})


// function configureTimer() {
//     let counter = parseInt(num);
//     addButton.addEventListener('click', function() {
//         counter++;
//         return
//     });
//     minusButton.addEventListener('click', function() {
//         counter--;
//         return
//     });
//     pauseResumeButton.addEventListener('click', function() {
//         if (pauseResumeButton.textContent === ' pause '){
//         clearInterval(startCounter),
//         pauseResumeButton.textContent = ' resume '
//     }else {startCounter}
//     })
// }

// configureTimer();

