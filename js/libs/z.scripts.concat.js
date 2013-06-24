/**
 * scripts.js
 */
(function($) {

$.fn.preload = function() {
    this.each(function(){
        $('<img/>')[0].src = this;
    });
};

$(window).load(function(){
  var image = [
  {
    "title": "Adam's Peak, Sri Lanka",
    "image_src": "./img/bg_adamspeak.jpg",
    "color": "white"
  },
  {
    "title": "Kargil Highway, India",
    "image_src": "./img/bg_kargil.jpg",
    "color": "white"
  },
  {
    "title": "Moab, USA",
    "image_src": "./img/bg_moab.jpg",
    "color": "#F03838"
  },
  {
    "title": "San Francisco, USA",
    "image_src": "./img/bg_sf.jpg",
    "color": "white"
  }
];
  var random_entry = image[Math.floor(Math.random() * image.length)];

  $([random_entry.image_src]).preload();
  var url = "url('"+random_entry.image_src + "')";
  $('#top').css('background', url);
  $('.caption span').html(random_entry.title);
  $('.caption').css('color', random_entry.color);
});

$(document).ready(function(){
 $('#top').css('height',window.innerHeight * 0.7);
  $('.caption').css('top',(window.innerHeight * 0.7) - 50);
  $('#mid').css('margin-top', (window.innerHeight * 0.3) * 0.2);
  $('#intro').fadeOut('fast', function(){
    $('#top').fadeIn('slow',function(){
      $("h1").delay(250).animate({
       left: -50
      }, 500, function(){
      
        $('#mid').fadeIn('slow');
      } );
    });
  });
});

function resume(){
  $('#resume').fadeIn(750);
    $('html,body').animate({
      scrollTop: $("#resume").offset().top},
      '500', function(){
    });
}

$('#roll').click(function(){
 $('html,body').animate({
      scrollTop: $("body").offset().top},
      '500', function(){
    });
});

$("h1, #me").hover(
  function () {
    $("h1").animate({
     left: 0,
     backgroundPositionX: "+=100px"
    }, 500 );
  },
  function () {
    $("h1").animate({
     left: -50,
     backgroundPositionX: "-=100px"
    }, 500 );
  }
);
$('#me').click(function(){
  resume();
});
$('h1').click(function(){
  resume();
  });

$('h2 a').click(function(){
  event.preventDefault();
  var id = $(this).data('id');
  if (id === "captures"){
    $('#'+id).animate({left:280},500);
  }
  else{
    $('#'+id).animate({left:0},500);
  }
});


}(jQuery));
