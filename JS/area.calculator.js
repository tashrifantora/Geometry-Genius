// Traingle Area
function calculateTraingleArea() {
    // Traingle base
    const baseField = document.getElementById('traingle-base').value;
    const base = parseFloat(baseField);

    // Traingle hight
    const hightField = document.getElementById('traingle-hight').value;
    const hight = parseFloat(hightField);

    const area = 0.5 * base * hight;
    document.getElementById('traingle-area').innerText = area;
}

// Rectraingle Area
function calculateRectraingleArea() {
    // rectraingle width
    const widthField = document.getElementById('rectangle-width').value;
    const width = parseFloat(widthField);

    // rectraingle length
    const lengthField = document.getElementById('rectangle-length').value;
    const length = parseFloat(lengthField);

    // Result + WSet Text
    const area = width * length;
    document.getElementById('rectangle-area').innerText = area;
}