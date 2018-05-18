$(document).ready(function(){
    $("#main").animate({ top: '100px' }, 1700, 'easeInOutQuint');
        $('#resumebutton').click(function() {
          $('#alertdos').toggleClass("alert-success");
          $('#alertdos').toggleClass("alert-danger");
        });
        $('#nothingbutton').click(function() {
          alert('Told you so.');
        });
        $('#panel-expand').click(function () {
            $('#arrowicon').toggleClass("fa-arrow-circle-up");
            $('#arrowicon').toggleClass("fa-arrow-circle-down");
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
