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
    configStatus = !configStatus;
    toggleConfig();
    configStatus? config.style.transform = "rotate(90deg)" : config.style.transform = "rotate(-90deg)";
}

// ======================================== Options ========================================

let widthSlider = document.querySelector("#width-size");
let heightSlider = document.querySelector("#height-size");
let widthValue = document.querySelector("#width-value");
let heightValue = document.querySelector("#height-value");
let gridSizeSlider = document.querySelector("#grid-size");
let gridSizeValue = document.querySelector("#grid-size-value");

let gridMin = 5;
let gridMax = Math.floor(Math.min(canvasHeight, canvasWidth) / 18);

widthSlider.min = minWidth;
document.getElementById("min-width-size").innerText = minWidth;

widthSlider.max = maxWidth;
document.getElementById("max-width-size").innerText = maxWidth;

heightSlider.min = minHeight;
document.getElementById("min-height-size").innerText = minHeight;

heightSlider.max = maxHeight;
document.getElementById("max-height-size").innerText = maxHeight;

gridSizeSlider.min = gridMin;
document.getElementById("min-grid-size").innerText = gridSizeSlider.min;

gridSizeSlider.max = gridMax;
document.getElementById("max-grid-size").innerText = gridSizeSlider.max;

widthSlider.oninput = function(){
    let value = widthSlider.value;
    widthValue.textContent = value;
    let left = Number(((value - minWidth)*100) / (maxWidth - minWidth));
    widthValue.style.left = left + "%";
}

heightSlider.oninput = function(){
    let value = heightSlider.value;
    heightValue.textContent = value;
    let left = Number(((value - minHeight)*100) / (maxHeight - minHeight));
    heightValue.style.left = left + "%";
}

gridSizeSlider.oninput = function(){
    let value = gridSizeSlider.value;
    gridSizeValue.textContent = value;
    let left = Number(((value - gridMin)*100) / (gridMax - gridMin));
    gridSizeValue.style.left = left + "%";
}