var count = 0;

document.getElementById('particles-js').addEventListener("click", keepCount);

/* Adds count and when reach 7, redirect to gamesite */
function keepCount ()  {
    if (count < 7){
        count ++;
        console.log('Added something...')
    }
    if (count === 3) {
        console.log('What do you add?')
    } 
    if (count === 6) {
        console.log('...almost there...')
    } 
    if (count === 7){
        window.location.replace("SuperheroMemory/index.html");
    }
};