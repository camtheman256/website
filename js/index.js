$(document).ready(function(){
        $("#main").animate({top:'100px'},1700,'easeInOutQuint');
        $('.btn-danger').click(function() {
          $('#alertdos').toggleClass("alert-success");
          $('#alertdos').toggleClass("alert-danger");
        });
        $('.btn-default').click(function() {
          alert('Told you so.');
        })
});
