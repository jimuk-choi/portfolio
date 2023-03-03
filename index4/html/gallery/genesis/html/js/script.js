'use strict';

// a 클릭했을때 위로 튕기는 이벤트제거
$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});

//gnb 메뉴 
$(function() {
	$('header .menuOpen').on('click', function(){
		$('.gnb').addClass('on');
	});
	$('.gnb .close, section').on('click', function() { //닫기버튼과 섹션영역 클릭시 제거
		$('.gnb').removeClass('on');
	});
});

//fixHeader
var scrollTop = 0;
scrollTop = $(document).scrollTop();
fixHeader();
//윈도우창 조절시 이벤트
$(window).on('scroll resize', function() {
    scrollTop = $(document).scrollTop();
    fixHeader();
});

//고정헤더 함수
function fixHeader() {
    if (scrollTop > 150) { 
        $('header').addClass('on');
    } else {
        $('header').removeClass('on');
    }
}

// 스크롤 애니메이션
$(function() {
	$('.animate').scrolla({
		mobile: true, //모바일버전시 활성화
		once: false //스크롤시 딱 한번만 하고싶을땐 true
	});    
}); 	


//상단이동 부드럽게
$(function() {            
    $('.goTop').on('click', function() {
        var top = $('body').offset().top;
        $('html, body').animate( { scrollTop : (top) }, 400 );  
    });     
});  

//.top-visual 이미지슬라이드
    $(function() {
        $(".visual .slide").slick({
            arrows: true, //화살표
            dots: true, //인디케이터 해제
            fade: true, //페이드인 효과
            autoplay: true, //자동재생
            autoplaySpeed: 4000, //재생시간
            pauseOnHover:false, //마우스 오버, 포커스시 멈추는것 해제
		    pauseOnFocus:false
        });
    }); 

    $(function() {
        $('.multiple-items').slick({
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
        });
    }); 


    //visual
    $(function(){
        var swiper = new Swiper(".mySwiper_visual", {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,
    
            autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false, //오버 시 슬라이드 멈춤
            },
    
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
                type : "bullets"
            },
    
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            });
    });

    //models
    $(function(){
        var swiper = new Swiper(".mySwiper_models", {
            slidesPerView: 3,
            spaceBetween: 20,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
                },
                
            breakpoints: {
        
                768: {
                    slidesPerView: 3,  //브라우저가 768보다 클 때
                    spaceBetween: 20,
                },

                0: {
                    slidesPerView: 1,  //브라우저가 1024보다 클 때
                    spaceBetween: 20,
                },
            }
            });
    });
    

    //award
    $(function(){
        var listArray = ["2022 Red Dot Awards",
        "J.D. POWER 2022 U.S. INITIAL QUALITY STUDY",
        "2022 IIHS Top Safety Pick+",
        "2022 MOTORTREND SUV OF THE YEAR®",
        "KAJA / AWAK 2021 CAR OF THE YEAR",
        "2020 GOOD DESIGN® AWARD"];
        var mySwiper = new Swiper('.swiper-container', {
      // Optional parameters
            loop: true,
            autoplayDisableOnInteraction: false,
            slidesPerView: 1,        
            autoHeight: true,
            autoplay: {
            delay: 3000,//animation과 시간 맞춰줘야함
            }, 

            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },

            pagination: {
                el: '.swiper-pagination',
                clickable: 'true',
                type: 'bullets',
                renderBullet: function (index, className) {
                    return '<span class="' + className + '">' + '<x>'+ listArray[index]+'</x>' + '<y></y>' + '<z></z>'  + '</span>';
                },
            },


            navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            },
        })
    });