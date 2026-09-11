function headerHeight() {
    var hH = $('.header').outerHeight();
    $('body').css('padding-top', hH);
}
headerHeight();
$(window).on('resize', function(){
    headerHeight();
});
