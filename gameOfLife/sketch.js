// ========================== VARS ==========================

let cnv;
let height = 400;                                                     // Canvas height
let width = 400;                                                      // Canvas width
let minWidth = 310;                                                   // Min canvas width
let minHeight = 150;                                                  // Min canvas height
let maxWidth = screen.width - 40;                                     // Max canvas width depending on device
let maxHeight = screen.height - 200;                                  // Max canvas height depending on device
let canvasWidth, canvasHeight;
setCanvasSize();                                                      // Set dimensions of canvas
let gridMin = 5;
let gridSize = 15;                                                    // Grid cell scale
updateHeightSlider(canvasHeight, minHeight, maxHeight);
updateWidthSlider(canvasWidth, minWidth, maxWidth);
updateGridSlider(gridSize, canvasWidth, canvasHeight, gridMin);
let rows, cols;
setRowsandCols();                                                     // Set grid amount of rows and columns
let gridInfinite = false;                                              // Infinite mode state
let pattern = glider;
let grid = new Grid(rows, cols, gridSize, gridInfinite, pattern);              // Game
let pause = true;                                                     // Pause state, if false, game stops
let clicking = false;                                                 // Drawing/erasing state, if true, user can draw/erase when action
let action = 1;                                                       // Action state, if true, action can be performed (draw or erase)
let fr = 15;                                                               // Frame Rate
let mobile = false;                                                   // Mobile interaction state
let gridColor = "#2b2d42";                                             // Game colors: Cell division
let aliveColor = "#ed225d";                                            // Game colors: Living cells
let deadColor = "#ffffff";                                             // Game colors: Dead cells



// ==================== MAIN FUNCTIONS ====================
function setup() {
  cnv = createCanvas(canvasWidth, canvasHeight);
  cnv.parent('sketch-holder');
  frameRate(fr);
}

function draw() {
  background(0);
  if(!pause){
    grid.update();
  } else {
   if(action == 1 && clicking){
    grid.draw();
   }
   if(action == 0 && clicking){
    grid.erase();
   }
  }
  grid.show();

}

// ====================== AUXILIARY ======================

// If mouse is pressed, enables drawing or erasing, depending on the action-button state
document.body.onmousedown = function(){
  if(!configStatus) clicking = true;
}

// If mouse is not pressed, disables drawing and erasing
document.body.onmouseup = function(){
  clicking = false;
}

// Action toggle
let action_button = document.getElementById("action-button");
let action_icon = document.getElementById("action-icon");
action_button.onclick = function(){
  action = !action;
  action ? action_icon.className = "fa fa-paint-brush fa-2x" : action_icon.className = "fa fa-solid fa-eraser fa-2x";
}

// Pause button
let pause_button = document.getElementById("pause-button");
let pause_icon = document.getElementById("pause-icon");
pause_button.onclick = function(){
  pause = !pause;
  pause ? pause_icon.className = "fa fa-solid fa-play fa-2x" : pause_icon.className = "fa fa-solid fa-pause fa-2x";
  action_button.disabled = !pause;
}

// Clear button
let clear_button = document.getElementById("clear-button");
clear_button.onclick = function(){
  grid.clear();
}

// Mobile
function touchStarted(){
  if(!configStatus){
    mobile = true;
    clicking = true;
  }
}

function touchEnded(){
  mobile = false;
  clicking = false;
}

function setRowsandCols(){
  rows = Math.ceil(canvasHeight / gridSize);                       // Grid rows
  cols = Math.ceil(canvasWidth / gridSize);                        // Grid cols
}

function setCanvasSize(){
  canvasHeight = Math.max(Math.min(height, maxHeight), minHeight);  // Canvas height
  canvasWidth = Math.max(Math.min(width, maxWidth), minWidth);      // Canvas width
}

function windowResized(){
  resizeCanvas(canvasWidth, canvasHeight);
  updateGridSlider(gridSize, canvasHeight, canvasWidth, gridMin);
}


// Close config when clicking outside -------------------------------------------

document.onclick = function(e){
    if(configStatus && !(document.getElementById("pause-button").contains(e.target)) && !(document.getElementById("menu").contains(e.target)) &&  !(document.getElementById("config-button").contains(e.target))){
      changeConfig();
    }
}

function setFrameRate(val){
  frameRate(val);
}

// Speed configuration
let speedSlider = document.getElementById("speed");
speedSlider.oninput = function(){
  let val = Number(speedSlider.value);
  setFrameRate(val);
}