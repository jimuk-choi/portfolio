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
////////////////////////////////////////////////////////////////////
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
	// ease: "expo.out",
	// ease: "circ",
	ease: "Back.easeIn",
	
	
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
////////////////////////////////////////////////////////////////////


/* skill img */
////////////////////////////////////////////////////////////////////
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
			gsap.set(imageWrapper, { scale: 0.5, yPercent: -300, rotation: -15 });
			gsap.to(imageWrapper, { opacity: 1, scale: 1, yPercent: -300, rotation: 0 });
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
	////////////////////////////////////////////////////////////////////
	
/* skill background */
/* skill */
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

/* license background */ 
/* $(function(){
	// photoshop
	$(".licenseBox ul li:nth-child(1)").on("mouseover", function(){
		$(".skill").css({
			"background":"#001e36"
		});
		$(".licenseBox ul li:nth-child(1) a").css({
			"color":"#30A5FB"
		});
	});
	$(".licenseBox ul li:nth-child(1)").on("mouseleave", function(){
		$(".skill").css({
			"background":"#111"
		});
		$(".licenseBox ul li:nth-child(1) a").css({
			"color":"#fff"
		});
	});
	// 컴활 
	$(".licenseBox ul li:nth-child(2)").on("mouseover", function(){
		$(".skill").css({
			"background":"#0C502B"
		});
		$(".licenseBox ul li:nth-child(2) a").css({
			"color":"#fff"
		});
	});
	$(".licenseBox ul li:nth-child(2)").on("mouseleave", function(){
		$(".skill").css({
			"background":"#111"
		});
		$(".licenseBox ul li:nth-child(2) a").css({
			"color":"#fff"
		});
	});
	// 운전면허
	$(".licenseBox ul li:nth-child(3)").on("mouseover", function(){
		$(".skill").css({
			"background":"#6F706F"
		});
		$(".licenseBox ul li:nth-child(3) a").css({
			"color":"#000"
		});
	});
	$(".licenseBox ul li:nth-child(3)").on("mouseleave", function(){
		$(".skill").css({
			"background":"#111"
		});
		$(".licenseBox ul li:nth-child(3) a").css({
			"color":"#fff"
		});
	});
	
}); */
/* gallery background */
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

/* scrollTrigger .instroduction*/
$(function(){
	gsap.registerPlugin(ScrollTrigger);

	// .instroduction .inner
	// opacity scroll animation
	gsap.to('.introduction .inner',{  //.to() -> 자바스크립트 애니메이션 메서드
		opacity:1,
		scrollTrigger: {
			trigger:'.introduction .inner',
			start : 'top 50%',
			end:'50%',
			// markers:true,
			scrub:true //되감기 반복
		}
	});
});


// 07. .jmc
// width skze
$(function(){
	gsap.to('.jmc_1',{  //.to() -> 자바스크립트 애니메이션 메서드
		width:'100%',
		scrollTrigger: {
			trigger:'.jmc_1',
			start : 'top 100%',
			end:'110% 100%',
			// markers:true,
			scrub:true //되감기 반복
		}
	});
});

// 08. .jmc
// brightness
/* $(window).on('scroll resize',function(){
    var scrollTop = 0;
    scrollTop = $(document).scrollTop();
    brightness();
    function brightness(){
		if(scrollTop % 4 == 0){{$('.jmc_1').css({"filter":"brightness(1.1)"});}}
		else if(scrollTop % 4 != 0){{$('.jmc_1').css({"filter":"brightness(0.8)"});}}
	}
}); */

// 07. .jmc_2
// opacity
$(function(){
	gsap.to('.jmc_2',{  //.to() -> 자바스크립트 애니메이션 메서드
		opacity:1,
		scrollTrigger: {
			trigger:'.jmc_2',
			start : 'top 50%',
			end:'bottom 50%',
			// markers:true,
			scrub:true //되감기 반복
		}
	});
});

// 09. .gallery .imgBox
// brightness
/* $(window).on('scroll',function(){
    var scrollTop = 0;
    scrollTop = $(document).scrollTop();
    brightness();
    function brightness(){
		if(scrollTop % 6 == 0){{$('.gallery p.img').css({"filter":"brightness(1.1)"});}}
		else if(scrollTop % 6 != 0){{$('.gallery p.img').css({"filter":"brightness(0.7)"});}}
	}
}); */

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



/* tablet */
/* 1440px ~ 1919px */
$(function(){
	ScrollTrigger.matchMedia({
		"(min-width: 1680px) and (max-width: 1920px)": function() {

			/* .scrollDown */
			gsap.to('.scrollDown',{  //.to() -> 자바스크립트 애니메이션 메서드
				opacity:0,
				scrollTrigger: {
					trigger:'.text',
					start : '50% -100%',
					end:'bottom -100%',
					// markers:true,
					scrub:true //되감기 반복
				}
			})

			/* .visual .text */
			gsap.to('.visual .text',{  //.to() -> 자바스크립트 애니메이션 메서드
				opacity:1,
				scrollTrigger: {
					trigger:'.text',
					start : 'top 20%',
					end:'bottom -140%',
					// markers:true,
					scrub:true //되감기 반복
				}
			});
		}
	})
});


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
			gsap.set(imageWrapper, { scale: 0.8, yPercent: -220, rotation: -15 });
			gsap.to(imageWrapper, { opacity: 1, scale: 1, yPercent: -220, rotation: 0 });
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
	"(min-width: 1025px) and (max-width: 1900px)": function() {
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
		gsap.set(imageWrapper, { scale: 0.8, yPercent: -250, rotation: -15 });
		gsap.to(imageWrapper, { opacity: 1, scale: 1, yPercent: -250, rotation: 0 });
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
	"(min-width: 1901px) and (max-width: 2600px)": function() {

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
			gsap.set(imageWrapper, { scale: 0.8, yPercent: -300, rotation: -15 });
			gsap.to(imageWrapper, { opacity: 1, scale: 1, yPercent: -300, rotation: 0 });
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

