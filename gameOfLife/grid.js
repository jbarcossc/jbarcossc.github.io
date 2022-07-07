class Grid {
    // ========================= VARS =========================
    constructor(rows, cols, gridInfinite){
        this.infinite = gridInfinite;
        this.rows = rows + this.infinite*10;
        this.cols = cols + this.infinite*10;
        this.cellHeight = canvasHeight / rows;
        this.cellWidth = canvasWidth / cols;

        // Sets default grid state
        this.grid = new Array;
        for(let i = 0; i < this.rows; i++){
            this.grid.push(new Array);
            for(let j = 0; j < this.cols; j++){
                this.grid[this.grid.length - 1].push(false);
            }
        }

        // These positions draw a 'glider'
        let halfX = Math.floor(this.cols / 2);
        let halfY = Math.floor(this.rows / 2);
        this.grid[halfX][halfY] = true;
        this.grid[halfX + 1][halfY + 1] = true;
        this.grid[halfX][halfY + 2] = true;
        this.grid[halfX - 1][halfY + 2] = true;
        this.grid[halfX + 1][halfY + 2] = true;
    }

    // ======================== MAIN FUNCTIONS ========================
    // Show: displays the grid on the canvas
    show(){
        strokeWeight(1);
        stroke(gridColor)
        for(let i = this.infinite*5; i < this.rows - this.infinite*5; i++){
            for(let j = this.infinite*5; j < this.cols - this.infinite*5; j++){
                this.grid[i][j] ? fill(aliveColor) : fill(deadColor);
                rect((j - this.infinite*5)*this.cellHeight, (i - this.infinite*5)*this.cellWidth, this.cellWidth, this.cellHeight);
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
            x = floor(touches[touches.length - 1].x / this.cellWidth);
            y = floor(touches[touches.length - 1].y / this.cellHeight);
        } else {
            x = floor(mouseX / this.cellWidth);
            y = floor(mouseY / this.cellHeight);
        }
        if(0 <= x && x < this.cols && 0 <= y && y < this.rows){
            this.grid[y + this.infinite*5][x + this.infinite*5] = true;
        }
    }

    // Erase: kills cells that the user presses with right click
    erase(){
        let x;
        let y;
        if(mobile && touches.length >= 1){
            x = floor(touches[touches.length - 1].x / this.cellWidth);
            y = floor(touches[touches.length - 1].y / this.cellHeight);
        } else {
            x = floor(mouseX / this.cellWidth);
            y = floor(mouseY / this.cellHeight);
        }
        if(0 <= x && x < this.cols && 0 <= y && y < this.rows){
            this.grid[y + this.infinite*5][x + this.infinite*5] = false;
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