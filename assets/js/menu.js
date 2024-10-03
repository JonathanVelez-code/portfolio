'use strict';

//Anchors
$(function () {
    $('a[href^="#"]').click(function () {
        var target = $(this).attr('href');
        $('html, body').animate({ scrollTop: $(target).offset().top - 50 }, 800);
        return false;
    });
});

//Fixed-top menu
function fixedHeader() {
    var ww = $(window).scrollTop();
    if (ww > 0) {
        $('.menu').addClass('menu--active');
        $('.mobile-menu').addClass('mobile-menu--active');
    } else {
        $('.menu').removeClass('menu--active');
        $('.mobile-menu').removeClass('mobile-menu--active');
    }
}
fixedHeader();
$(window).on('scroll', function () {
    fixedHeader();
});

document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', function (e) {
        // Check if the clicked element is the <a> tag
        if (e.target.tagName.toLowerCase() === 'a') {
            return; // Don't execute the handler if <a> tag is clicked
        }
        const url = this.getAttribute('data-href');
        e.stopPropagation(); //prevents bubbling events
        window.location.href = url;
    });
});
