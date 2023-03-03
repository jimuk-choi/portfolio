/* a태그 위로 튕기는 기본속성 제거 */
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
	gsap.to('.scrollDown',{
		opacity:0,
		scrollTrigger: {
			trigger:'.scrollDown',
			start : 'top 20%',
			// end:'bottom 0%',
			// markers:true,
			scrub:true //되감기 반복
		}
	});
    // visual
	ScrollTrigger.create({
		trigger: '.visual',
		pin: true,
		// markers:true
	});
    	// 00. .scrollDown
	// opacity
	gsap.to('.visual .txt_1',{
		bottom:0,
		scrollTrigger: {
			trigger:'.visual .txt_1',
			start : 'top 100%',
			// end:'bottom 0%',
			// markers:true,
			scrub:true //되감기 반복
		}
	});
    gsap.to('.visual .txt_2',{
		bottom:0,
		scrollTrigger: {
			trigger:'.visual .txt_2',
			start : 'top 95%',
			// end:'bottom 0%',
			// markers:true,
			scrub:true //되감기 반복
		}
	});
    gsap.to('.visual .txt_3',{
		bottom:0,
		scrollTrigger: {
			trigger:'.visual .txt_3',
			start : 'top 85%',
			// end:'bottom 0%',
			// markers:true,
			scrub:true //되감기 반복
		}
	});
    gsap.to('.visual .txt_4',{
		bottom:0,
		scrollTrigger: {
			trigger:'.visual .txt_4',
			start : 'top 80%',
			// end:'bottom 0%',
			// markers:true,
			scrub:true //되감기 반복
		}
	});
    gsap.to('.visual .txt_5',{
		bottom:0,
		scrollTrigger: {
			trigger:'.visual .txt_5',
			start : 'top 75%',
			// end:'bottom 0%',
			// markers:true,
			scrub:true //되감기 반복
		}
	});
    gsap.to('.visual .txt_6',{
		bottom:0,
		scrollTrigger: {
			trigger:'.visual .txt_6',
			start : 'top 65%',
			// end:'bottom 0%',
			// markers:true,
			scrub:true //되감기 반복
		}
	});
});

/* jmc */
$(function(){
	gsap.to('.jmc_2',{  //.to() -> 자바스크립트 애니메이션 메서드
		opacity:1,
		scrollTrigger: {
			trigger:'.jmc_2',
			start : '20% 50%',
			end:'bottom 50%',
			// markers:true,
			scrub:true //되감기 반복
		}
	});
});

