// ========================== VARS ==========================

let height = 400;                     // Canvas height
let width = 400;                      // Canvas width
let grid = new Grid(30, 30);          // Game
let pause = true;                     // Pause state, if false, game stops
let clicking = false;                 // Drawing/erasing state, if true, user can draw/erase when action
let action = 1;                       // Action state, if true, action can be performed (draw or erase)
let fr = 15;                          // Frame Rate
let mobile = false;


// ==================== MAIN FUNCTIONS ====================
function setup() {
  let cnv = createCanvas(width, height);
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
  clicking = true;
}

// If mouse is not pressed, disables drawing and erasing
document.body.onmouseup = function(){
  clicking = false;
}

// Action toggle
let action_button = document.getElementById("action-button");
action_button.onclick = function(){
  action = !action;
  action ? action_button.innerText = "Drawing" : action_button.innerText = "Erasing";
}

// Pause button
let pause_button = document.getElementById("pause-button");
pause_button.onclick = function(){
  pause = !pause;
  pause ? pause_button.innerText = "Play" : pause_button.innerText = "Pause";
  action_button.disabled = !pause;
}

// Clear button
let clear_button = document.getElementById("clear-button");
clear_button.onclick = function(){
  grid.clear();
}

// Mobile
function touchStarted(){
  mobile = true;
  clicking = true;
}

function touchEnded(){
  mobile = false;
  clicking = false;
}

