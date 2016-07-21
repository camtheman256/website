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
            $('.panel-body').slideToggle({duration: 750, easing: 'easeOutExpo'});
        })
        $("#bloginfo").popover({
            animation: true,
            content: "A blog by Cameron Kleiman about various problems encountered by nerds on an impressively frequent basis, but also other things",
            title: "About Nerd Problems",
            trigger: "focus hover",
            placement: "auto",
            container: "body"
        });
});
