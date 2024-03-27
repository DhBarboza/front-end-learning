const calorieCounter = document.getElementById("calorie-counter");
const budgetNumberInput = document.getElementById("budget");
const entryDropdown = document.getElementById("entry-dropdown");
const addEntryButton = document.getElementById("add-entry");
const clearButton = document.getElementById("clear");
const output = document.getElementById("output");

let isRunning = true;
let hasCompleted = false;
let isError = false;

/*
function cleanInputString(str) {
    const strArray = str.split("");
    let cleanStrArray = [];

    for (let i = 0; i < strArray.length; i++){
        if(!["+", "-", " "].includes(strArray[i])){
            cleanStrArray.push(strArray[i]);
        }
    }
}*/

// Remover caracteres de uma string str que correspondem a +, - ou espaços em branco.
function cleanInputString(str) {
    const regex = /[+-\s]/g;
    return str.replace(regex, "");
}

// verificando se a string str contém um padrão que corresponde a números no formato de notação científica, como por exemplo 1e10, 3E-5, etc:
function isInvalidInput(str) {
    const regex = /\d+e\d+/i;
    return str.match(regex);
}

// buscando por um elemento HTML com a classe .input-container dentro de um elemento identificado pelo valor selecionado em um dropdown:
function addEntry() {
    // Construindo um seletor CSS para encontrar um elemento HTML com o ID correspondente ao valor selecionado em um dropdown:
    const targetId = "#" + entryDropdown.value;

    // utiliza o método querySelector do objeto document para encontrar o primeiro elemento que corresponde ao seletor CSS construído anteriormente:
    const targetInputContainer = document.querySelector(
        `${targetId} .input-container`
    );
}
