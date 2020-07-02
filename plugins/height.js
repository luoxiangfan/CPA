import $ from 'jquery';
if (process && process.client) {
  $(function () {
    const footerHeight = $('.js-site-footer').height();
    const headerHeight = $('.js-site-header').height();
    const viewportHeight = $(window).height();
    $('.js-site-main').css('min-height', viewportHeight - footerHeight - headerHeight);
  })
}
