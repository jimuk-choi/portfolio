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
jQuery(function($) {
    window.onresize = function(){
        document.location.reload();
    };
});

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
			trigger:'.text',
			start : 'top 50%',
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
			trigger:'.text',
			start : 'top 50%',
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

	// 04. .visual_2 .container p
	// opacity scroll animation
	gsap.to('.visual_2 .container p',{  //.to() -> 자바스크립트 애니메이션 메서드
		opacity:1,
		scrollTrigger: {
			trigger:'.visual_2 .container p',
			start : '-1000%',
			end:'600%',
			// markers:true,
			scrub:true //되감기 반복
		}
	});

	// 06. .jmc
	// opacity
	gsap.to('.jmc',{  //.to() -> 자바스크립트 애니메이션 메서드
		opacity:1,
		scrollTrigger: {
			trigger:'.jmc',
			start : '-150% 80%',
			end:'110% 90%',
			// markers:true,
			scrub:true //되감기 반복
			}
		});
	});


/* 10. .gallery .imgBox active animation */
$(function(){
    let imgBox = gsap.utils.toArray('.imgBox');
    imgBox.forEach((imgBox, i) => {
        ScrollTrigger.create({
            trigger: imgBox,
            start:'top center',
            toggleClass: {targets:imgBox, className:'fuckingactive'},
            once:true,
            // scrub:false
            // markers:true,
            });
        });
    });
/* .gallery background*/
$(function(){
	/* genesis */
	$(".gallery .inner .box_1 li:nth-child(1) a").on("mouseover", function(){
		$(".gallery .inner").css({"background":"#111"});
	});
	$(".gallery .inner .box_1 li:nth-child(1) a").on("mouseleave", function(){
		$(".gallery .inner").css({"background":"#111"});
	});

	/* YOUNGLIM */
	$(".gallery .inner .box_1 li:nth-child(2) a").on("mouseover", function(){
		$(".gallery .inner").css({"background":"#33251F"});
		$(".gallery #cover").css({"background":"#33251F"});
	});
		
	$(".gallery .inner .box_1 li:nth-child(2) a").on("mouseleave", function(){
		$(".gallery .inner").css({"background":"#111"});
		$(".gallery #cover").css({"background":"#111"});
	});

	/* MUSIGN */
	$(".gallery .inner .box_2 li:nth-child(1) a").on("mouseover", function(){
		$(".gallery .inner").css({"background":"#26221D"});
		$(".gallery #cover").css({"background":"#26221D"});
	});
	$(".gallery .inner .box_2 li:nth-child(1) a").on("mouseleave", function(){
		$(".gallery .inner").css({"background":"#111"});
		$(".gallery #cover").css({"background":"#111"});
	});

	/* Phomain */
	$(".gallery .inner .box_2 li:nth-child(2) a").on("mouseover", function(){
		$(".gallery .inner").css({"background":"#292F24"});
		$(".gallery #cover").css({"background":"#292F24"});
	});
	$(".gallery .inner .box_2 li:nth-child(2) a").on("mouseleave", function(){
		$(".gallery .inner").css({"background":"#111"});
		$(".gallery #cover").css({"background":"#111"});
	});

	/* DOPDA */
	$(".gallery .inner .box_3 li:nth-child(1) a").on("mouseover", function(){
		$(".gallery .inner").css({"background":"#1D1820"});
		$(".gallery #cover").css({"background":"#1D1820"});
	});
	$(".gallery .inner .box_3 li:nth-child(1) a").on("mouseleave", function(){
		$(".gallery .inner").css({"background":"#111"});
		$(".gallery #cover").css({"background":"#111"});
	});

	/* DAEBANG */
	$(".gallery .inner .box_3 li:nth-child(2) a").on("mouseover", function(){
		$(".gallery .inner").css({"background":"#111A27"});
		$(".gallery #cover").css({"background":"#111A27"});
	});
	$(".gallery .inner .box_3 li:nth-child(2) a").on("mouseleave", function(){
		$(".gallery .inner").css({"background":"#111"});
		$(".gallery #cover").css({"background":"#111"});
	});

	/* HANHWA */
	$(".gallery .inner .box_4 li:nth-child(1) a").on("mouseover", function(){
		$(".gallery .inner").css({"background":"#1F2A2D"});
		$(".gallery #cover").css({"background":"#1F2A2D"});
	});

	$(".gallery .inner .box_4 li:nth-child(1) a").on("mouseleave", function(){
		$(".gallery .inner").css({"background":"#111"});
		$(".gallery #cover").css({"background":"#111"});
	});

	/* YSTUDIO */
	$(".gallery .inner .box_4 li:nth-child(2) a").on("mouseover", function(){
		$(".gallery .inner").css({"background":"#26301E"});
		$(".gallery #cover").css({"background":"#26301E"});
	});

	$(".gallery .inner .box_4 li:nth-child(2) a").on("mouseleave", function(){
		$(".gallery .inner").css({"background":"#111"});
		$(".gallery #cover").css({"background":"#111"});
	});

	/* KCA */
	$(".gallery .inner .box_5 li:nth-child(1) a").on("mouseover", function(){
		$(".gallery .inner").css({"background":"#33251F"});
		$(".gallery #cover").css({"background":"#33251F"});
	});

	$(".gallery .inner .box_5 li:nth-child(1) a").on("mouseleave", function(){
		$(".gallery .inner").css({"background":"#111"});
		$(".gallery #cover").css({"background":"#111"});
	});

	/* crew a la */
	$(".gallery .inner .box_5 li:nth-child(2) a").on("mouseover", function(){
		$(".gallery .inner").css({"background":"#26221D"});
		$(".gallery #cover").css({"background":"#26221D"});
	});

	$(".gallery .inner .box_5 li:nth-child(2) a").on("mouseleave", function(){
		$(".gallery .inner").css({"background":"#111"});
		$(".gallery #cover").css({"background":"#111"});
	});
});

