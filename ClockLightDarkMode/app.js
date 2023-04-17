let timecurrent = document.querySelector(".time")
let btntoggle = document.querySelector(".btntoggle")


function setTime(){
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    timecurrent.innerHTML=`${hours < 10 ? `0${hours}` : hours} : 
    ${minutes < 10 ? `0${minutes}` : minutes} : 
    ${seconds < 10 ? `0${seconds}` : seconds}`;
}

btntoggle.addEventListener("click",(e)=>{
    let html = document.querySelector("body");
    let themeIcon = document.getElementById("moon");
    
    if(html.classList.contains("dark")){
        html.classList.remove("dark");
        themeIcon.classList.replace("bi-brightness-high", "bi-moon-stars");
    }else{
        html.classList.add("dark")
        themeIcon.classList.replace("bi-moon-stars", "bi-brightness-high");
    }
})
// setTime()
setInterval(setTime,1000)