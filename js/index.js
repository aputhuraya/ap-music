function deferVideo() {
  //defer html5 video loading
  $("video source").each(function() {
    var sourceFile = $(this).attr("data-src");
    $(this).attr("src", sourceFile);
    var video = this.parentElement;
    video.load();
    // uncomment if video is not autoplay
  });
  $(window).scroll(function() {
    if ($(window).scrollTop() >= $(window).height() * 0.55) {
      $(".navbar").css("background-color", "black");
      $(".navbar").css("opacity", "0.9");
      $(".navbar .row div").css("opacity", "0.9");
      $(".navbar .row div").hover(
        function() {
          $(this).css("opacity", "1");
        },
        function() {
          $(this).css("opacity", "0.9");
        }
      );
    } else {
      $(".navbar").css("background-color", "transparent");
      $(".navbar .row div").css("opacity", "0.5");
      $(".navbar .row div").css("transition", "opacity 0.6s");
      $(".navbar .row div").hover(
        function() {
          $(this).css("opacity", "1");
        },
        function() {
          $(this).css("opacity", "0.5");
        }
      );
    }
  });
}
window.onload = deferVideo;
