const dynamicStyle = document.getElementById('dynamic-style');
const styleToggle = document.getElementById('styleToggle');
const bodyElement = document.body;

function toggleStyle() {
    if (styleToggle.checked) {
        bodyElement.id = 'dynamic-style';
    } else {
        bodyElement.id = 'plain-style';
    }
}

function convert() {
    let result = 0;
    const inputValue = parseFloat(document.getElementById("userInput").value);
    const unit = document.getElementById("unit").value;
    const resultElement = document.getElementById('resultElement');

    if (isNaN(inputValue)) {
        resultElement.innerHTML = "Please enter a valid number.";
        return;
    }

    switch(unit) {
        case "milesToKm":
            result = inputValue * 1.60934;
            resultElement.innerHTML = `${inputValue} miles are ${result.toFixed(2)} kilometers`;
            break;
        case "kmToMiles":
            result = inputValue / 1.60934;
            resultElement.innerHTML = `${inputValue} kilometers are ${result.toFixed(2)} miles`;
            break;
        case "fToC":
            result = (inputValue - 32) * 5 / 9;
            resultElement.innerHTML = `${inputValue} Fahrenheit are ${result.toFixed(2)} Celsius`;
            break;
        case "cToF":
            result = (inputValue * 9 / 5) + 32;
            resultElement.innerHTML = `${inputValue} Celsius are ${result.toFixed(2)} Fahrenheit`;
            break;
        default:
            resultElement.innerHTML = "Please select a conversion unit.";
    }
}