const alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const inputOriginal = document.getElementById('inputOriginal');
const resultado = document.getElementById('resultado');
const cifrador = document.getElementById('cifrador');
const rango = document.getElementById('rango');

const shifMessage = () => {
    const wordArray = [...inputOriginal.value.toUpperCase()];
    printChar(0,wordArray);
};

const printChar = (currentLetterIndex, wordArray) => {
    if(wordArray.length === currentLetterIndex) return;
    inputOriginal.value = inputOriginal.value.substring(1);
    const spanChar = document.createElement('span');
    resultado.appendChild(spanChar);
    const charSinCodificar = wordArray[currentLetterIndex];
    spanChar.innerHTML = alfabeto.includes(charSinCodificar) ?
        alfabeto[(alfabeto.indexOf(charSinCodificar)+parseInt(rango.value)) % alfabeto.length] :
            charSinCodificar
    printChar(currentLetterIndex + 1, wordArray)
};

const submit = e => {
    e.preventDefault();
    resultado.innerHTML = '';
    shifMessage();
};

cifrador.onsubmit = submit;
