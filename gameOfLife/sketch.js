// ========================== VARS ==========================

let height = 400;                     // Canvas height
let width = 400;                      // Canvas width
let grid = new Grid(30, 30);          // Game
let pause = true;                     // Pause state, if false, game stops
let drawing = false;                  // Drawing state, if true, user can draw
let erasing = false;                  // Erasing state, if true, user can erase
let fr = 15;                          // Frame Rate


// ==================== MAIN FUNCTIONS ====================
function setup() {
  createCanvas(width, height);
  frameRate(fr);
}

function draw() {
  background(0);
  if(!pause){
    grid.update();
  } else {
   if(drawing){
    grid.draw();
   }
   if(erasing){
    grid.erase();
   }
  }
  grid.show();
}

// ====================== AUXILIARY ======================

// If space key is pressed, toggles pause state
document.body.onkeyup = function(e){
  if (e.key == " " || e.code == "Space" || e.keyCode == 32){
    pause = !pause;
    let pouseP = document.getElementById("pause");
    pouseP.innerText = "Press SPACE key to";
    if(pause){
      pouseP.innerText += " unpause";
    } else {
      pouseP.innerText += " pause";
    }
  }
}

// If mouse is pressed, enables drawing or erasing, depending on the button
document.body.onmousedown = function(e){
  drawing = e.button == 0;
  erasing = e.button == 2;
}

// If mouse is not pressed, disables drawing and erasing
document.body.onmouseup = function(e){
  drawing = false;
  erasing = false;
}