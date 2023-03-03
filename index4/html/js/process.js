$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});
/* scrolla */ //스크롤시 애니메이션 재생
$(function() {
	$('.animate').scrolla({
		mobile: true, //모바일버전시 활성화
		once: false //스크롤시 딱 한번만 하고싶을땐 true
        });    
});

/* window창 크기 조절 시 새로고침 */
/* jQuery(function($) {
    window.onresize = function(){
        document.location.reload();
    };
}); */

/* scrollTop 수치 */
/* $(window).on("scroll",function(){

    var hi = $(this).scrollTop();
    $(".fuck").text(hi);

}); */

/* menu_Fullscreen Menu */
$(function(){
    $(".open").on("click",function(){
        $(".menuOpen .menuWrap").addClass("on");
    });

    $(".menuWrap .close").on("click", function(){
        $(".menuOpen .menuWrap").removeClass("on");
    });
});
/* menu_menubrightness */
$(function menuWrapbrightness(){
	/* photoshop */
	$(".menuOpen .menuWrap .tit li a, .menuOpen .menuWrap .contact_2 li a, .close").on("mouseover", function(){
		$(".menuOpen .menuWrap").css({"filter":"brightness(1.2)"});
	});
	$(".menuOpen .menuWrap .tit li a, .menuOpen .menuWrap .contact_2 li a, .close").on("mouseleave", function(){
		$(".menuOpen .menuWrap").css({"filter":"brightness(1)"});
	});
});
/* menu img */
$(function(){

    console.clear();
    
    const { gsap } = window;
    
    gsap.timeline()
        .set(".menu2", { autoAlpha: 1 })
        .from(".menu__item-innertext", {
            delay: 1,
            duration: 0.85,
            yPercent: 125,
            stagger: 0.095,
            skewY: gsap.utils.wrap([-8, 8]),
            ease: "expo.out",
        })
        .set(".menu2", { pointerEvents: "all" });
    
    gsap.defaults({
        duration: 0.55,
        ease: "expo.out",
        // ease: "circ",
        // ease: "Back.easeIn",
        
        
    });
    
    
    const menuItems = document.querySelectorAll(".menu__item");
    menuItems.forEach((item) => {
        const imageWrapper = item.querySelector(".menu__item-image_wrapper");
        const imageWrapperBounds = imageWrapper.getBoundingClientRect();
        let itemBounds = item.getBoundingClientRect();
    
        const onMouseEnter = () => {
            gsap.set(imageWrapper, { scale: 0.5, yPercent: 50, rotation: -15 });
            gsap.to(imageWrapper, { opacity: 1, scale: 1, yPercent: 0, rotation: 0 });
        };
        const onMouseLeave = () => {
            gsap.to(imageWrapper, { opacity: 0, yPercent: -50, scale: 0.8, rotation: -15 });
        };
        const onMouseMove = ({ x, y }) => {
            let yOffset = itemBounds.top / imageWrapperBounds.height;
            yOffset = gsap.utils.mapRange(0, 1.5, -150, 150, yOffset);
            gsap.to(imageWrapper, {
                duration: 1.25,
                x: Math.abs(x - itemBounds.left) - imageWrapperBounds.width / 1.55,
                y: Math.abs(y - itemBounds.top) - imageWrapperBounds.height / 2 - yOffset,
            });
        };
    
        item.addEventListener("mouseenter", onMouseEnter);
        item.addEventListener("mouseleave", onMouseLeave);
        item.addEventListener("mousemove", onMouseMove);
    
        window.addEventListener("resize", () => {
            itemBounds = item.getBoundingClientRect();
        });
    });
    });

/* .visual */
$(function(){
	gsap.registerPlugin(ScrollTrigger);

	// 00. .scrollDown
	// opacity
	gsap.to('.scrollDown',{  //.to() -> 자바스크립트 애니메이션 메서드
		opacity:0,
		scrollTrigger: {
			trigger:'.scrollDown',
			start : 'top 40%',
			end:'bottom -100%',
			// markers:true,
			scrub:true //되감기 반복
		}
	});
	
	// 01. visual .text
	// opacity scroll animation
	gsap.to('.visual .text',{  //.to() -> 자바스크립트 애니메이션 메서드
		opacity:1,
		scrollTrigger: {
			trigger:'.visual .text',
			start : 'top 40%',
			end:'bottom -100%',
			// markers:true,
			scrub:true //되감기 반복
		}
	});
	// 01. visual p.img
	// scale scroll animation
	gsap.to('.visual p.img',{  //.to() -> 자바스크립트 애니메이션 메서드
		scale:1.05,
		opacity:1,
		scrollTrigger: {
			trigger:'.visual p.img',
			start : 'top 0%',
			end:'50% 0%',
			// markers:true,
			scrub: true //되감기 반복
		}
	});
	// 03.visual 영역 고정
	ScrollTrigger.create({ //앞에 있는 객체를 새롭게 생성하는 메서드
		trigger: '.visual',
		pin: true,
		// markers:true
	});
});

