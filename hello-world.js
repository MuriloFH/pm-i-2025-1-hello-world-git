const nameInput = document.getElementById('name');
const messageP = document.getElementById('message');

nameInput.onkeyup = (event) => {
    if (nameInput.value === '') {
        messageP.innerText = '';
    }

    if (event.key === "Enter") {
        helloWorld();
    }

    if (event.key === "Escape") {
        nameInput.value = '';
    }
} 

const clearFields = () => {
    messageP.innerText = '';
    nameInput.value = '';
}


const helloWorld = () => {
    messageP.innerText = `Hello World, ${nameInput.value}!`;
}