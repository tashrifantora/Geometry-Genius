// Traingle Area
function calculateTraingleArea() {
    // Functional way
    const base = getInputValue('traingle-base');
    const hight = getInputValue('traingle-hight');


    // Validation
    if (isNaN(base) || isNaN(hight)) {
        alert('Please insert a number');
        return;
    }

    const area = 0.5 * base * hight;
    setTextFieldText('traingle-area', area);

    // Add to calculation
    addToCalculateEntry('traingle', area);
}

// Rectraingle Area
function calculateRectraingleArea() {
    // Funtional way
    const width = getInputValue('rectangle-width');
    const length = getInputValue('rectangle-length');


    // Validation
    if (isNaN(width) || isNaN(length)) {
        alert('Please insert a number');
        return;
    }

    const area = width * length;
    setTextFieldText('rectangle-area', area);

    // Add to calculation
    addToCalculateEntry('rectraingle', area);
}


// Parallelogram Area 
function calculateParallelogramArea() {
    const base = getInputValue('parallelogram-base');
    const hight = getInputValue('parallelogram-hight');


    // Validation
    if (isNaN(base) || isNaN(hight)) {
        alert('Please insert a number');
        return;
    }

    const area = base * hight;
    setTextFieldText('parallelogram-area', area);

    // Add to calculation
    addToCalculateEntry('parallelogram', area);
}

// Ellipse Area
function calculateEllipseArea() {
    const majorRadius = getInputValue('ellipse-major-radius');
    const minorRadius = getInputValue('ellipse-minor-radius');

    // Validation
    if (isNaN(majorRadius) || isNaN(minorRadius)) {
        alert('Please insert a number');
        return;
    }

    const area = 3.14 * majorRadius * minorRadius;
    const areaTwoDecimal = area.toFixed(2);
    setTextFieldText("ellipse-area", areaTwoDecimal)

    // Add to calculation
    addToCalculateEntry('Ellipse', areaTwoDecimal);
}

// Pentagon Area
function calculatePentagonArea() {
    const perimeter = getInputValue("pentagon-perimeter");
    const apothem = getInputValue("pentagon-apothem");

    // Validation
    if (isNaN(perimeter) || isNaN(apothem)) {
        alert('Please insert a number');
        return;
    }

    const area = 0.5 * perimeter * apothem;
    setTextFieldText('pentagon-area', area);

    // Add to calculation
    addToCalculateEntry('Pentagon', area);
}

// Rhombus Area
function calculateRhombusArea() {
    const base = getInputValue('rhombus-base');
    const hight = getInputValue('rhombus-hight');


    // Validation
    if (isNaN(base) || isNaN(hight)) {
        alert('Please insert a number');
        return;
    }

    const area = 0.5 * base * hight;
    setTextFieldText('rhombus-area', area);

    // Add to calculation
    addToCalculateEntry('Rhombus', area);
}

// Function for getting input value
function getInputValue(fieldId) {
    const inputField = document.getElementById(fieldId).value;
    const value = parseFloat(inputField);
    return value
}


// Reuseable set value 
function setTextFieldText(elementId, area) {
    document.getElementById(elementId).innerText = area;
}


/* <==============================>
     Add to Calculation entry
<=================================>
*/
function addToCalculateEntry(areaType, area) {
    console.log(areaType + ' ' + area);
    const calculatonEntry = document.getElementById('calculation-entry');

    const count = calculatonEntry.childElementCount;

    const p = document.createElement('p');
    p.classList.add('my-4')
    p.innerHTML = `${count + 1}. ${areaType} ${area} cm<sup>2</sup> <button class="btn btn-sm btn-primary">Convert</button>`
    console.log(calculatonEntry.appendChild(p));
}