/* skill img */
$(function(){

	console.clear();

	const { gsap } = window;
	
	gsap.timeline()
		.set(".menu_skill", { autoAlpha: 1 })
		.from(".menu_skill_inner_text", {
			delay: 1,
			duration: 0.85,
			// yPercent: 125,
			yPercent: 25,
			stagger: 0.095,
			skewY: gsap.utils.wrap([-8, 8]),
			ease: "expo.out",
			// ease: "circ",
		})
		.set(".menu_skill", { pointerEvents: "all" });
	
	gsap.defaults({
		duration: 1,
		ease: "expo.out",
		// ease: "fade.out",
		// ease: "fade.in",
	});
	
	const menuItems = document.querySelectorAll(".menu_skill_item");
	menuItems.forEach((item) => {
		const imageWrapper = item.querySelector(".menu_skill_item_imageWrapper");
		const imageWrapperBounds = imageWrapper.getBoundingClientRect();
		let itemBounds = item.getBoundingClientRect();
	
		const onMouseEnter = () => {
			/* gsap.set(imageWrapper, { scale: 0.8, yPercent: -300, rotation: -15 }); */
			/* gsap.to(imageWrapper, { opacity: 1, scale: 1, yPercent: -300, rotation: 0 }); */
			/* gsap.set(imageWrapper, { scale: 0.8, yPercent: 50, rotation: -15 }); */
			/* gsap.to(imageWrapper, { opacity: 1, scale: 1, yPercent: 0, rotation: 0 }); */
			gsap.set(imageWrapper, { scale: 0.5, yPercent: -550, rotation: -15 });
			gsap.to(imageWrapper, { opacity: 1, scale: 1, yPercent: -550, rotation: 0 });
		};
		const onMouseLeave = () => {
			gsap.to(imageWrapper, { opacity: 0, yPercent: -0, scale: 0.8, rotation: -15 });
		};
		const onMouseMove = ({ x, y }) => {
			let yOffset = itemBounds.top / imageWrapperBounds.height;
			// yOffset = gsap.utils.mapRange(0, 1.5, -150, 150, yOffset);
			yOffset = gsap.utils.mapRange(0, 1.5, -150, 150, yOffset);
			gsap.to(imageWrapper, {
				duration: 1.25,
				/* x: Math.abs(x - itemBounds.left) - imageWrapperBounds.width / 1.55, */
				/* y: Math.abs(y - itemBounds.top) - imageWrapperBounds.height / 2 - yOffset, */
				x: Math.abs(x - itemBounds.left) - imageWrapperBounds.width / 2,
				y: Math.abs(y - itemBounds.top) - imageWrapperBounds.height / 1 - yOffset,
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
	
/* skill background*/
$(function(){
	/* photoshop */
	$(".skillBox ul li:nth-child(1)").on("mouseover", function(){
		$(".skill").css({"background":"#001e36"});
		$(".menu_skill li .menu_skill_text").not(".menu_skill li:nth-child(1) .menu_skill_text").css({"color":"#156384"});
		$(".menu_skill li .menu_skill_text .num").not(".menu_skill li:nth-child(1) .menu_skill_text .num").css({"color":"#156384"});
		$(".skill .skillWrap .inner .licenseBox li").css({"color":"#156384"});
		$(".skill h2").css({"color":"#156384"});

	});
	$(".skillBox ul li:nth-child(1)").on("mouseleave", function(){
		$(".skill").css({"background":"#111"});
		$(".menu_skill li .menu_skill_text").not(".menu_skill li:nth-child(1) .menu_skill_text").css({"color":"#fff"});
		$(".menu_skill li .menu_skill_text .num").not(".menu_skill li:nth-child(1) .menu_skill_text .num").css({"color":"#fff"});
        $(".skill .skillWrap .inner .licenseBox li").css({"color":"#fff"});
		$(".skill h2").css({"color":"#fff"});
	});
	/* illustrator */
	$(".skillBox ul li:nth-child(2)").on("mouseover", function(){
		$(".skill").css({"background":"#330000"});
		$(".menu_skill li .menu_skill_text").not(".menu_skill li:nth-child(2) .menu_skill_text").css({"color":"#870000"});
		$(".menu_skill li .menu_skill_text .num").not(".menu_skill li:nth-child(2) .menu_skill_text .num").css({"color":"#870000"});
        $(".skill .skillWrap .inner .licenseBox li").css({"color":"#870000"});
		$(".skill h2").css({"color":"#870000"});
	});
	$(".skillBox ul li:nth-child(2)").on("mouseleave", function(){
		$(".skill").css({"background":"#111"});
		$(".menu_skill li .menu_skill_text").not(".menu_skill li:nth-child(2) .menu_skill_text").css({"color":"#fff"});
		$(".menu_skill li .menu_skill_text .num").not(".menu_skill li:nth-child(2) .menu_skill_text .num").css({"color":"#fff"});
        $(".skill .skillWrap .inner .licenseBox li").css({"color":"#fff"});
		$(".skill h2").css({"color":"#fff"});
	});
	/* indesign */
	$(".skillBox ul li:nth-child(3)").on("mouseover", function(){
		$(".skill").css({"background":"#49021F"});
		$(".menu_skill li .menu_skill_text").not(".menu_skill li:nth-child(3) .menu_skill_text").css({"color":"#78152D"});
		$(".menu_skill li .menu_skill_text .num").not(".menu_skill li:nth-child(3) .menu_skill_text .num").css({"color":"#78152D"});
        $(".skill .skillWrap .inner .licenseBox li").css({"color":"#78152D"});
		$(".skill h2").css({"color":"#78152D"});
	});
	$(".skillBox ul li:nth-child(3)").on("mouseleave", function(){
		$(".skill").css({"background":"#111"});
		$(".menu_skill li .menu_skill_text").not(".menu_skill li:nth-child(3) .menu_skill_text").css({"color":"#fff"});
		$(".menu_skill li .menu_skill_text .num").not(".menu_skill li:nth-child(3) .menu_skill_text .num").css({"color":"#fff"});
        $(".skill .skillWrap .inner .licenseBox li").css({"color":"#fff"});
		$(".skill h2").css({"color":"#fff"});
	});
	/* XD */
	$(".skillBox ul li:nth-child(4)").on("mouseover", function(){
		$(".skill").css({"background":"#470137"});
		$(".menu_skill li .menu_skill_text").not(".menu_skill li:nth-child(4) .menu_skill_text").css({"color":"#870980"});
		$(".menu_skill li .menu_skill_text .num").not(".menu_skill li:nth-child(4) .menu_skill_text .num").css({"color":"#870980"});
        $(".skill .skillWrap .inner .licenseBox li").css({"color":"#870980"});
		$(".skill h2").css({"color":"#870980"});
	});
	$(".skillBox ul li:nth-child(4)").on("mouseleave", function(){
		$(".skill").css({"background":"#111"});
		$(".menu_skill li .menu_skill_text").not(".menu_skill li:nth-child(4) .menu_skill_text").css({"color":"#fff"});
		$(".menu_skill li .menu_skill_text .num").not(".menu_skill li:nth-child(4) .menu_skill_text .num").css({"color":"#fff"});
        $(".skill .skillWrap .inner .licenseBox li").css({"color":"#fff"});
		$(".skill h2").css({"color":"#fff"});
	});
	/* html */
	$(".skillBox ul li:nth-child(5)").on("mouseover", function(){
		$(".skill").css({"background":"#370D00"});
		$(".menu_skill li .menu_skill_text").not(".menu_skill li:nth-child(5) .menu_skill_text").css({"color":"#870000"});
		$(".menu_skill li .menu_skill_text .num").not(".menu_skill li:nth-child(5) .menu_skill_text .num").css({"color":"#870000"});
        $(".skill .skillWrap .inner .licenseBox li").css({"color":"#870000"});
		$(".skill h2").css({"color":"#870000"});
	});
	$(".skillBox ul li:nth-child(5)").on("mouseleave", function(){
		$(".skill").css({"background":"#111"});
		$(".menu_skill li .menu_skill_text").not(".menu_skill li:nth-child(5) .menu_skill_text").css({"color":"#fff"});
		$(".menu_skill li .menu_skill_text .num").not(".menu_skill li:nth-child(5) .menu_skill_text .num").css({"color":"#fff"});
        $(".skill .skillWrap .inner .licenseBox li").css({"color":"#fff"});
		$(".skill h2").css({"color":"#fff"});
	});
	/* css */
	$(".skillBox ul li:nth-child(6)").on("mouseover", function(){
		$(".skill").css({"background":"#001e36"});
		$(".menu_skill li .menu_skill_text").not(".menu_skill li:nth-child(6) .menu_skill_text").css({"color":"#156384"});
		$(".menu_skill li .menu_skill_text .num").not(".menu_skill li:nth-child(6) .menu_skill_text .num").css({"color":"#156384"});
        $(".skill .skillWrap .inner .licenseBox li").css({"color":"#156384"});
		$(".skill h2").css({"color":"#156384"});
	});
	$(".skillBox ul li:nth-child(6)").on("mouseleave", function(){
		$(".skill").css({"background":"#111"});
		$(".menu_skill li .menu_skill_text").not(".menu_skill li:nth-child(6) .menu_skill_text").css({"color":"#fff"});
		$(".menu_skill li .menu_skill_text .num").not(".menu_skill li:nth-child(6) .menu_skill_text .num").css({"color":"#fff"});
        $(".skill .skillWrap .inner .licenseBox li").css({"color":"#fff"});
		$(".skill h2").css({"color":"#fff"});
	});
	/* javascript */
	$(".skillBox ul li:nth-child(7)").on("mouseover", function(){
		$(".skill").css({"background":"#292400"});
		$(".menu_skill li .menu_skill_text").not(".menu_skill li:nth-child(7) .menu_skill_text").css({"color":"#A49000"});
		$(".menu_skill li .menu_skill_text .num").not(".menu_skill li:nth-child(7) .menu_skill_text .num").css({"color":"#A49000"});
        $(".skill .skillWrap .inner .licenseBox li").css({"color":"#A49000"});
		$(".skill h2").css({"color":"#A49000"});
	});
	$(".skillBox ul li:nth-child(7)").on("mouseleave", function(){
		$(".skill").css({"background":"#111"});
		$(".menu_skill li .menu_skill_text").not(".menu_skill li:nth-child(7) .menu_skill_text").css({"color":"#fff"});
		$(".menu_skill li .menu_skill_text .num").not(".menu_skill li:nth-child(7) .menu_skill_text .num").css({"color":"#fff"});
        $(".skill .skillWrap .inner .licenseBox li").css({"color":"#fff"});
		$(".skill h2").css({"color":"#fff"});
	});
	/* jquery */
	$(".skillBox ul li:nth-child(8)").on("mouseover", function(){
		$(".skill").css({"background":"#001e36"});
		$(".menu_skill li .menu_skill_text").not(".menu_skill li:nth-child(8) .menu_skill_text").css({"color":"#156384"});
		$(".menu_skill li .menu_skill_text .num").not(".menu_skill li:nth-child(8) .menu_skill_text .num").css({"color":"#156384"});
        $(".skill .skillWrap .inner .licenseBox li").css({"color":"#156384"});
		$(".skill h2").css({"color":"#156384"});
	});
	$(".skillBox ul li:nth-child(8)").on("mouseleave", function(){
		$(".skill").css({"background":"#111"});
		$(".menu_skill li .menu_skill_text").not(".menu_skill li:nth-child(8) .menu_skill_text").css({"color":"#fff"});
		$(".menu_skill li .menu_skill_text .num").not(".menu_skill li:nth-child(8) .menu_skill_text .num").css({"color":"#fff"});
        $(".skill .skillWrap .inner .licenseBox li").css({"color":"#fff"});
		$(".skill h2").css({"color":"#fff"});
	});
	/* excel */
	$(".skillBox ul li:nth-child(9)").on("mouseover", function(){
		$(".skill").css({"background":"#26301E"});
		$(".menu_skill li .menu_skill_text").not(".menu_skill li:nth-child(9) .menu_skill_text").css({"color":"#396416"});
		$(".menu_skill li .menu_skill_text .num").not(".menu_skill li:nth-child(9) .menu_skill_text .num").css({"color":"#396416"});
        $(".skill .skillWrap .inner .licenseBox li").css({"color":"#396416"});
		$(".skill h2").css({"color":"#396416"});
	});
	$(".skillBox ul li:nth-child(9)").on("mouseleave", function(){
		$(".skill").css({"background":"#111"});
		$(".menu_skill li .menu_skill_text").not(".menu_skill li:nth-child(9) .menu_skill_text").css({"color":"#fff"});
		$(".menu_skill li .menu_skill_text .num").not(".menu_skill li:nth-child(9) .menu_skill_text .num").css({"color":"#fff"});
        $(".skill .skillWrap .inner .licenseBox li").css({"color":"#fff"});
		$(".skill h2").css({"color":"#fff"});
	});
	/* powerpoint */
	$(".skillBox ul li:nth-child(10)").on("mouseover", function(){
		$(".skill").css({"background":"#370D00"});
		$(".menu_skill li .menu_skill_text").not(".menu_skill li:nth-child(10) .menu_skill_text").css({"color":"#870000"});
		$(".menu_skill li .menu_skill_text .num").not(".menu_skill li:nth-child(10) .menu_skill_text .num").css({"color":"#870000"});
        $(".skill .skillWrap .inner .licenseBox li").css({"color":"#870000"});
		$(".skill h2").css({"color":"#870000"});
	});
	$(".skillBox ul li:nth-child(10)").on("mouseleave", function(){
		$(".skill").css({"background":"#111"});
		$(".menu_skill li .menu_skill_text").not(".menu_skill li:nth-child(10) .menu_skill_text").css({"color":"#fff"});
		$(".menu_skill li .menu_skill_text .num").not(".menu_skill li:nth-child(10) .menu_skill_text .num").css({"color":"#fff"});
        $(".skill .skillWrap .inner .licenseBox li").css({"color":"#fff"});
		$(".skill h2").css({"color":"#fff"});
	});
	/* word */
	$(".skillBox ul li:nth-child(11)").on("mouseover", function(){
		$(".skill").css({"background":"#001e36"});
		$(".menu_skill li .menu_skill_text").not(".menu_skill li:nth-child(11) .menu_skill_text").css({"color":"#156384"});
		$(".menu_skill li .menu_skill_text .num").not(".menu_skill li:nth-child(11) .menu_skill_text .num").css({"color":"#156384"});
        $(".skill .skillWrap .inner .licenseBox li").css({"color":"#156384"});
		$(".skill h2").css({"color":"#156384"});
	});
	$(".skillBox ul li:nth-child(11)").on("mouseleave", function(){
		$(".skill").css({"background":"#111"});
		$(".menu_skill li .menu_skill_text").not(".menu_skill li:nth-child(11) .menu_skill_text").css({"color":"#fff"});
		$(".menu_skill li .menu_skill_text .num").not(".menu_skill li:nth-child(11) .menu_skill_text .num").css({"color":"#fff"});
        $(".skill .skillWrap .inner .licenseBox li").css({"color":"#fff"});
		$(".skill h2").css({"color":"#fff"});
	});
});

/* introduction ani */
$(function(){
	let imgBox = gsap.utils.toArray('.introduction .imgBox');
	imgBox.forEach((imgBox, i) => {
		ScrollTrigger.create({
			trigger: imgBox,
			start:'top center',
			toggleClass: {targets:imgBox, className:'fuckingactive'},
			once:true,
			scrub:false
			// markers:true,
			});
		});
	let name_krFadeUp = gsap.utils.toArray('.name_kr');
	name_krFadeUp.forEach((name_krFadeUp, i) => {
		ScrollTrigger.create({
			trigger: name_krFadeUp,
			start:'top bottom',
			toggleClass: {targets:name_krFadeUp, className:'fuckingactive'},
			once:true,
			scrub:false,
			// markers:true,
			});
		});
	let name_enFadeUp = gsap.utils.toArray('.name_en');
	name_enFadeUp.forEach((name_enFadeUp, i) => {
		ScrollTrigger.create({
			trigger: name_enFadeUp,
			start:'top bottom',
			toggleClass: {targets:name_enFadeUp, className:'fuckingactive'},
			once:true,
			scrub:false,
			// markers:true,
			});
		});
	let introductionText1 = gsap.utils.toArray('.introduction .text_1');
	introductionText1.forEach((introductionText1, i) => {
		ScrollTrigger.create({
			trigger: introductionText1,
			start:'top bottom',
			toggleClass: {targets:introductionText1, className:'fuckingactive'},
			once:true,
			scrub:false,
			// markers:true,
			});
		});
	let introductionText2 = gsap.utils.toArray('.introduction .text_2');
	introductionText2.forEach((introductionText2, i) => {
			ScrollTrigger.create({
				trigger: introductionText2,
				start:'top bottom',
				toggleClass: {targets:introductionText2, className:'fuckingactive'},
				once:true,
				scrub:false,
				// markers:true,
				});
			});
});

/* hobby */
$(function(){
	let imgBox = gsap.utils.toArray('.hobby .imgBox');
	imgBox.forEach((imgBox, i) => {
		ScrollTrigger.create({
			trigger: imgBox,
			start:'top center',
			toggleClass: {targets:imgBox, className:'fuckingactive'},
			once:true,
			scrub:false
			// markers:true,
			});
		});
	let hobbytitleFadeUp = gsap.utils.toArray('.hobby .tit');
	hobbytitleFadeUp.forEach((hobbytitleFadeUp, i) => {
		ScrollTrigger.create({
			trigger: hobbytitleFadeUp,
			start:'top bottom',
			toggleClass: {targets:hobbytitleFadeUp, className:'fuckingactive'},
			once:true,
			scrub:false,
			// markers:true,
			});
		});
	let hobbytxtleFadeUp = gsap.utils.toArray('.hobby .txt');
	hobbytxtleFadeUp.forEach((hobbytxtleFadeUp, i) => {
		ScrollTrigger.create({
			trigger: hobbytxtleFadeUp,
			start:'top bottom',
			toggleClass: {targets:hobbytxtleFadeUp, className:'fuckingactive'},
			once:true,
			scrub:false,
			// markers:true,
			});
		});
});

/* history */
$(function(){
	let historyNum = gsap.utils.toArray('.history .num');
	historyNum.forEach((historyNum, i) => {
		ScrollTrigger.create({
			trigger: historyNum,
			start:'top 60%',
			toggleClass: {targets:historyNum, className:'fuckingactive'},
			once:true,
			scrub:false,
			// markers:true,
			});
		});
	let historycircle = gsap.utils.toArray('.history .circle');
	historycircle.forEach((historycircle, i) => {
		ScrollTrigger.create({
			trigger: historycircle,
			start:'top 80%',
			toggleClass: {targets:historycircle, className:'fuckingactive'},
			once:true,
			scrub:false,
			// markers:true,
			});
		});
	let historydottedLine = gsap.utils.toArray('.history .dottedLine');
	historydottedLine.forEach((historydottedLine, i) => {
		ScrollTrigger.create({
			trigger: historydottedLine,
			start:'top 70%',
			toggleClass: {targets:historydottedLine, className:'fuckingactive'},
			once:true,
			scrub:false,
			// markers:true,
			});
		});
	let historytxtBox = gsap.utils.toArray('.history .txtBox');
	historytxtBox.forEach((historytxtBox, i) => {
		ScrollTrigger.create({
			trigger: historytxtBox,
			start:'top 70%',
			toggleClass: {targets:historytxtBox, className:'fuckingactive'},
			once:true,
			scrub:false,
			// markers:true,
			});
		});
	let yearWrapLine = gsap.utils.toArray('.history .line');
	yearWrapLine.forEach((yearWrapLine, i) => {
		ScrollTrigger.create({
			trigger: yearWrapLine,
			start:'top 70%',
			toggleClass: {targets:yearWrapLine, className:'fuckingactive'},
			once:true,
			scrub:false,
			// markers:true,
			});
		});
});

//////////////////////////////////////////////////////////////////
/* matchMedia */
/* skill img */
$(function(){
	ScrollTrigger.matchMedia({
		"(min-width: 0px) and (max-width: 1024px)": function() {
	console.clear();

	const { gsap } = window;
	
	gsap.timeline()
		.set(".menu_skill", { autoAlpha: 1 })
		.from(".menu_skill_inner_text", {
			delay: 1,
			duration: 0.85,
			yPercent: 25,
			stagger: 0.095,
			skewY: gsap.utils.wrap([-8, 8]),
			ease: "expo.out",
		})
		.set(".menu_skill", { pointerEvents: "all" });
	
	gsap.defaults({
		duration: 1,
		ease: "expo.out",
	});
	
	const menuItems = document.querySelectorAll(".menu_skill_item");
	menuItems.forEach((item) => {
		const imageWrapper = item.querySelector(".menu_skill_item_imageWrapper");
		const imageWrapperBounds = imageWrapper.getBoundingClientRect();
		let itemBounds = item.getBoundingClientRect();
	
		const onMouseEnter = () => {
			gsap.set(imageWrapper, { scale: 0.8, yPercent: -420, rotation: -15 });
			gsap.to(imageWrapper, { opacity: 1, scale: 1, yPercent: -420, rotation: 0 });
		};
		const onMouseLeave = () => {
			gsap.to(imageWrapper, { opacity: 0, yPercent: -0, scale: 0.8, rotation: -15 });
		};
		const onMouseMove = ({ x, y }) => {
			let yOffset = itemBounds.top / imageWrapperBounds.height;
			yOffset = gsap.utils.mapRange(0, 1.5, -150, 150, yOffset);
			gsap.to(imageWrapper, {
				duration: 1.25,
				/* x: Math.abs(x - itemBounds.left) - imageWrapperBounds.width / 1.55, */
				/* y: Math.abs(y - itemBounds.top) - imageWrapperBounds.height / 0.5 - yOffset, */
			});
		};

		item.addEventListener("mouseenter", onMouseEnter);
		item.addEventListener("mouseleave", onMouseLeave);
		item.addEventListener("mousemove", onMouseMove);
	
		window.addEventListener("resize", () => {
			itemBounds = item.getBoundingClientRect();
		});
	});
}})
///////////////////////////////////////////////////////////////////////////
ScrollTrigger.matchMedia({
	"(min-width: 1025px) and (max-width: 1918px)": function() {
console.clear();

const { gsap } = window;

gsap.timeline()
	.set(".menu_skill", { autoAlpha: 1 })
	.from(".menu_skill_inner_text", {
		delay: 1,
		duration: 0.85,
		// yPercent: 125,
		yPercent: 25,
		stagger: 0.095,
		skewY: gsap.utils.wrap([-8, 8]),
		ease: "expo.out",
	})
	.set(".menu_skill", { pointerEvents: "all" });

gsap.defaults({
	duration: 1,
	ease: "expo.out",
});

const menuItems = document.querySelectorAll(".menu_skill_item");
menuItems.forEach((item) => {
	const imageWrapper = item.querySelector(".menu_skill_item_imageWrapper");
	const imageWrapperBounds = imageWrapper.getBoundingClientRect();
	let itemBounds = item.getBoundingClientRect();

	const onMouseEnter = () => {
		gsap.set(imageWrapper, { scale: 0.8, yPercent: -500, rotation: -15 });
		gsap.to(imageWrapper, { opacity: 1, scale: 1, yPercent: -500, rotation: 0 });
	};
	const onMouseLeave = () => {
		gsap.to(imageWrapper, { opacity: 0, yPercent: -0, scale: 0.8, rotation: -15 });
	};
	const onMouseMove = ({ x, y }) => {
		let yOffset = itemBounds.top / imageWrapperBounds.height;
		// yOffset = gsap.utils.mapRange(0, 1.5, -150, 150, yOffset);
		yOffset = gsap.utils.mapRange(0, 1.5, -150, 150, yOffset);
		gsap.to(imageWrapper, {
			duration: 1.25,
			// x: Math.abs(x - itemBounds.left) - imageWrapperBounds.width / 1.55,
			// y: Math.abs(y - itemBounds.top) - imageWrapperBounds.height / 2 - yOffset,
			x: Math.abs(x - itemBounds.left) - imageWrapperBounds.width / 2,
			y: Math.abs(y - itemBounds.top) - imageWrapperBounds.height / 0.7 - yOffset,
		});
	};

	item.addEventListener("mouseenter", onMouseEnter);
	item.addEventListener("mouseleave", onMouseLeave);
	// item.addEventListener("mousemove", onMouseMove);

	window.addEventListener("resize", () => {
		itemBounds = item.getBoundingClientRect();
	});
});
}})
///////////////////////////////////////////////////////////////////////////
ScrollTrigger.matchMedia({
	"(min-width: 1919px) and (max-width: 2600px)": function() {

console.clear();

	const { gsap } = window;
	
	gsap.timeline()
		.set(".menu_skill", { autoAlpha: 1 })
		.from(".menu_skill_inner_text", {
			delay: 1,
			duration: 0.85,
			// yPercent: 125,
			yPercent: 25,
			stagger: 0.095,
			skewY: gsap.utils.wrap([-8, 8]),
			ease: "expo.out",
		})
		.set(".menu_skill", { pointerEvents: "all" });
	
	gsap.defaults({
		duration: 1,
		ease: "expo.out",
		// ease: "fade.out",
		// ease: "fade.in",
	});
	
	const menuItems = document.querySelectorAll(".menu_skill_item");
	menuItems.forEach((item) => {
		const imageWrapper = item.querySelector(".menu_skill_item_imageWrapper");
		const imageWrapperBounds = imageWrapper.getBoundingClientRect();
		let itemBounds = item.getBoundingClientRect();
	
		const onMouseEnter = () => {
			gsap.set(imageWrapper, { scale: 0.8, yPercent: -550, rotation: -15 });
			gsap.to(imageWrapper, { opacity: 1, scale: 1, yPercent: -550, rotation: 0 });
		};
		const onMouseLeave = () => {
			gsap.to(imageWrapper, { opacity: 0, yPercent: -0, scale: 0.8, rotation: -15 });
		};
		const onMouseMove = ({ x, y }) => {
			let yOffset = itemBounds.top / imageWrapperBounds.height;
			yOffset = gsap.utils.mapRange(0, 1.5, -150, 150, yOffset);
			gsap.to(imageWrapper, {
				duration: 1.25,
				x: Math.abs(x - itemBounds.left) - imageWrapperBounds.width / 1.55,
				y: Math.abs(y - itemBounds.top) - imageWrapperBounds.height / 2 - yOffset,
				x: Math.abs(x - itemBounds.left) - imageWrapperBounds.width / 5,
				y: Math.abs(y - itemBounds.top) - imageWrapperBounds.height / 1 - yOffset,
			});
		};

		item.addEventListener("mouseenter", onMouseEnter);
		item.addEventListener("mouseleave", onMouseLeave);
		// item.addEventListener("mousemove", onMouseMove);
	
		window.addEventListener("resize", () => {
			itemBounds = item.getBoundingClientRect();
		});
	});
}});
	
});

/* history */
$(function(){

	ScrollTrigger.matchMedia({
		"(min-width: 0px) and (max-width: 1024px)": function() {
	console.clear();

	let historyNum = gsap.utils.toArray('.history .num');
	historyNum.forEach((historyNum, i) => {
		ScrollTrigger.create({
			trigger: historyNum,
			start:'top 80%',
			toggleClass: {targets:historyNum, className:'fuckingactive'},
			once:true,
			scrub:false,
			// markers:true,
			});
		});
	let historytxtBox = gsap.utils.toArray('.history .txtBox');
	historytxtBox.forEach((historytxtBox, i) => {
		ScrollTrigger.create({
			trigger: historytxtBox,
			start:'top 90%',
			toggleClass: {targets:historytxtBox, className:'fuckingactive'},
			once:true,
			scrub:false,
			// markers:true,
			});
		});
	historyImg = gsap.utils.toArray('.history a::after');
	historyImg.forEach((historyImg, i) => {
		ScrollTrigger.create({
			trigger: historyImg,
			start:'top 90%',
			toggleClass: {targets:historyImg, className:'fuckingactive'},
			once:true,
			scrub:false,
			markers:true,
			});
		});
	}})
});