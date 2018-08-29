function gnb() {
  //gnb 열기를 클릭했을때
  $('.gnb_open').click(function() {
    $('.black').fadeIn(300);
    $('.gnb_wrap').animate({'margin-right':'0'});
  })
  // gnb 닫기를 클릭했을때
  $('.gnb_close').click(function() {
    $('.black').fadeOut(300);
    $('.gnb_wrap').animate({'margin-right':'-310'});
    // gnb를 닫을때마다 초기화 시켜줌
    $('.gnb>li').children('a').css({'background-image': 'url(/m/images/common/gnb_down.png)'})
    $('.gnb li').removeClass('borderForce').children('ul.gnb_2dep').removeClass('active').stop().slideUp();
  })
  // gnb가 열려있을때 gnb가 아닌부분을 클릭했을때
  $('.black').click(function() {
    $('.black').fadeOut(300);
    $('.gnb_wrap').animate({'margin-right':'-310'});
    // gnb를 닫을때마다 초기화 시켜줌
    $('.gnb>li').children('a').css({'background-image': 'url(/m/images/common/gnb_down.png)'})
    $('.gnb li').removeClass('borderForce').children('ul.gnb_2dep').removeClass('active').stop().slideUp();
  })
  // gnb의 리스트를 컨트롤
  $('.gnb>li').click(function() {
    // *** class ***
    // borderForce : 다음 리스트에 border-top을 주는 효과
    // active : 현재 상태를 구분하기 위한 클래스
    $('.gnb>li').removeClass('borderForce');
    $(this).next().toggleClass('borderForce');
    $(this).children('.gnb_2dep').slideDown();
    $('.gnb>li').children('a').css({'background-image': 'url(/m/images/common/gnb_down.png)'}) // 배경요소가 있다면 그것을 컨트롤함
    // gnb의 2뎁스가 펼쳐져있는지 아닌지를 판별
    if ($(this).children('ul.gnb_2dep').hasClass('active')) {
      // 조건식을 만족하는경우
      $(this).children('a').css({'background-image': 'url(/m/images/common/gnb_down.png)'});
      $(this).children('ul.gnb_2dep').removeClass('active').stop().slideUp();
      $('.gnb>li').removeClass('borderForce');
    } else {
      // 조건식을 만족하지 않는경우
      $(this).children('a').css({'background-image': 'url(/m/images/common/gnb_up.png)'});
      $('.gnb li').children('ul.gnb_2dep').removeClass('active').stop().slideUp();
      $(this).children('ul.gnb_2dep').stop().slideDown().addClass('active');
    }
  })
}

/*
필요한 css 요소들
.black { 화면 전체 크기의 반투명한 검은색 배경의 div }
.borderForce { border-top !important 옵션은 알아서.. }
ul.gnb { gnb의 1뎁스 }
ul.gnb_2dep { gnb의 2뎁스 }
*/
