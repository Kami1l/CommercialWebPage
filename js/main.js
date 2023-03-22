$(document).ready(function () {
    scroll();
    select();
    responsClassAdd();
})

const scroll = () => {
    let backButton = $(".backBtn");
    $(document).on('scroll', function () {
        if (backButton.offset().top >= 1500) {
            backButton
                .css('opacity', "0.5")
                .css('right', "30px");
        } else if (backButton.offset().top < 1500) {
            backButton
                .css('opacity', "0")
                .css('right', '-50px');
        }
    })
    backButton.on('click', function () {
        $(document).scrollTop(0)
    })

}

const select = () => {
    let belt = $(".belt");
    $(".navBar__item").on("mouseover", function () {
        let liMarg = parseInt($(this).css("margin-left"));
        let size = $(this).css("width");
        let liPos = $(this).position().left + liMarg;
        belt.css("left", liPos);
        belt.css("width", size);
        // console.log(liPos, belt.position().left, liMarg, size);
    })
}
$(".burgerMenu").on("click", function () {
    $(".navBar").toggleClass("navBar--active");
    $(".burgerMenu").toggleClass("burgerMenu--active");
    document.querySelectorAll(".navBar__item").forEach((el, i) => {
        gsap.to(el, {
            duration: 0,
            ease: "none",
            opacity: 1,
            x: 300
        });
    });
    if (this.classList[2] == "burgerMenu--active") {
        document.querySelectorAll(".navBar__item").forEach((el, i) => {
            gsap.to(el, {
                duration: 0.2,
                ease: "none",
                opacity: 1,
                x: 0,
                delay: i * 0.06
            });
        });

    } else {
        document.querySelectorAll(".navBar__item").forEach((el, i) => {
            gsap.to(el, {
                duration: 0,
                ease: "none",
                opacity: 1,
                x: 300
            });
        });
    }
    console.log("e")
})

const responsClassAdd = () => {
    let windowWidth = window.innerWidth;
    if (windowWidth >= 1024) {
        // $("#content_reverse").addClass("page__content--reverse");
        // $("content_row").addClass("page__content--row");
        console.log($("#content_reverse"));
    }
}