/* ncs */
$(function(){
	/* 01 */
	$(".ncs_01").on("mouseover", function(){
		$(".ncs .inner").css({"background":"#33251F"});
	});
	$(".ncs_01").on("mouseleave", function(){
		$(".ncs .inner").css({"background":"#111"});
	});
    /* 02 */
	$(".ncs_02").on("mouseover", function(){
		$(".ncs .inner").css({"background":"#292F24"});
	});
	$(".ncs_02").on("mouseleave", function(){
		$(".ncs .inner").css({"background":"#111"});
	});
    /* 03 */
	$(".ncs_03").on("mouseover", function(){
		$(".ncs .inner").css({"background":"#26221D"});
	});
	$(".ncs_03").on("mouseleave", function(){
		$(".ncs .inner").css({"background":"#111"});
	});
    /* 04 */
	$(".ncs_04").on("mouseover", function(){
		$(".ncs .inner").css({"background":"#1D1820"});
	});
	$(".ncs_04").on("mouseleave", function(){
		$(".ncs .inner").css({"background":"#111"});
	});
    /* 05 */
	$(".ncs_05").on("mouseover", function(){
		$(".ncs .inner").css({"background":"#111A27"});
	});
	$(".ncs_05").on("mouseleave", function(){
		$(".ncs .inner").css({"background":"#111"});
	});
    /* 06 */
	$(".ncs_06").on("mouseover", function(){
		$(".ncs .inner").css({"background":"#1F2A2D"});
	});
	$(".ncs_06").on("mouseleave", function(){
		$(".ncs .inner").css({"background":"#111"});
	});
    /* 06 */
	$(".ncs_06").on("mouseover", function(){
		$(".ncs .inner").css({"background":"#26301E"});
	});
	$(".ncs_06").on("mouseleave", function(){
		$(".ncs .inner").css({"background":"#111"});
	});
    /* 07 */
	$(".ncs_07").on("mouseover", function(){
		$(".ncs .inner").css({"background":"#33251F"});
	});
	$(".ncs_07").on("mouseleave", function(){
		$(".ncs .inner").css({"background":"#111"});
	});
     /* 08 */
	$(".ncs_08").on("mouseover", function(){
		$(".ncs .inner").css({"background":"#292F24"});
	});
	$(".ncs_08").on("mouseleave", function(){
		$(".ncs .inner").css({"background":"#111"});
	});
     /* 09 */
	$(".ncs_09").on("mouseover", function(){
		$(".ncs .inner").css({"background":"#1D1820"});
	});
	$(".ncs_09").on("mouseleave", function(){
		$(".ncs .inner").css({"background":"#111"});
	});
});