/*  */
$(function(){
	ScrollTrigger.matchMedia({
		"(min-width: 0px) and (max-width: 1920px)": function() {
	console.clear();

	let objectBox_1 = gsap.utils.toArray('.object .box_1');
	objectBox_1.forEach((objectBox_1, i) => {
		ScrollTrigger.create({
			trigger: objectBox_1,
			start:'top 70%',
			toggleClass: {targets:objectBox_1, className:'fuckingactive'},
			once:true,
			scrub:false,
			// markers:true,
			});
		});

    let objectBox_2 = gsap.utils.toArray('.object .box_2');
	objectBox_2.forEach((objectBox_2, i) => {
		ScrollTrigger.create({
			trigger: objectBox_2,
			start:'top 70%',
			toggleClass: {targets:objectBox_2, className:'fuckingactive'},
			once:true,
			scrub:false,
			// markers:true,
			});
		});

    let font = gsap.utils.toArray('.font');
    font.forEach((font, i) => {
        ScrollTrigger.create({
            trigger: font,
            start:'top 70%',
            toggleClass: {targets:font, className:'fuckingactive'},
            once:true,
            scrub:false,
            // markers:true,
            });
        });

    let line1 = gsap.utils.toArray('.line_1');
    line1.forEach((line1, i) => {
        ScrollTrigger.create({
            trigger: line1,
            start:'top 70%',
            toggleClass: {targets:line1, className:'fuckingactive'},
            once:true,
            scrub:false,
            // markers:true,
            });
        });
        
    let line2 = gsap.utils.toArray('.line_2');
    line2.forEach((line2, i) => {
        ScrollTrigger.create({
            trigger: line2,
            start:'top 70%',
            toggleClass: {targets:line2, className:'fuckingactive'},
            once:true,
            scrub:false,
            // markers:true,
            });
        });

    let line3 = gsap.utils.toArray('.line_3');
    line3.forEach((line3, i) => {
        ScrollTrigger.create({
            trigger: line3,
            start:'top 70%',
            toggleClass: {targets:line3, className:'fuckingactive'},
            once:true,
            scrub:false,
            // markers:true,
            });
        });

    let line4 = gsap.utils.toArray('.line_4');
    line4.forEach((line4, i) => {
        ScrollTrigger.create({
            trigger: line4,
            start:'top 70%',
            toggleClass: {targets:line4, className:'fuckingactive'},
            once:true,
            scrub:false,
            // markers:true,
            });
        });

    let line5 = gsap.utils.toArray('.line_5');
    line5.forEach((line5, i) => {
        ScrollTrigger.create({
            trigger: line5,
            start:'top 70%',
            toggleClass: {targets:line5, className:'fuckingactive'},
            once:true,
            scrub:false,
            // markers:true,
            });
        });

    let line6 = gsap.utils.toArray('.line_6');
    line6.forEach((line6, i) => {
        ScrollTrigger.create({
            trigger: line6,
            start:'top 70%',
            toggleClass: {targets:line6, className:'fuckingactive'},
            once:true,
            scrub:false,
            // markers:true,
            });
        });

    let line7 = gsap.utils.toArray('.line_7');
    line7.forEach((line7, i) => {
        ScrollTrigger.create({
            trigger: line7,
            start:'top 70%',
            toggleClass: {targets:line7, className:'fuckingactive'},
            once:true,
            scrub:false,
            // markers:true,
            });
        });

    let line8 = gsap.utils.toArray('.line_8');
    line8.forEach((line8, i) => {
        ScrollTrigger.create({
            trigger: line8,
            start:'top 70%',
            toggleClass: {targets:line8, className:'fuckingactive'},
            once:true,
            scrub:false,
            // markers:true,
            });
        });

    let line9 = gsap.utils.toArray('.line_9');
    line9.forEach((line9, i) => {
        ScrollTrigger.create({
            trigger: line9,
            start:'top 70%',
            toggleClass: {targets:line9, className:'fuckingactive'},
            once:true,
            scrub:false,
            // markers:true,
            });
        });

    let line10 = gsap.utils.toArray('.line_10');
    line10.forEach((line10, i) => {
        ScrollTrigger.create({
            trigger: line10,
            start:'top 70%',
            toggleClass: {targets:line10, className:'fuckingactive'},
            once:true,
            scrub:false,
            // markers:true,
            });
        });

    let line11 = gsap.utils.toArray('.line_11');
    line11.forEach((line11, i) => {
        ScrollTrigger.create({
            trigger: line11,
            start:'top 70%',
            toggleClass: {targets:line11, className:'fuckingactive'},
            once:true,
            scrub:false,
            // markers:true,
            });
        });

    let line12 = gsap.utils.toArray('.line_12');
    line12.forEach((line12, i) => {
        ScrollTrigger.create({
            trigger: line12,
            start:'top 70%',
            toggleClass: {targets:line12, className:'fuckingactive'},
            once:true,
            scrub:false,
            // markers:true,
            });
        });

	}})
    
});