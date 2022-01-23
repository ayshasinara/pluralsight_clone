function showAns(i){
    let controlArrow = document.getElementsByClassName("que-arrow");
    let ans  = document.getElementsByClassName("ans");
    controlArrow[i].children[0].classList.toggle("fa-chevron-up");
    ans[i].classList.toggle("show");
}
let slide = document.getElementById("slide-control");
slide.children[0].style.backgroundColor = "#2d2d2d";


function showPlans(i){
    let ind = document.getElementById("individual-plans");
    let team = document.getElementById("team-plans");
    let slide = document.getElementById("slide-control");
    if(i=='individual'){
        console.log(slide.children[0]);
        ind.style.display = "block";
        team.style.display = "none";
        slide.children[0].style.backgroundColor = "#2d2d2d";
        slide.children[1].style.backgroundColor = "transparent";
    }else
    {
        ind.style.display = "none";
        team.style.display = "block";
        slide.children[0].style.backgroundColor = "transparent";
        slide.children[1].style.backgroundColor = "#2d2d2d";
    }
}

function changeRates(){
    let elms = document.getElementsByClassName("ind-rates");
    if(elms[0].innerText=="1,499"){
        elms[0].innerText = "12,299";
        elms[1].innerText = "18,399";
    }else{
        elms[0].innerText = "1,499";
        elms[1].innerText = "2,299";
    }
}