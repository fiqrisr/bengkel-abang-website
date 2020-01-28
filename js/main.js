$(document).ready(() => {
    $(".photos").slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        arrows: false,
        autoplay: true
    });

    $(".gallery__list").slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        arrows: false,
        autoplay: true
    });
});

$(function() {
    $(".toggle").on("click", function() {
        if ($(".nav__item").hasClass("active")) {
            $(".nav__item").removeClass("active");
            $(this)
                .find("a")
                .html("<i class='fas fa-bars'></i>");
        } else {
            $(".nav__item").addClass("active");
            $(this)
                .find("a")
                .html("<i class='fas fa-times'></i>");
        }
    });
});

$("a").on("click", function(event) {
    if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;

        $("html, body").animate(
            {
                scrollTop: $(hash).offset().top
            },
            800,
            function() {
                window.location.hash = hash;
            }
        );
    } // End if
});
