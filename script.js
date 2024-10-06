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


var isOpen = false
var menu = document.querySelector("#nav-menu")
function navMenuOpen(){
    var icon = document.querySelector("#menu-icon")
    icon.addEventListener("click" , changeStatus)
    function changeStatus(){
        isOpen = !(isOpen)
        menu.style.display = isOpen ? "flex" : "none";
    }
}
navMenuOpen()

function openResumePage() {
    window.location.href = 'resume.html';
}

document.getElementById("about-link").addEventListener("click", function () {
    gsap.to(window, { scrollTo: {y: "#about-content", offsetY: 100, autoKill: true}})
});
document.getElementById("skills-link").addEventListener("click", function () {
    gsap.to(window, { scrollTo: {y: "#skills-content", offsetY: 100, autoKill: true}})
});
document.getElementById("projects-link").addEventListener("click", function () {
    gsap.to(window, { scrollTo: {y: "#projects-content", offsetY: 100, autoKill: true}})
});
document.getElementById("mobile-about-link").addEventListener("click", function () {
    isOpen = !{isOpen}
    menu.style.display = isOpen ? "flex" : "none";
    gsap.to(window, { scrollTo: {y: "#about-content", offsetY: 100, autoKill: true}})
});
document.getElementById("mobile-skills-link").addEventListener("click", function () {
    isOpen = !{isOpen}
    menu.style.display = isOpen ? "flex" : "none";
    console.log(isOpen);
    
    gsap.to(window, { scrollTo: {y: "#skills-content", offsetY: 100, autoKill: true}})
});
document.getElementById("mobile-projects-link").addEventListener("click", function () {
    isOpen = !{isOpen}
    menu.style.display = isOpen ? "flex" : "none";
    console.log(isOpen);
    
    gsap.to(window, { scrollTo: {y: "#projects-content", offsetY: 100, autoKill: true}})
});

