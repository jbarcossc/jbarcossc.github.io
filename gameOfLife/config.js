let configStatus = false;

function toggleConfig(){
    let sideBar = document.querySelector(".config-list");
    if (configStatus){
       sideBar.style.visibility = "visible";
       (screen.width > 600) ? sideBar.style.width = "300px" : sideBar.style.width = "85vw";
       (screen.width > 600) ? sideBar.style.right = "29px" : sideBar.style.right = "auto";
       sideBar.style.padding = "20px";
       sideBar.style.opacity = "100%";
    } else {
        sideBar.style.visibility = "hidden";
        sideBar.style.width = "0px";
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