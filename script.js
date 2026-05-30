const toggle = document.getElementById("modeToggle");

toggle.addEventListener("click",()=>{
    document.body.classList.toggle("dark");
});

function filter(type){
    let cards = document.querySelectorAll(".card");

    cards.forEach(card=>{
        if(type==="all"){
            card.computedStyleMap.display = "block";
        } else{
            card.style.display = card.classList.contains(type) ?"block" : "none";
        }
    });
}