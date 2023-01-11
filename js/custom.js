(function ($) {

    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });

    $(window).scroll(function() {
      if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
          } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
          }
    });


})(jQuery);

twttr.widgets.createTimeline(
  {
    sourceType: "profile",
    screenName: "colbylibrary"
  },
  document.getElementById("container")
);