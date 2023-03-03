
//gnb
$(function(){
    $('.gnb > li > a').on('mouseenter focus', function(){
        var gnbindex = $('.gnb > li > a').index($(this));
        /*alert(gnbindex); 인덱스값이 제대로 뜨는지 확인 */
         $('.gnb .inner').removeClass('on');
        $('.gnb .inner:eq('+ gnbindex +')').addClass('on');  
     });  
     $('header').on('mouseleave', function(){
         $('.gnb .inner').removeClass('on');
     });     
});





//fixHeader
var scrollFix = 0;
scrollFix = $(document).scrollTop();
fixHeader();
//윈도우창 조절시 이벤트
$(window).on('scroll resize', function() {
    scrollFix = $(document).scrollTop();
    fixHeader();
});

//고정헤더 함수
function fixHeader() {
    if (scrollFix > 150) { 
        $('header').addClass('on');
    } else {
        $('header').removeClass('on');
    }
}


//글자애니메이션  Splitting 데모사이트 그대로 작성 따라하기
$(function(){
    Splitting();
});

//.top-visual 이미지슬라이드
$(function(){
    $('.visual .slide').slick({
        arrows:true,//화살표
        dots:true,//인디케이터
        autoplay:true, //자동재생
        fade:true,//페이드인효과
        autoplaySpeed:7000,//재생시간
        pauseOnHover:false, //호버시 멈추는 멈추는것을 해제
        pauseOnFocus:false
    });
   $('.slick-prev').text("prev");
});















