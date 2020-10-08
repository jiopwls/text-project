/* 
1. 메인 페이지 슬라이더 뷰
2. 서브 페이지 갤러리 뷰
3. 2단계 메뉴(css)

*/
$(function(){
    // var top = 0; //y축 위치
    // var duration = 500; // 재생시간
    // var interval_time = 3000; // 슬라이드 인터벌 시간(3000=3초, 5초 권장)
    // setInterval(function(){
    //     // 조건-500(마지막사진위치) 이면 0으로 돌아감.
    //     if(top <= -1500) {
    //         top = 0; //초기값으로 되돌림
    //     } else {
    //     top = top-500; //다음 이미지 위치
    //     }
    // $('#content > .left')
    // .animate({marginTop: top},duration)
    // .css('margin-top','0px')
    // $('#content > .right')
    // .animate({marginTop: top},duration)
    // .css('margin-top','0px')
    // },interval_time);

    // el(요소명) | top(시작위치) | duration(재생시간) | interval_time(인터벌 시간)
  function mySlider(el, top, duration, interval_time) {
    $(el).css({marginTop: top}); 

    setInterval(function(){
      // 조건: -500(마지막) 위치 이면 0으로 돌아감
      if(top <= -1500) {
        top = 0;  // 초기값
      } else {
        top = top - 500;  // 다음 이미지 위치
      }
     
      $(el)
        .animate({marginTop: top}, duration);
    }, interval_time);
  
  }
  function mySlider1(el, top, duration, interval_time) {
    $(el).css({marginTop: top}); 

    setInterval(function(){
      // 조건: -500(마지막) 위치 이면 0으로 돌아감
      if(top <= -1500) {
        top = 0;  // 초기값
      } else {
        top = top - 500;  // 다음 이미지 위치
      }
     
      $(el)
        .animate({marginTop: top}, duration);
    }, interval_time);
  
  }
  mySlider('.left', 0, 500, 2000);
  mySlider1('.right', -1500, 500, 2000);
})

// 서브페이지 갤러리
$(function(){
    $('.img_list > li').click(function(){
        // 클릭한 이미지의 src 값을 읽음
        var src = $(this).find('img').attr('src');
        // 대표이미지에 클릭한 이미지 표시
        $('figure > img').attr('src',src)
    })
})