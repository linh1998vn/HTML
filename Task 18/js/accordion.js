$('.accordion').on('click', '.accordion-control', funnction(e){
    e.preventDefault();
    $(this)
        .next('.accordion-panel')
        .not(':animated')
        .slideToggle();
});