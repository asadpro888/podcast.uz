
let batton = document.querySelector(".bttn");
let div = document.querySelector(".main");
let jj = document.querySelector(".bttn");
let btn = document.querySelector(".bttn1");
let btn1 = document.querySelector(".bttn2");



batton.addEventListener( "click", function(){
    div.classList.toggle("type")
    jj.classList.toggle("btn")
    btn.classList.remove("type")
    btn1.classList.remove("btn")
});
btn.addEventListener( "click", function(){
    div.classList.toggle("type1")
    btn.classList.toggle("btn1")
    batton.classList.remove("type")
    btn1.classList.remove("btn")
});
btn1.addEventListener( "click", function(){
    div.classList.toggle("type2")
    btn.classList.toggle("btn2")
    btn.classList.remove("type")
    batton.classList.remove("btn")
});