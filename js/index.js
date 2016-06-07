$(document).ready(function(){
        $("#main").animate({top:'100px'},1700,'easeInOutQuint');
        $('#resumebutton').click(function() {
          $('#alertdos').toggleClass("alert-success");
          $('#alertdos').toggleClass("alert-danger");
        });
        $('#nothingbutton').click(function() {
          alert('Told you so.');
        });
});
