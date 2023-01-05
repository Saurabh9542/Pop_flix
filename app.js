const arrows = document.querySelectorAll(".arrow");

const movieLists = document.querySelectorAll(".movie-list");

const ball = document.querySelector(".toggle-ball");

const items = document.querySelectorAll(".container, .movie-list-title, .navbar-container, .sidebar, .left-menu-class, .toggle");

arrows.forEach((arrow, i)=>{
    const itemNumber = movieLists[i].querySelectorAll("img").length;
    let clickCounter =0;
    arrow.addEventListener("click",()=>{
        const ratio = Math.floor(window.innerWidth / 270);
        clickCounter++;
        if(itemNumber - (4+clickCounter) + (4-ratio) >=0){
            movieLists[i].style.transform = `translateX(${
                movieLists[i].computedStyleMap().get("transform")[0].x.value
            -300}px)`;
        }else{
            movieLists[i].style.transform = "translateX(0)";
            clickCounter = 0;
        }
    });
});

ball.addEventListener("click", ()=>{
    items.forEach(item=>{
        item.classList.toggle("active");
        item.style.transition = "1s all ease-in-out";
    })
    ball.classList.toggle("active");
})
