
/*const btns = document.querySelectorAll(".btn");
const screen = document.querySelector(".screen");
const equalBtn = document.querySelector(".btn-equal");
const backSpaceBtn = document.querySelector(".btn-backSpace");
const clearBtn = document.querySelector(".btn-clear");
const ceBtn = document.querySelector(".btn-ce");
for (let i =0; i< btns.length;i++){ btns[i].addEventListener("click",function(){ let
    number=btns[i].getAttribute("data-num"); screen.value +=number }) } equalBtn.addEventListener("click", function(){
    let value=eval(screen.value); screen.value=value; })
    
     ceBtn.addEventListener("click", ()=>{
    location.reload();
    })

    clearBtn.addEventListener("click", ()=>{
    screen.value = "";
    })
    
    backSpaceBtn.addEventListener("click", ()=>{

    screen.value = screen.value.slice(0,screen.value.length-1);
    screen.innerHTML = screen.value;
    })
    */


const btns = document.querySelectorAll(".btn");
const screen = document.querySelector(".screen");
const equalBtn = document.querySelector(".btn-equal");
const backSpaceBtn = document.querySelector(".btn-backSpace");
const clearBtn = document.querySelector(".btn-clear");
const ceBtn = document.querySelector(".btn-ce");
for (let i =0; i< btns.length;i++){ btns[i].addEventListener("click",function(){ let
    number=btns[i].getAttribute("data-num"); screen.value +=number }) } equalBtn.addEventListener("click", function(){
    let value=eval(screen.value); screen.value=value; })
    
     ceBtn.addEventListener("click", ()=>{
    location.reload();
    })

    clearBtn.addEventListener("click", ()=>{
    screen.value = "";
    })
    
    backSpaceBtn.addEventListener("click", ()=>{

    screen.value = screen.value.slice(0,screen.value.length-1);
    screen.innerHTML = screen.value;
    })

