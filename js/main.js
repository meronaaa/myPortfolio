$(document).ready(function() {
  wrapperControl();
  navControl();
  portfolioText();
  scrollNav();
  var inH = $(window).height();
  var skill = $('.skills').offset().top-100;
  var about = $('.aboutme').offset().top-100;
  var work =  $('.works').offset().top-70;
  var contact =  $('.contact').offset().top-100;
  $('#skill').click(function() {
    $('html').animate({
      scrollTop: skill
    });
    return false;
  })
  $('#work').click(function() {
    $('html').animate({
      scrollTop: work
    });
    return false;
  })
  $('#about').click(function() {
    $('html').animate({
      scrollTop: about
    });
    return false;
  })
  $('#contact').click(function() {
    $('html').animate({
      scrollTop: contact
    });
    return false;
  })
})

$(window).resize(function() {
  wrapperControl();
  navControl();
  portfolioText();
  scrollNav()
})

$(window).scroll(function() {
  scrollNav();
})

function navControl() {
  $(window).scroll(function() {
    //스크롤위치
    var scrollPOS = $(this).scrollTop();
    //헤더높이
    var headerH = $('nav').height();
    console.log(headerH);
    var fixedLocate = $('nav').prev().height();

    console.log(scrollPOS, fixedLocate);
    if (scrollPOS + headerH > fixedLocate) {
      $('nav').css({
        position: 'fixed',
        top: '0'
      });
      $('.opacity').css({
        background: 'linear-gradient(to right, rgba(173, 173, 173, 0.45), rgba(48, 48, 48, 0.57))'
      })
    } else {
      $('nav').css({
        position: 'absolute',
        top: fixedLocate - headerH + 'px'
      });
      $('.opacity').css({
        background: 'rgba(43, 43, 43, 0)'
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
  $('.wrapper').css({
    'opacity': 0
  });
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

        $('.wrapper').css({
          'opacity': 1
        });
        $('.openwrapper').hide();
      });
    });
  })
}

function portfolioText() {
  $('.portfoliobox').hover(
    function() {
      $(this).children('.portfolioText').stop().slideDown();
    },
    function() {
      $(this).children('.portfolioText').slideUp();
    }
  );
}

function scrollNav() {


}
