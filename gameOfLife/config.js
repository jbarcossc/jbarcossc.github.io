// ================================ Configurations panel ================================

let configStatus = false;

function toggleConfig(){
    let sideBar = document.querySelector(".config-list");
    let widthSlider = document.querySelector("#range-width");
    let heightSlider = document.querySelector("#range-height");
    let gridSlider = document.querySelector("#range-grid");
    if (configStatus){
       sideBar.style.visibility = "visible";
       (screen.width > 600) ? sideBar.style.width = "300px" : sideBar.style.width = "85vw";
       (screen.width > 600) ? widthSlider.style.width = "180px" : widthSlider.style.width = "50vw";
       (screen.width > 600) ? heightSlider.style.width = "180px" : heightSlider.style.width = "50vw";
       (screen.width > 600) ? gridSlider.style.width = "180px" : gridSlider.style.width = "50vw";
       (screen.width > 600) ? sideBar.style.right = "29px" : sideBar.style.right = "auto";
       sideBar.style.padding = "20px";
       sideBar.style.opacity = "100%";
    } else {
        sideBar.style.visibility = "hidden";
        sideBar.style.width = "0px";
        widthSlider.style.width = "0px";
        heightSlider.style.width = "0px";
        gridSlider.style.width = "0px";
        sideBar.style.padding = "20px 0px";
        sideBar.style.opacity = "0%";
    }
}

let config = document.getElementById("config");
config.onclick = function(){
    changeConfig();
}

function changeConfig(){
    configStatus = !configStatus;
    toggleConfig();
    configStatus? config.style.transform = "rotate(90deg)" : config.style.transform = "rotate(-90deg)";
}

// ======================================== Options ========================================

// Width Slider -------------------------------------------------------------
let widthSlider = document.querySelector("#width-size");
let widthValue = document.querySelector("#width-value");
function updateWidthSlider(val, minWidth, maxWidth){
    // Set slider limits -----------------
    // Min
    widthSlider.min = minWidth;
    document.getElementById("min-width-size").innerText = minWidth;
    // Max
    widthSlider.max = maxWidth;
    document.getElementById("max-width-size").innerText = maxWidth;

    // Set value --------------------------
    let value;
    val ? value = val : value = Number(widthSlider.value);
    widthSlider.value = value;
    widthValue.textContent = value;

    // Style ------------------------------
    let left = Number(((value - minWidth)*100) / (maxWidth - minWidth));
    widthValue.style.left = left + "%";
}
widthSlider.oninput = function(){
    updateWidthSlider(false, Number(widthSlider.min), Number(widthSlider.max));
}

// Height Slider --------------------------------------------------------------
let heightSlider = document.querySelector("#height-size");
let heightValue = document.querySelector("#height-value");
function updateHeightSlider(val, minHeight, maxHeight){
    // Set slider limits ------------------
    // Min
    heightSlider.min = minHeight;
    document.getElementById("min-height-size").innerText = minHeight;
    // Max
    heightSlider.max = maxHeight;
    document.getElementById("max-height-size").innerText = maxHeight;

     // Set value --------------------------
     let value;
     val ? value = val : value = Number(heightSlider.value);
     heightSlider.value = value;
     heightValue.textContent = value;
 
     // Style ------------------------------
     let left = Number(((value - minHeight)*100) / (maxHeight - minHeight));
     heightValue.style.left = left + "%";
}
 heightSlider.oninput = function(){
     updateHeightSlider(false, Number(heightSlider.min), Number(heightSlider.max));
}

// Size input ------------------------------------------------------------------
sizeSubmit = document.getElementById("size-button");
sizeSubmit.onclick = function(){
    width = Number(widthSlider.value);
    height = Number(heightSlider.value);
    setCanvasSize();
    windowResized();
    setRowsandCols();
    grid = new Grid(rows, cols, gridSize, gridInfinite, pattern);
}

// Grid slider -----------------------------------------------------------------
let gridSizeSlider = document.querySelector("#grid-size");
let gridSizeValue = document.querySelector("#grid-size-value"); 

function updateGridSlider(val, canvasHeight, canvasWidth, gridMin){
    // Set slider limits -----------------
    // Min
    gridSizeSlider.min = gridMin;
    document.getElementById("min-grid-size").innerText = gridSizeSlider.min;
    // Max
    let gridMax = Math.round(Math.min(canvasHeight, canvasWidth) / 18);
    gridSizeSlider.max = gridMax;
    document.getElementById("max-grid-size").innerText = gridSizeSlider.max;

    // Set value -------------------------
    let value;
    val ? value = val : value = Number(gridSizeSlider.value);
    if (value > gridMax){
        value = Math.min(value, gridMax);
        gridSize = value;
        gridUpdate();
    }
    gridSizeSlider.value = value;
    gridSizeValue.textContent = value;

    // Style -----------------------------
    let left = Number(((value - gridMin)*100) / (gridMax - gridMin));
    gridSizeValue.style.left = left + "%";
}
gridSizeSlider.oninput = function(){
    updateGridSlider(false, canvasHeight, canvasWidth, gridMin);
}



// Grid input -------------------------------------------------------------------
gridSubmit = document.getElementById("scale-button");
gridSubmit.onclick = function(){
    gridUpdate();
}
function gridUpdate(){
    gridSize = Number(gridSizeSlider.value);
    setRowsandCols();
    grid = new Grid(rows, cols, gridSize, gridInfinite, pattern);
}


// Infinite mode ----------------------------------------------------------------
infinite = document.getElementById("infinite-checkbox");
infinite.onclick = function(){
    gridInfinite = !gridInfinite;
    grid = new Grid(rows, cols, gridSize, gridInfinite, pattern);
}


// Patterns ---------------------------------------------------------------------
glider = document.getElementById("glider");
glider.onclick = function(){
    pattern = glider;
    grid = new Grid(rows, cols, gridSize, gridInfinite, pattern);
}
pulsar = document.getElementById("pulsar");
pulsar.onclick = function(){
    pattern = pulsar;
    grid = new Grid(rows, cols, gridSize, gridInfinite, pattern);
}
penta = document.getElementById("penta");
penta.onclick = function(){
    pattern = penta;
    grid = new Grid(rows, cols, gridSize, gridInfinite, pattern);
}
galaxy = document.getElementById("galaxy");
galaxy.onclick = function(){
    pattern = galaxy;
    grid = new Grid(rows, cols, gridSize, gridInfinite, pattern);
}
star = document.getElementById("star");
star.onclick = function(){
    pattern = star;
    grid = new Grid(rows, cols, gridSize, gridInfinite, pattern);
}
spaceship = document.getElementById("spaceship");
spaceship.onclick = function(){
    pattern = spaceship;
    grid = new Grid(rows, cols, gridSize, gridInfinite, pattern);
}
weekender = document.getElementById("weekender");
weekender.onclick = function(){
    pattern = weekender;
    grid = new Grid(rows, cols, gridSize, gridInfinite, pattern);
}
copperhead = document.getElementById("copperhead");
copperhead.onclick = function(){
    pattern = copperhead;
    grid = new Grid(rows, cols, gridSize, gridInfinite, pattern);
}
loafer = document.getElementById("loafer");
loafer.onclick = function(){
    pattern = loafer;
    grid = new Grid(rows, cols, gridSize, gridInfinite, pattern);
}