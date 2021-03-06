class Grid {
    // ========================= VARS =========================
    constructor(gridRows, gridCols, scale, infinite, pattern){
        this.infinite = infinite;
        this.rows = gridRows + this.infinite*30;
        this.cols = gridCols + this.infinite*30;
        this.gridSize = scale;

        // Sets default grid state
        this.setNewPattern(pattern);
    }

    // ======================== MAIN FUNCTIONS ========================
    // Show: displays the grid on the canvas
    show(){
        strokeWeight(1);
        stroke(gridColor)
        for(let i = this.infinite*15; i < this.rows - this.infinite*15; i++){
            for(let j = this.infinite*15; j < this.cols - this.infinite*15; j++){
                this.grid[i][j] ? fill(aliveColor) : fill(deadColor);
                rect((j - this.infinite*15)*this.gridSize, (i - this.infinite*15)*this.gridSize, this.gridSize, this.gridSize);
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
        if(mobile && touches.length >= 1){
            x = Math.floor(touches[touches.length - 1].x / this.gridSize);
            y = Math.floor(touches[touches.length - 1].y / this.gridSize);
        } else {
            x = Math.floor(mouseX / this.gridSize);
            y = Math.floor(mouseY / this.gridSize);
        }
        if(0 <= x && x < this.cols && 0 <= y && y < this.rows){
            this.grid[y + this.infinite*15][x + this.infinite*15] = 1;
        }
    }

    // Erase: kills cells that the user presses with right click
    erase(){
        let x;
        let y;
        if(mobile && touches.length >= 1){
            x = Math.floor(touches[touches.length - 1].x / this.gridSize);
            y = Math.floor(touches[touches.length - 1].y / this.gridSize);
        } else {
            x = Math.floor(mouseX / this.gridSize);
            y = Math.floor(mouseY / this.gridSize);
        }
        if(0 <= x && x < this.cols && 0 <= y && y < this.rows){
            this.grid[y + this.infinite*15][x + this.infinite*15] = 0;
        }
    }

    clear(){
        let newGrid = new Array;
        for(let i = 0; i < this.rows; i++){
            newGrid.push(new Array);
            for(let j = 0; j < this.cols; j++){
            newGrid[newGrid.length - 1].push(0);
            }
        }
        this.grid = newGrid;
    }

    setNewPattern(pattern){
        this.grid = setPattern(this.rows, this.cols, pattern);
    }


    // =========================== AUXILIARY ===========================
    // Evolve: given a cell position, returns if it will be death or alive on the next state
    evolve(x, y){
        let neighbours = 0;
        for(let i = x - 1; i < x + 2; i++){
            for(let j = y - 1; j < y + 2; j++){
                let posX = i;
                let posY = j;
                if(!this.infinite){
                    posX = (i % this.rows) < 0 ? (i % this.rows) + this.rows : i % this.rows;
                    posY = (j % this.cols) < 0 ? (j % this.cols) + this.cols : j % this.cols;
                }
                if ((posX != x || posY != y) && posX >= 0 && posY >= 0 && posX < this.rows && posY < this.cols){
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