/* ncs */
$(function(){
	
	ScrollTrigger.matchMedia({
		"(min-width: 1441px) and (max-width: 1921px)": function() {
	console.clear();

	let num = gsap.utils.toArray('.ncs .num');
	num.forEach((num, i) => {
		ScrollTrigger.create({
			trigger: num,
			start:'top 120%',
			toggleClass: {targets:num, className:'fuckingactive'},
			once:true,
			scrub:false,
			// markers:true,
			});
		});
		
	let txtBox_1 = gsap.utils.toArray('.ncs .txtBox_1');
	txtBox_1.forEach((txtBox_1, i) => {
			ScrollTrigger.create({
				trigger: txtBox_1,
				start:'top 120%',
				toggleClass: {targets:txtBox_1, className:'fuckingactive'},
				once:true,
				scrub:false,
				// markers:true,
				});
			});
	let line = gsap.utils.toArray('.ncs .line span');
	line.forEach((line, i) => {
			ScrollTrigger.create({
				trigger: line,
				start:'top 120%',
				toggleClass: {targets:line, className:'fuckingactive'},
				once:true,
				scrub:false,
				// markers:true,
				});
			});
	let txtBox_2 = gsap.utils.toArray('.ncs .txtBox_2');
	txtBox_2.forEach((txtBox_2, i) => {
			ScrollTrigger.create({
				trigger: txtBox_2,
				start:'top 120%',
				toggleClass: {targets:txtBox_2, className:'fuckingactive'},
				once:true,
				scrub:false,
				// markers:true,
				});
			});
	}})
});
/* ncs matchMedia*/
$(function(){
	
	ScrollTrigger.matchMedia({
		"(min-width: 1025px) and (max-width: 1440px)": function() {
	console.clear();

	let num = gsap.utils.toArray('.ncs .num');
	num.forEach((num, i) => {
		ScrollTrigger.create({
			trigger: num,
			start:'top 180%',
			toggleClass: {targets:num, className:'fuckingactive'},
			once:true,
			scrub:false,
			// markers:true,
			});
		});
		
	let txtBox_1 = gsap.utils.toArray('.ncs .txtBox_1');
	txtBox_1.forEach((txtBox_1, i) => {
			ScrollTrigger.create({
				trigger: txtBox_1,
				start:'top 180%',
				toggleClass: {targets:txtBox_1, className:'fuckingactive'},
				once:true,
				scrub:false,
				// markers:true,
				});
			});
	let line = gsap.utils.toArray('.ncs .line span');
	line.forEach((line, i) => {
			ScrollTrigger.create({
				trigger: line,
				start:'top 180%',
				toggleClass: {targets:line, className:'fuckingactive'},
				once:true,
				scrub:false,
				// markers:true,
				});
			});
	let txtBox_2 = gsap.utils.toArray('.ncs .txtBox_2');
	txtBox_2.forEach((txtBox_2, i) => {
			ScrollTrigger.create({
				trigger: txtBox_2,
				start:'top 180%',
				toggleClass: {targets:txtBox_2, className:'fuckingactive'},
				once:true,
				scrub:false,
				// markers:true,
				});
			});
	}})
});
/* ncs matchMedia*/
$(function(){
	
	ScrollTrigger.matchMedia({
		"(min-width: 771px) and (max-width: 1024px)": function() {
	console.clear();

	let num = gsap.utils.toArray('.ncs .num');
	num.forEach((num, i) => {
		ScrollTrigger.create({
			trigger: num,
			start:'top 200%',
			toggleClass: {targets:num, className:'fuckingactive'},
			once:true,
			scrub:false,
			// markers:true,
			});
		});
		
	let txtBox_1 = gsap.utils.toArray('.ncs .txtBox_1');
	txtBox_1.forEach((txtBox_1, i) => {
			ScrollTrigger.create({
				trigger: txtBox_1,
				start:'top 220%',
				toggleClass: {targets:txtBox_1, className:'fuckingactive'},
				once:true,
				scrub:false,
				// markers:true,
				});
			});
	let line = gsap.utils.toArray('.ncs .line span');
	line.forEach((line, i) => {
			ScrollTrigger.create({
				trigger: line,
				start:'top 200%',
				toggleClass: {targets:line, className:'fuckingactive'},
				once:true,
				scrub:false,
				// markers:true,
				});
			});
	let txtBox_2 = gsap.utils.toArray('.ncs .txtBox_2');
	txtBox_2.forEach((txtBox_2, i) => {
			ScrollTrigger.create({
				trigger: txtBox_2,
				start:'top 200%',
				toggleClass: {targets:txtBox_2, className:'fuckingactive'},
				once:true,
				scrub:false,
				// markers:true,
				});
			});
	}})
});
$(function(){
	
	ScrollTrigger.matchMedia({
		"(min-width: 0px) and (max-width: 770px)": function() {
	console.clear();

	let num = gsap.utils.toArray('.ncs .num');
	num.forEach((num, i) => {
		ScrollTrigger.create({
			trigger: num,
			start:'top 120%',
			toggleClass: {targets:num, className:'fuckingactive'},
			once:true,
			scrub:false,
			// markers:true,
			});
		});
		
	let txtBox_1 = gsap.utils.toArray('.ncs .txtBox_1');
	txtBox_1.forEach((txtBox_1, i) => {
			ScrollTrigger.create({
				trigger: txtBox_1,
				start:'top 180%',
				toggleClass: {targets:txtBox_1, className:'fuckingactive'},
				once:true,
				scrub:false,
				// markers:true,
				});
			});
	let line = gsap.utils.toArray('.ncs .line span');
	line.forEach((line, i) => {
			ScrollTrigger.create({
				trigger: line,
				start:'top 120%',
				toggleClass: {targets:line, className:'fuckingactive'},
				once:true,
				scrub:false,
				// markers:true,
				});
			});
	let txtBox_2 = gsap.utils.toArray('.ncs .txtBox_2');
	txtBox_2.forEach((txtBox_2, i) => {
			ScrollTrigger.create({
				trigger: txtBox_2,
				start:'top 120%',
				toggleClass: {targets:txtBox_2, className:'fuckingactive'},
				once:true,
				scrub:false,
				// markers:true,
				});
			});
	}})
});
