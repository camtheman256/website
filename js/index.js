$(document).ready(function(){
    $("#main").animate({ top: '50px' }, 1700, 'easeInOutQuint');
        $('#resumebutton').click(function() {
          $('#alertdos').toggleClass("alert-success");
          $('#alertdos').toggleClass("alert-danger");
        });
        $('#nothingbutton').click(function() {
          alert('Told you so.');
        });
        var start = 0
        $('#panel-expand').click(function () {
            $({deg: start}).animate({deg: start+180}, {
              duration: 750,
              step: function(now) {
                $("#arrowicon").css("transform", `rotate(${now}deg)`);
              },
              easing: 'easeOutExpo'
            });
            start += 180;
            $('#card-display').slideToggle({duration: 750, easing: 'easeOutExpo'});
        });
        $("#profileimg").tooltip({
          title: "Picture, updated! 🎉",
          trigger: "focus hover",
          placement: "auto",
          container: "body"
        });
        $('[data-toggle="tooltip"]').tooltip();
});
