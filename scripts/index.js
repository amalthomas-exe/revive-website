$(".testimonial_slider_area").owlCarousel({
    autoplay: true,
    slideSpeed: 300,
    items:3,
    nav:true,
    navText:["<i class=\"fa-solid fa-arrow-left\"></i>","<i class='fa fa-arrow-right'></i>"],
    margin: 30,
    dots: false,
    center:true,
    dots:true,
    dotClass:"dot",
    dotsClass:"dots-container",
    rewind:true,
    loop:true,
    responsive:{
        320:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        }
    }
})
