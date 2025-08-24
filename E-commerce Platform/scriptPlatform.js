const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const clz = document.getElementById("close");

bar.addEventListener("click", function () {
  nav.classList.add("active");
});

clz.addEventListener("click", function () {
  nav.classList.add("notActive");
});


let mainImg = document.getElementById("MainImg");
let smallImg = document.getElementsByClassName("small-img");

smallImg[0].addEventListener("click",function(){
    mainImg.src = smallImg[0].src;
})
smallImg[1].addEventListener("click",function(){
    mainImg.src = smallImg[1].src;
})
smallImg[2].addEventListener("click",function(){
    mainImg.src = smallImg[2].src;
})
smallImg[3].addEventListener("click",function(){
    mainImg.src = smallImg[3].src;
})
