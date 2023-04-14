const gridStructure = 16;
const gridArea = document.querySelector("#grid-area");
const gridSize = gridArea.clientHeight;
const unitSize = gridSize / gridStructure;

//var colors = ['red','blue','green','yellow','cyan','orange'];

//create x by x grid structure with div
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


//listen for mouse hovering to change color
const units = document.querySelectorAll(".unit");

function colorDiv () {
    this.style.backgroundColor = "black";
}

units.forEach(unit => unit.addEventListener("mouseenter",colorDiv));
