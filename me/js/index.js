$(document).ready(function(){
  $("#main").animate({ top: '50px' }, 1700, 'easeInOutQuint');
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
    title: "The iconic profile pic",
    trigger: "focus hover",
    placement: "auto",
    container: "body"
  });
  $('[data-toggle="tooltip"]').tooltip();
  var dark_enabled = window.localStorage.getItem("dark_enabled") == 'true' || false;
  var keyhist = [];
  
  $("input[name='dark_mode']").change(toggle_dark_theme);
  if(!dark_enabled) {
    $(document).on("keyup", function(e) {
      keyhist.push(e.which);
      if(keyhist.join("-").includes("38-38-40-40-37-39-37-39-66-65-13")) {
        enable_dark_theme();
        $("#dark_mode").find(".btn-dark").button('toggle');
        alert("Congrats! Enjoy dark mode.");
        keyhist = [];
      }
    });
  }
  else {
    enable_dark_theme();
    var dark_set = window.localStorage.getItem("dark_set") == 'true';
    if(dark_set) $("#dark_mode").find(".btn-dark").button('toggle');
  }
});


function enable_dark_theme() {
  window.localStorage.setItem("dark_enabled", true);
  $("#special_card_title").text("Dark mode");
  $("#lame_card_text").hide();
  $(".special_card_stuff").show();
}

var dark_set = false;
function toggle_dark_theme() {
  dark_set = dark_set ? false : true;
  window.localStorage.setItem("dark_set", dark_set);
  $("a").not(".btn").toggleClass("text-info");
  var current = $("body").css("background-color");
  $("body").css("background-color", (current == "rgb(0, 0, 0)" ? "white" : "black"));
  $(".card .updates").toggleClass("bg-dark");
  $("#card-deck-updates").toggleClass("bg-dark");
  $("#big-frame").toggleClass("text-white bg-dark");
  $("#signin").toggleClass("bg-dark");
}
