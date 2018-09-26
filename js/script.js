

$(document).ready(function () {

/*     $('#simple-menu').sidr();
 */
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $(this).toggleClass('active');
    });

    $("#longmenu").hover(function () {
        $("#here").addClass("d-flex");
    }, function () {
        $("#here").removeClass("d-flex");

    });
    $(".scrollup").click(function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

    var $heightz = $(window).scrollTop();
    if ($heightz > 0) {
        $('.menu').addClass("fixedheader");
        $(".scrollup").removeClass("d-none");
    }

    $(window).scroll(function () {
        var $height = $(window).scrollTop();
        if ($height > 0) {
            $("#top-header").addClass("d-none");
            $('.menu').addClass("fixedheader");
            $(".scrollup").removeClass("d-none");
            $("#search").addClass("fixsearch");



        } else {
            if ($("#top-header").hasClass("d-none")) {
                $("#top-header").removeClass("d-none");
                $(".menu").removeClass("fixedheader");
                $('.scrollup').addClass("d-none");
                $("#search").removeClass("fixsearch");

            }

        }
    });




    var $grid = $('.myverystrangediv').isotope({
        // options
        itemSelector: '.image-grid',
        layoutMode: 'fitRows',

    });
    $('.stopa').on('click', function (e) {
        e.preventDefault;
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });


    });



    $(".searchactivate").click(function () {
        console.log("it works");
        /*   $("#search").addClass("searchfadein")  ;  */
        $("#search").fadeToggle("slow");
    });




    $("#testimonial_slider").owlCarousel({
        nav: true,
        navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
        margin: 15,
        loop: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: true,
            },
            1000: {
                items: 3,
                nav: true,

            }
        }
    });

    $("#latestnews_slider").owlCarousel({
        nav: true,
        navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
        margin: 15,
        loop: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: true
            },
            1000: {
                items: 2,
                nav: true,

            }
        }
    });



    $("#upcoming-slider").owlCarousel({
        nav: true,
        navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
        margin: 15,
        loop: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: true
            },
            1000: {
                items: 2,
                nav: true,

            }
        }
    });



});


