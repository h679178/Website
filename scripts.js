function changeColor() {
    for (let header of document.getElementsByClassName("header1")) {
        header.classList.toggle("header1alt");
    }
    //console.log(document.getElementById("header").style.color);
}

function changeItems() {
    for (let item of document.getElementsByClassName("item")) {
        item.classList.toggle("header1alt");
    }
}

function darkMode() {
    var element = document.body;
    element.classList.toggle("darkmode");
    
    element = document.getElementsByClassName("header1");
    for (let elm of element){
        elm.classList.toggle("darkmode");
        }
        
    element = document.getElementsByClassName("header2");
    for (let elm of element){
        elm.classList.toggle("darkmode");
        }
        
    element = document.getElementsByClassName("item");
    for (let elm of element){
        elm.classList.toggle("darkmode");
        }
        
    element = document.getElementsByClassName("intro");
    for (let elm of element){
        elm.classList.toggle("darkmode");
        }
        
    element = document.getElementsByClassName("para");
    for (let elm of element){
        elm.classList.toggle("darkmode");
        }
}