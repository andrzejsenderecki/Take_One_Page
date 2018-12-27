require('../scss/partials/_main.scss');
require('../scss/partials/_header.scss');
require('../scss/partials/_phoneSection.scss');
require('../scss/partials/_category.scss');

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
    const $headerContent = $('.header-content');

    $document.on('scroll', () => {
        const $docScroll = $document.scrollTop();
        const $headerHeight = $header.outerHeight();
        $header.css('opacity', 1 - $docScroll/$headerHeight);
        $headerLogo.css('opacity', 1 - $docScroll/$headerHeight);
        $headerContent.css('opacity', 1 - $docScroll/$headerHeight);
    });

    // jQuery scroll to sections

    const $phoneSection = $('.phone-section-container');
    const $categorySection = $('.category-section-container');

    $('#about').on('click', () => {

        menuBtn.classList.toggle('header-menu-icon-active');
        menuContent.classList.toggle('header-menu-content-invisible');

        $('html').animate({
            scrollTop: $phoneSection.offset().top
        }, 1500);

    });

    $('#products').on('click', () => {

        menuBtn.classList.toggle('header-menu-icon-active');
        menuContent.classList.toggle('header-menu-content-invisible');

        $('html').animate({
            scrollTop: $categorySection.offset().top,
        }, 2000);
    });

});
