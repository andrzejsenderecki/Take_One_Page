require('../scss/partials/_main.scss');
require('../scss/partials/_header.scss');
require('../scss/partials/_phoneSection.scss');

document.addEventListener('DOMContentLoaded', () => {

    const menuBtn = document.querySelector('.header-menu-icon');
    const menuContent = document.querySelector('.header-menu-content');

    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('header-menu-icon-active');
        menuContent.classList.toggle('header-menu-content-invisible');
    });

    // jQuery - header transition effect

    const $document = $(document);
    const $header = $('.header-bg');
    const $main = $('main');
    const $headerLogo = $('.header-logo');

    $document.on('scroll', () => {
        const $docScroll = $document.scrollTop();
        const $headerHeight = $header.outerHeight();
        $header.css('opacity', 1 - $docScroll/$headerHeight);
        $headerLogo.css('opacity', 1 - $docScroll/$headerHeight);
    });

    // jQuery scroll to sections

    const $aboutLink = $('#about');

    $('#about').on('click', function() {
        $('html').animate({
            scrollTop: $main.offset().top
        }, 1000);
        menuBtn.classList.toggle('header-menu-icon-active');
        menuContent.classList.toggle('header-menu-content-invisible');
    });

});
