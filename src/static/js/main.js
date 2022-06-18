let mainHeader = document.querySelector(".main-header");
let navbar = document.querySelector(".navbar");
// scroll To top button
let topButton = document.createElement("button");
let topButtonIcon = `<i class="fas fa-arrow-up"></i>`;
topButton.innerHTML = topButtonIcon;
topButton.className = "btn topBtn";
topButton.setAttribute("onclick", "scroll_now()");
document.body.appendChild(topButton);

window.addEventListener("scroll", function () {
    navbar.classList.toggle("fixed", window.scrollY > mainHeader.scrollHeight);

    topButton.classList.toggle("topBtn-block", window.scrollY > 600);
});

function scroll_now() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}

// start active class to links

const activePage = window.location.pathname;
const navLinks = document.querySelectorAll(".navbar-nav a").forEach((link) => {
    if (link.href.includes(`${activePage}`)) {
        link.classList.add("active");
        
    }
});


// start landing 

let landingBoxs = document.querySelectorAll(".landing .item");
let landingImgs = document.querySelectorAll(".landing .item img");


landingImgs.forEach(i => {
    // console.log(i.src);
    i.style.display = "none";
    i.parentElement.style.backgroundImage = `url(${i.src})`;


});

// start puriture-menu
let puritureMenu = document.querySelector(".puriture-menu");

let puritureOpen = document.getElementById("puritureOpen");

let puritureOpenIcon = document.querySelector("#puritureOpen i");

if(puritureOpen != null){

    
    puritureOpen.addEventListener("click", function (e) {
        puritureMenu.classList.toggle("puriture-menu-open");
        puritureOpenIcon.classList.toggle("fa-spin");
    }) 
    
// calaneder
dycalendar.draw({
    target: '#dycalender',
    type: 'month',
    dayformat: 'full',
    monthformat: 'full',
    highlighttargetdate: true,
    prevnextbutton: 'show'
})

}

let openBtn = document.querySelectorAll(".open-btn");

openBtn.forEach((btn) => {
    // console.log(btn.parentElement.parentElement);
    btn.onclick = function (e) {
        // console.log(this);
        this.parentElement.parentElement.classList.toggle("close");
    };
});






// start color option
let colorOption = document.querySelector(".option-box");
let colorOptionOpen = document.getElementById("OptionOpen");

if(colorOptionOpen != null){    
    colorOptionOpen.addEventListener("click", function (el) {
        colorOption.classList.toggle("open");
    })
}

let colorList = document.querySelectorAll(".color_list li");
colorList.forEach(li => {
    li.style.backgroundColor = `${li.dataset.color}`;
    li.addEventListener("click", (e) => {

        document.documentElement.style.setProperty(
            "--main-color",
            e.target.dataset.color
        );


        colorList.forEach((eo) => {
            eo.classList.remove("active_color");
        });

        e.target.classList.add("active_color");
    });
})

let color1Inpt = document.getElementById("color1Inpt");
let color2Inpt = document.getElementById("color2Inpt");
if(color1Inpt != null){
    
    color1Inpt.oninput = function (e) {
        
        document.documentElement.style.setProperty(
            "--main-color",
            color1Inpt.value
            );
            
        };
    
}

    if(color2Inpt != null){
        
    color2Inpt.oninput = function (e) {
    
        document.documentElement.style.setProperty(
            "--main-bg",
            color2Inpt.value
        );
    
    };
    
    }



// start filter function

let filterBtns = document.querySelectorAll(".filter-section .btn-box button");
let filterImg = document.querySelectorAll(".filter-section .img-box");

function filter(btn, img) {

    btn.forEach(b => {

        b.addEventListener("click", e => {
            btn.forEach((eo) => {
                eo.classList.remove("active-btn");
            })
            b.classList.add("active-btn");
        })
    })





    for (i = 0; i < btn.length; i++) {

        console.log(btn[i]);
        btn[i].addEventListener("click", (e) => {

            const filter = e.target.dataset.filter;

            img.forEach((proudct) => {

                if (filter == "all") {
                    proudct.style.display = "block ";
                    proudct.classList.remove("opNone");
                    proudct.classList.add("dis-block");

                }
                else {

                    if (proudct.classList.contains(filter)) {
                        proudct.style.display = "block ";

                        proudct.classList.remove("opNone");

                        proudct.classList.add("dis-block");
                    }
                    else {

                        proudct.classList.add("opNone");

                        proudct.classList.remove("dis-block");

                        proudct.style.display = "none";

                    }

                }

            })

        })

    }

}
filter(filterBtns, filterImg)



$('.owl-landing').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    responsive: {
        0: {
            items: 1,
        }
    }
});


$('#owl-section3').owlCarousel({
    loop: true,
    margin: 0,
    repeat: true,
    autoplay: true,
    autoWidth: true,
    stagePadding: 50,

    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        400: {
            items: 2,

        },
        600: {
            items: 3,
            nav: false
        },
        1000: {
            items: 5,
            nav: true,
            loop: true
        }
    }
});


$('#owl-section5').owlCarousel({
    loop: true,
    margin: 0,
    repeat: true,
    autoplay: true,

    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        400: {
            items: 2,

        },
        767: {
            items: 3,
            nav: false
        },
        1000: {
            items: 4,
            nav: true,
            loop: true
        }
    }
});
$('#lead').owlCarousel({
    loop: true,
    margin: 20,
    repeat: true,
    autoplay: true,

    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        }
    }
});

