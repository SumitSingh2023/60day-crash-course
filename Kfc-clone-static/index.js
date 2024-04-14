var count=1;
setInterval(function(){
    document.getElementById('radio'+ count).checked=true
    count++
    if(count > 3){
        count=1

    }
    
},6000)

const initSlider =()=>{
    const imageList= document.querySelector(".offer-list")
    const slideButtons = document.querySelectorAll(".offer-card-crowsel .slide-button")

    const sliderScrollbar= document.querySelector(".offer-card-crowsel .slider-scrollbar")

    const scrollbarThumb = document.querySelector(".scrollbar-thumb")

    const maxScrollLeft = imageList.scrollWidth-imageList.clientWidth



    slideButtons.forEach(button=>{
        button.addEventListener("click",()=>{
            const direction = button.id === "prev-slide" ? -0.35 : 0.35
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({left:scrollAmount,behavior:"smooth"})
        })
    })

    const handleSlideButton=()=>{
        slideButtons[0].style.display=imageList.scrollLeft <=0 ? "none":"block"
        slideButtons[1].style.display=imageList.scrollLeft >=maxScrollLeft ? "none":"block"

    }

    const updateScrollThumbPosition=()=>{
        const scrollPosition = imageList.scrollLeft;
        const thumbPosition= (scrollPosition/maxScrollLeft)*(sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
        scrollbarThumb.style.left = `${thumbPosition}px`

    }

    imageList.addEventListener("scroll",()=>{
        handleSlideButton()
        updateScrollThumbPosition()
    })
}

initSlider()


let signInbtn=document.getElementById("signin")
signInbtn.addEventListener('click',()=>{
    
})