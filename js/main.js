let btn = document.querySelector(".button");
let ul = document.getElementById("drop");

btn.onclick = function(){
    if(ul.style.display == "block"){
        ul.style.display = "none";
    }
    else{
        ul.style.display = "block";
    }
}