let languages = {
    "english" : {
        "title" : "The Game of Life",
        "height" : "Height",
        "width" : "Width",
        "size-button" : "Apply",
        "scale" : "Scale",
        "scale-button" : "Apply",
        "infinite" : "Infinite mode",
        "patterns" : "Patterns",
        "palettes" : "Color palettes",
        "explanation-0" : "What is 'The Game of Life'?",
        "explanation-1.0" : "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician ", 
        "explanation-1.5" : " in 1970. It is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves.",
        "rules-0" : "Rules",
        "rules-1" : "The universe of the Game of Life is an infinite, two-dimensional orthogonal grid of square cells, each of which is in one of two possible states, live or dead (or populated and unpopulated, respectively). Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:",
        "rule-1" : "1. Any live cell with fewer than two live neighbours dies, as if by underpopulation.",
        "rule-2" : "2. Any live cell with two or three live neighbours lives on to the next generation.",
        "rule-3" : "3. Any live cell with more than three live neighbours dies, as if by overpopulation.",
        "rule-4" : "4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.",
        "more-info-1.0" : "More info ",
        "more-info-1.5" : "here",
        "author": "Website developed by "
    },
    "spanish" : {
        "title" : "El Juego de la Vida",
        "height" : "Altura",
        "width" : "Ancho",
        "size-button" : "Aplicar",
        "scale" : "Escala",
        "scale-button" : "Aplicar",
        "infinite" : "Modo infinito",
        "patterns" : "Patrones",
        "palettes" : "Paletas de colores",
        "explanation-0" : "??Qu?? es 'El Juego de la Vida'?",
        "explanation-1.0" : "El Juego de la vida es un aut??mata celular dise??ado por el matem??tico brit??nico ", 
        "explanation-1.5" : " en 1970. Es un juego de cero jugadores, en el que su evoluci??n es determinada por un estado inicial, sin requerir intervenci??n adicional.",
        "rules-0" : "Reglas",
        "rules-1" : 'Se trata de un juego de cero jugadores, lo que quiere decir que su evoluci??n est?? determinada por el estado inicial y no necesita ninguna entrada de datos posterior. El "tablero de juego" es una malla plana formada por cuadrados (las "c??lulas") que se extiende por el infinito en todas las direcciones. Por tanto, cada c??lula tiene 8 c??lulas "vecinas", que son las que est??n pr??ximas a ella, incluidas las diagonales. Las c??lulas tienen dos estados: est??n "vivas" o "muertas" (o "encendidas" y "apagadas"). El estado de las c??lulas evoluciona a lo largo de unidades de tiempo discretas (se podr??a decir que por turnos). El estado de todas las c??lulas se tiene en cuenta para calcular el estado de las mismas al turno siguiente. Todas las c??lulas se actualizan simult??neamente en cada turno, siguiendo estas reglas:',
        "rule-1" : "1. Una c??lula viva con menos de dos vecinos vivos muere, por baja poblaci??n.",
        "rule-2" : "2. Una c??lula viva con dos o tres vecinos vivos vive en la pr??xima generaci??n.",
        "rule-3" : "3. Una c??lula viva con m??s de tres vecinos vivos muere, por sobrepoblaci??n.",
        "rule-4" : "4. Una c??lula muerta con exactamente tres vecinos vivos se transforma en una c??lula viva, por reproducci??n.",
        "more-info-1.0" : "M??s informaci??n ",
        "more-info-1.5" : "aqu??",
        "author": "Sitio desarrollado por "
    }
}

let languageButton = document.querySelector(".lang-wrap");
languageButton.onclick = function(){
    let flag = languageButton.firstElementChild;
    let lang = flag.className;
    if(lang == "english"){
        flag.className = "spanish";
        flag.src = "src/es.png";
        document.getElementById("conway").href = "https://es.wikipedia.org/wiki/John_Horton_Conway";
        document.getElementById("more-info-1.5").href = "https://es.wikipedia.org/wiki/Juego_de_la_vida";
    } else {
        flag.className = "english";
        flag.src = "src/gb.png";
        document.getElementById("conway").href = "https://en.wikipedia.org/wiki/John_Horton_Conway";
        document.getElementById("more-info-1.5").href = "https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life";
    }
    lang = flag.className
    for(el in languages[lang]){
        document.getElementById(el).innerText = languages[lang][el];
    }
}