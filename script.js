const collapse=document.getElementById("collapse");
let activation= document.getElementById("active");
let active=false;

activation.addEventListener("click",()=>{
if(active===false){
    activation.src="./assets/images/icon-minus.svg";
    collapse.classList.add("show");
    active=true
}
else{
    activation.src="./assets/images/icon-plus.svg";
    collapse.classList.remove("show");
    active=false;

}

})