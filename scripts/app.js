require('../scss/partials/_main.scss');
require('../scss/partials/_header.scss');
require('../scss/partials/_phoneSection.scss');
require('../scss/partials/_category.scss');
require('../scss/partials/_details.scss');
require('../scss/partials/_quality.scss');
require('../scss/partials/_whyWe.scss');
require('../scss/partials/_buy.scss');

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
    const $phoneSectionOffsetTop = $('.phone-section-container').offset().top;

    $document.on('scroll', () => {
        const $docScroll = $document.scrollTop();
        const $headerHeight = $header.outerHeight();
        $header.css('opacity', 1 - $docScroll/$headerHeight);
        $headerLogo.css('opacity', 1 - $docScroll/$headerHeight);
        $headerContent.css('opacity', 1 - $docScroll/$headerHeight);
        if($phoneSectionOffsetTop <= $docScroll) {
            $headerLogo.css('display','none');
            $headerContent.css('display','none');
        } else {
            $headerLogo.css('display','block');
            $headerContent.css('display','block');
        }
    });

    // jQuery - quality section transition effects

    $(window).on('scroll', () => {
        const $windowScroll = $(window).scrollTop();
        const $heightWindow = $('.quality-section-container').outerHeight();
        const $qualitySection = $('.quality-section-container');
        const $qualitySectionOffsetTop = $('.quality-section-container').offset().top;

        if($windowScroll > $qualitySectionOffsetTop+250) {
            let $counter = $windowScroll - $qualitySectionOffsetTop-250;
            $qualitySection.css('opacity', 1 - $counter/$heightWindow*1.7);
        }
    });

    // jQuery scroll to sections

    const $phoneSection = $('.phone-section-container');
    const $categorySection = $('.category-section-container');
    const $featuresSection = $('.details-section-container');
    const $qualitySection = $('.quality-section-container');
    const $whyWeSection = $('.why-we-section-container');
    const $buySection = $('.buy-section-container');

    $('#about').on('click', () => {

        menuBtn.classList.toggle('header-menu-icon-active');
        menuContent.classList.toggle('header-menu-content-invisible');

        $('html').animate({
            scrollTop: $phoneSection.offset().top
        }, 2000);

    });

    $('#products').on('click', () => {

        menuBtn.classList.toggle('header-menu-icon-active');
        menuContent.classList.toggle('header-menu-content-invisible');

        $('html').animate({
            scrollTop: $categorySection.offset().top
        }, 2000);
    });

    $('#details').on('click', () => {

        menuBtn.classList.toggle('header-menu-icon-active');
        menuContent.classList.toggle('header-menu-content-invisible');

        $('html').animate({
            scrollTop: $featuresSection.offset().top
        },2000);
    });

    $('#quality').on('click', () => {

        menuBtn.classList.toggle('header-menu-icon-active');
        menuContent.classList.toggle('header-menu-content-invisible');

        $('html').animate({
            scrollTop: $qualitySection.offset().top
        }, 2000);
    });

    $('#why-we').on('click', () => {

        menuBtn.classList.toggle('header-menu-icon-active');
        menuContent.classList.toggle('header-menu-content-invisible');

        $('html').animate({
            scrollTop: $whyWeSection.offset().top
        }, 2000);
    });

    $('#buy').on('click', () => {

        menuBtn.classList.toggle('header-menu-icon-active');
        menuContent.classList.toggle('header-menu-content-invisible');

        $('html').animate({
            scrollTop: $buySection.offset().top
        }, 2000);
    });

});
