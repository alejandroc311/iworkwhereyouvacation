$(document).ready(function(){
    var day;
    $(".jumbo-slick").slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
    });
    $(".slick-carousel").slick({
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true
    });
    $(".calendarContainer .row .col .btn").each(function(index){
      day = index + 1;
      $(this).attr('id', "april-"+day);
      $(this).click(function(){
        alert("The day you pressed was: "+$(this).attr('id').replace(/\D/g, ""));
      });

    });
});
