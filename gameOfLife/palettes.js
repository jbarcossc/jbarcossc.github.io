let palettes = {
    "classic" : {
        "--main-color": "#495057",
        "--secondary-color": "#adb5bd",
        "--font-color": "#ced4da",
        "--background-color": "#212529",
        "--confirm": "#f72585",
        "--dead-color": "#ffffff",
        "--grid-color": "#2b2d42",
        "--alive-color": "#ed225d",
    },
    "dark" : {
        "--main-color": "#414141",
        "--secondary-color": "#525252",
        "--font-color": "#db3a34",
        "--background-color": "#040404",
        "--confirm": "#780116",
        "--dead-color": "#1a1a1a",
        "--grid-color": "#828282",
        "--alive-color": "#c81d25",
    },
    "violet" : {
        "--main-color": "#9D4EDD",
        "--secondary-color": "#7B2CBF",
        "--font-color": "#10002B",
        "--background-color": "#6A28AA",
        "--confirm": "#E0AAFF",
        "--dead-color": "#240046",
        "--grid-color": "#7B2CBF",
        "--alive-color": "#C77DFF",
    },
    "lucia" : {
        "--main-color": "#c87b83",
        "--secondary-color": "#9ca7ad",
        "--font-color": "#f3d5ca",
        "--background-color": "#1d1a24",
        "--confirm": "#a0a2c8",
        "--dead-color": "#dce7ed",
        "--grid-color": "#a0a2c8",
        "--alive-color": "#584467",
    }, 
    "anya" : {
        "--main-color": "#6a6897",
        "--secondary-color": "#a0a2c8",
        "--font-color": "#dce7ed",
        "--background-color": "#584467",
        "--confirm": "#a0a2c8",
        "--dead-color": "#dce7ed",
        "--grid-color": "#a0a2c8",
        "--alive-color": "#6a6897",
    }, 
    "green" : {
        "--main-color": "#95D5B2",
        "--secondary-color": "#74C69D",
        "--font-color": "#081C15",
        "--background-color": "#40916C",
        "--confirm": "#40916C",
        "--dead-color": "#D8F3DC",
        "--grid-color": "#95D5B2",
        "--alive-color": "#2D6A4F",
    },
    "earth" : {
        "--main-color": "#99582A",
        "--secondary-color": "#BB9457",
        "--font-color": "#FFE6A7",
        "--background-color": "#432818",
        "--confirm": "#432818",
        "--dead-color": "#FFE6A7",
        "--grid-color": "#99582A",
        "--alive-color": "#6F1D1B",
    },
    "baby" : {
        "--main-color": "#BDE0FE",
        "--secondary-color": "#A2D2FF",
        "--font-color": "#72A2EF",
        "--background-color": "#FFC8DD",
        "--confirm": "#82B2FF",
        "--dead-color": "#FFF8FF",
        "--grid-color": "#CDB4DB",
        "--alive-color": "#72A2EF",
    }
}

document.getElementById("classic").onclick = function(){ changePalette("classic") }
document.getElementById("dark").onclick = function(){ changePalette("dark") }
document.getElementById("violet").onclick = function(){ changePalette("violet") }
document.getElementById("lucia").onclick = function(){ changePalette("lucia") }
document.getElementById("anya").onclick = function(){ changePalette("anya") }
document.getElementById("green").onclick = function(){ changePalette("green") }
document.getElementById("earth").onclick = function(){ changePalette("earth") }
document.getElementById("baby").onclick = function(){ changePalette("baby") }

function changePalette(palette){
    for(el in palettes[palette]){
        document.documentElement.style.setProperty(el, palettes[palette][el]);
    }
    aliveColor = palettes[palette]["--alive-color"];
    deadColor = palettes[palette]["--dead-color"];
    gridColor = palettes[palette]["--grid-color"];
    document.getElementById("rule1a").src = "src/rules/" + palette + "/rule_1_a.png";
    document.getElementById("rule1b").src = "src/rules/" + palette + "/rule_1_b.png";
    document.getElementById("rule2a").src = "src/rules/" + palette + "/rule_2_ab.png";
    document.getElementById("rule2b").src = "src/rules/" + palette + "/rule_2_ab.png";
    document.getElementById("rule3a").src = "src/rules/" + palette + "/rule_3_a.png";
    document.getElementById("rule3b").src = "src/rules/" + palette + "/rule_3_b.png";
    document.getElementById("rule4a").src = "src/rules/" + palette + "/rule_4_a.png";
    document.getElementById("rule4b").src = "src/rules/" + palette + "/rule_4_b.png";
}