$(document).ready(function() {
  moveBG();
})

$(window).resize(function() {
  moveBG();
})

function moveBG() {
  var inW = $(window).width();
  var inH = $(window).height();
  var startbtnH = $('.startbtn').height();
  var startbtnW = $('.startbtn').width();
  var verticalPos = inH / 2 - startbtnH / 2;
  var horizenPos = inW / 2 - startbtnW / 2;

  $('.openwrapper').css({
    width: inW,
    height: inH
  });

  $('.startbtn').css({
    'position': 'absolute',
    'top': verticalPos,
    'left': horizenPos
  });

  $('.wrapper').hide();

  $('.startbtn').click(function() {

    $(this).fadeOut(1300, function() {

      $('.cover-topleft').css({
        'border-top': inH + 'px solid #2d2d2d',
        'border-right': inW + 'px solid transparent'
      }).delay(300).animate({
        'margin-left': inW * -1 + 'px'
      }, 2700);

      $('.cover-bottomright').css({
        'border-bottom': inH + 'px solid #2d2d2d',
        'border-left': inW + 'px solid transparent'
      }).delay(300).animate({
        'margin-left': inW + 'px'
      }, 2700);

      $('.openwrapper').fadeOut(2800, function() {
        $('.wrapper').fadeIn(800);
      });
    });
  })
  console.log('start Width: ', inW);
  console.log('start Height: ', inH);
}
