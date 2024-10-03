var professionspan = document.querySelector("#professions");
var professions = ["Full Stack Development." , "Data Analysis." ,"Android Development."]
var professionIndex = 0
var profession = professions[professionIndex];
var index = 1
var lastindex = profession.length + 1
function typeWriter(){
    // logic to erase text 
    if (index > lastindex && lastindex!=0) {
        lastindex--;
        professionspan.innerText = profession.slice(0,lastindex) ;
    }
    // logic to write text
    else if (lastindex!=0){
        professionspan.innerText = profession.slice(0,index);
        index++;
    }
    // logic to change text from list of professions
    else{
        professionIndex += 1 
        if (professionIndex >= professions.length ){
            professionIndex = 0
        }
        profession = professions[professionIndex];
        index = 1
        lastindex = profession.length + 1
    }
    if (index == lastindex && lastindex == (profession.length + 1)){
        setTimeout(()=>typeWriter(),1000)
    }
    else{
        setTimeout(()=>typeWriter(),100)
    }
}
typeWriter()


function navMenuOpen(){
    var isOpen = false
    var menu = document.querySelector("#nav-menu")
    var icon = document.querySelector("#menu-icon")
    icon.addEventListener("click" , changeStatus)
    function changeStatus(){
        isOpen = !(isOpen)
        menu.style.display = isOpen ? "flex" : "none";
    }
}
navMenuOpen()

console.log("Script loaded");
document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded");

    // Add console logs to check variables
    console.log(document.querySelector("#professions"));
    console.log(document.querySelector("#nav-menu"));

    // Your existing code
});