class Grid {
    // ========================= CONSTRUCTOR =========================
    constructor(rows, cols){
        this.rows = rows;
        this.cols = cols;
        this.cellHeight = height / this.rows;
        this.cellWidth = width / this.cols;

        // Sets default grid state
        this.grid = new Array;
        for(let i = 0; i < this.rows; i++){
            this.grid.push(new Array);
            for(let j = 0; j < this.cols; j++){
                this.grid[this.grid.length - 1].push(false);
            }
        }

        // These positions draw a 'glider'
        this.grid[9][9] = true;
        this.grid[10][10] = true;
        this.grid[9][11] = true;
        this.grid[8][11] = true;
        this.grid[10][11] = true;
    }

    // ======================== MAIN FUNCTIONS ========================
    // Show: displays the grid on the canvas
    show(){
        strokeWeight(1);
        for(let i = 0; i < this.rows; i++){
            for(let j = 0; j < this.cols; j++){
                if(this.grid[i][j]){
                    stroke(0);
                    fill(255);
                } else {
                    stroke(255);
                    fill(0);
                }
                rect(j*this.cellHeight, i*this.cellWidth, this.cellWidth, this.cellHeight);
            }
        }
    }

    // Update: updates every cell of the grid
    update(){
        let newGrid = new Array;
        for(let i = 0; i < this.rows; i++){
            newGrid.push(new Array);
            for(let j = 0; j < this.cols; j++){
                newGrid[newGrid.length - 1].push(this.evolve(i, j));
            }
        }
        this.grid = newGrid;
    }

    // Draw: revive cells that the user presses with left click
    draw(){
        let x;
        let y;
        if(mobile){
            x = floor(touches[touches.length - 1].x / this.cellWidth);
            y = floor(touches[touches.length - 1].y / this.cellHeight);
        } else {
            x = floor(mouseX / this.cellWidth);
            y = floor(mouseY / this.cellHeight);
        }
        if(0 <= x && x < this.rows && 0 <= y && y < this.cols){
            this.grid[y][x] = true;
        }
    }

    // Erase: kills cells that the user presses with right click
    erase(){
        let x = floor(mouseX / this.cellWidth);
        let y = floor(mouseY / this.cellHeight);
        if(0 <= x && x < this.rows && 0 <= y && y < this.cols){
            this.grid[y][x] = false;
        }
    }

    clear(){
        let newGrid = new Array;
        for(let i = 0; i < this.rows; i++){
            newGrid.push(new Array);
            for(let j = 0; j < this.cols; j++){
            newGrid[newGrid.length - 1].push(false);
            }
        }
        this.grid = newGrid;
    }


    // =========================== AUXILIARY ===========================
    // Evolve: given a cell position, returns if it will be death or alive on the next state
    evolve(x, y){
        let neighbours = 0;
        for(let i = x - 1; i < x + 2; i++){
            for(let j = y - 1; j < y + 2; j++){
                let posX = (i % this.rows) < 0 ? (i % this.rows) + this.rows : i % this.rows;
                let posY = (j % this.cols) < 0 ? (j % this.cols) + this.cols : j % this.cols;
                if (i != x || j != y){
                    neighbours += this.grid[posX][posY];
                }
            }
        }
        if(this.grid[x][y]){
            return (neighbours == 2 || neighbours == 3);
        } else {
            return neighbours == 3;
        }
    }
}