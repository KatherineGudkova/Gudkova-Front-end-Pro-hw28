let tableContainer = document.getElementById("tableContainer");
let table = document.createElement("table");

let tableArray = [];

for (let i = 1; i <= 100; i++){
    tableArray.push(i);
}

let currentIdx = 0;

function addTableElement() {
    if (currentIdx < tableArray.length) {
        let rowIdx = Math.floor(currentIdx / 10);
        let colIdx = currentIdx % 10;
        
        let row = table.rows[rowIdx];
        if (!row) {
            row = table.insertRow(rowIdx);
        }
        
        let cell = row.insertCell(colIdx);
        cell.textContent = tableArray[currentIdx];
        
        currentIdx++;
        setTimeout(addTableElement, 100);
    }
}

addTableElement();

tableContainer.appendChild(table);