
let btn1 =document.querySelector(".btn1");
let btn2 =document.querySelector(".btn2");
let list =document.querySelector("ul");


btn1.addEventListener("click",()=>{
    list.style.transform="translateX(0%)scaleX(1)";
    btn2.style.display="inline-block";
    btn1.style.display="none"
});

btn2.addEventListener("click",()=>{
    list.style.transform="translateX(100%)scaleX(0)";
    btn2.style.display="none";
    btn1.style.display="inline-block"
})



// banner slider
$(".banner-slider").slick({
    nextArrow:'<i class="fa-solid fa-angle-right next-arrow"></i>',
    prevArrow:'<i class="fa-solid fa-angle-left prev-arrow"></i>',
    infinite: true,
    fade: true,
    cssEase: 'linear',
    // autoplay: true,
    autoplaySpeed: 2000,
});

//Gallery animation js
let gallerys = new SimpleLightbox('.gallerys a',{
    
});
const navbar =document.querySelector("nav")
//windows scroll
window.addEventListener("scroll",()=>{
    let scroll= window.scrollY;
    if(scroll>50){
        navbar.style.background="#222222"
    }else{
        navbar.style.background="transparent"
    }
})
