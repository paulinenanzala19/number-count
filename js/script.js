const button=document.querySelector(".buttons")

button.addEventListener("click", function(){
    let count=0

    if(button.classList.contains('.decrease')){
        count--
    }elseif(button.classList.contains('.increase')){
        count ++
    }
    const counter=document.querySelector("#count")
})