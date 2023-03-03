'use strict';

// 0. a 클릭시 위로 튕기는 이벤트제거
$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});

// 1. approach 영역
$(window).on('scroll resize', function() { // 스크롤시 , 윈도우 창크기 변경시 이벤트
    var scrollTop = 0;
    scrollTop = $(document).scrollTop();
    fix();
    fixHeader();
    fixList();
    function fix() {
        if (scrollTop >1250) { $('.fix .text').addClass('on'); }
        else { $('.fix .text').removeClass('on'); }
        if (scrollTop > 2700) { $('.fix .text').removeClass('on'); }
    }
    function fixHeader() {
        if (scrollTop >80) { $('header').addClass('on'); }
        else { $('header').removeClass('on'); }
    }
    function fixList() {
        $('section.approach .inner .list li a').removeClass('on');
        if (scrollTop > 1250) {
            $('section.approach .inner .list li a').removeClass('on');
            $('section.approach .inner .list li:eq(0) a').addClass('on');
        }
        if (scrollTop > 1650)  {
            $('section.approach .inner .list li a').removeClass('on');
            $('section.approach .inner .list li:eq(1) a').addClass('on');
        }
        if (scrollTop > 2050)  {
            $('section.approach .inner .list li a').removeClass('on');
            $('section.approach .inner .list li:eq(2) a').addClass('on');
        }
        if (scrollTop > 2550)  {
            $('section.approach .inner .list li a').removeClass('on');
            $('section.approach .inner .list li:eq(3) a').addClass('on');
        }
        if (scrollTop > 2900) { $('section.approach .inner .list li a').removeClass('on'); }
    }
});

// 2. 스크롤 이벤트
$(function() {
	$('.animate').scrolla({
		mobile: true, //모바일에서 활성화
		once: false //스크롤시 딱 한번만 하고싶을땐 true
	});
});

// 3. 텍스트 애니메이션
$(function() { Splitting(); });

// 4. gnb 메뉴
$(function() {
    $('header .gnbBtn').on('click', function() {
        $('header nav.gnb').toggleClass('on');
	});
    $('.contents').on('click', function() { //gnb 영역 이외에 클릭시 닫아주기
        $('header nav.gnb').removeClass('on');
	});
});
