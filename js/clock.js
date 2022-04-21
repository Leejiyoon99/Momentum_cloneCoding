const clock = document.querySelector("h1#clock");

//시간 표시
function  getClock(){
    clock.innerText = new Date().toLocaleTimeString();
    
}
getClock();
setInterval (getClock, 1000);
