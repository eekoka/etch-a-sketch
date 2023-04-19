//create x by x grid structure with div
function createGrid(gridStructure) {
    const gridArea = document.querySelector("#grid-area");
    const gridSize = gridArea.clientHeight;
    const unitSize = gridSize / gridStructure;

    for (let x = 0; x < gridStructure; x++) {
        for (let y = 0; y < gridStructure; y++) {
            const aDiv = document.createElement("div");
            aDiv.id = x.toString() + y.toString();
            aDiv.classList.add("unit");
            aDiv.style.width = unitSize+"px";
            aDiv.style.height = unitSize+"px";
            //aDiv.style.backgroundColor = colors[(y+x) % 6];
            gridArea.appendChild(aDiv);
        }
    }
}

function colorDiv () {
    if (this.style.backgroundColor !== "black") {
        this.style.backgroundColor = "black";
    } else {
        this.style.backgroundColor = "white";
    }

}

//listen for mouse hovering to change color
function colorGrid() {
    const units = document.querySelectorAll(".unit");
    units.forEach(unit => unit.addEventListener("mouseenter",colorDiv));
}

//create 64x64 grid as default
createGrid(12);
colorGrid();

//function to remove first child each time until all are removed
function removeGrid() {
    const gridArea = document.querySelector("#grid-area");
    while (gridArea.firstChild) {
        gridArea.removeChild(gridArea.firstChild);
    }
}

//listen for change in grid size
const gridBtn = document.querySelector("#grid-btn");
gridBtn.addEventListener("click", ()=>{

    let validEntry = false;
    let gridNumber;
    //receive input
    //remove grid and create a new one.
    do {
        gridNumber = parseInt(prompt("Select Grid Size\nPlease enter a number from 1 to 64", "12"));
        if (gridNumber >= 1 && gridNumber <= 64) validEntry = true;
    }
    while (validEntry == false);

    if (validEntry == true) {
        removeGrid();
        createGrid(gridNumber);
        colorGrid()
    } else return;
});