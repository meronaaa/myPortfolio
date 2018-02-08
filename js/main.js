$(document).ready(function() {
  // moveBG();
  wrapperControl();
  navControl();

})

$(window).resize(function() {
  // moveBG();
  wrapperControl();
  navControl();
})


function navControl() {
  $(window).scroll(function() {
    //스크롤위치
    var scrollPOS = $(this).scrollTop();
    //헤더높이
    var headerH = $('nav').height();
    console.log(headerH);
    var fixedLocate = $('nav').prev().height();

    console.log(scrollPOS,fixedLocate);
    if (scrollPOS + headerH> fixedLocate) {
        $('nav').css({ position: 'fixed', top: '0'});
        $('.opacity').css({
            background: 'linear-gradient(to right, rgba(173, 173, 173, 0.45), rgba(48, 48, 48, 0.57))'
        })
    } else {
        $('nav').css({ position: 'absolute', top: fixedLocate - headerH +'px' });
        $('.opacity').css({
          background:'rgba(43, 43, 43, 0)'
        });
    };
  })

}

function wrapperControl() {
  var nav_height = $('nav').height();
  var h1_height = $(window).height();
  $('h1').css({
    'height': h1_height
  })
}

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
