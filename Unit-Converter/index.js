/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

// Get elements
convertBtn = document.getElementById('convert-btn');
lengthResults = document.getElementById('length-results');
volumeResults = document.getElementById('volume-results');
massResults = document.getElementById('mass-results');
quantityInput = document.getElementById('quantity'); 


convertBtn.addEventListener('click', function() {
    let quantity = parseFloat(quantityInput.textContent);

    if (isNaN(quantity)) {
        alert("Please enter a valid number.");
        return;
    }

    let feet = quantity * 3.281;
    let metres = quantity / 3.281;
    let gallons = quantity * 0.264;
    let litres = quantity / 0.264;
    let pounds = quantity * 2.204;
    let kilos = quantity / 2.204;

    lengthResults.innerHTML = `${quantity} metres = ${feet.toFixed(3)} feet | ${quantity.toFixed(3)} feet = ${metres.toFixed(3)} metres`;
    
    volumeResults.innerHTML = `${quantity} litres = ${gallons.toFixed(3)} gallons | ${quantity.toFixed(3)} gallons = ${litres.toFixed(3)} litres`;
    
    massResults.innerHTML = `${quantity} kilos = ${pounds.toFixed(3)} pounds | ${quantity.toFixed(3)} pounds = ${kilos.toFixed(3)} kilos`;
});

1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/