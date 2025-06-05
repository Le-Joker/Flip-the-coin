const button = document.querySelector('button');
const change = document.querySelector('#change');
const resultText = document.querySelector('#result');

button.addEventListener('click', () => {
    const result = Math.random() < 0.5 ? "Heads" : "Tails";
   
    if (result === "Heads") {
        change.src = "resources/heads.svg";
        change.alt = "heads";
    } else {
        change.src = "resources/tails.svg";
        change.alt = "tails";
    }

    resultText.textContent = result;
});
