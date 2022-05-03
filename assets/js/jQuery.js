(function ($) {
	'use strict';

	// Preloader js    
	$(window).on('load', function () {
		$('.preloader').fadeOut(700);
	});

	// Sticky Menu
	// $(window).scroll(function () {
	// 	var height = $('.top-header').innerHeight();
	// 	if ($('header').offset().top > 10) {
	// 		$('.top-header').addClass('hide');
	// 		$('.navigation').addClass('nav-bg');
	// 		$('.navigation').css('margin-top', '-' + height + 'px');
	// 	} else {
	// 		$('.top-header').removeClass('hide');
	// 		$('.navigation').removeClass('nav-bg');
	// 		$('.navigation').css('margin-top', '-' + 0 + 'px');
	// 	}
	// });

	// Background-images
	$('[data-background]').each(function () {
		$(this).css({
			'background-image': 'url(' + $(this).data('background') + ')'
		});
	});

	function background_images() {
		$('[data-background]').each(function () {
			$(this).css({
				'background-image': 'url(' + $(this).data('background') + ')'
			});
		});
	}

	//Hero Slider
	$('.hero-slider').slick({
		autoplay: true,
		autoplaySpeed: 7500,
		pauseOnFocus: false,
		pauseOnHover: false,
		infinite: true,
		arrows: true,
		fade: true,
		prevArrow: '<button type=\'button\' class=\'prevArrow\'><i class=\'ti-angle-left\'></i></button>',
		nextArrow: '<button type=\'button\' class=\'nextArrow\'><i class=\'ti-angle-right\'></i></button>',
		dots: true
	});
	$('.hero-slider').slickAnimation();

	function nav_handle(){
		setTimeout(()=>{
			// console.log('loop');
			try{
				var nav_links = document.querySelectorAll('.nav-link');
				if (nav_links.length > 0) {
					nav_links.forEach(element => {
						if (element.text.toLowerCase() == $('#info').attr('data-pagetype').toLowerCase()){
							if(!element.parentElement.classList.contains('active')){
								element.parentElement.classList.add('active');
							}
							if(element.parentElement.classList.contains('@@'+element.text.toLowerCase())){
								element.parentElement.classList.remove('@@'+element.text.toLowerCase());
							}
						}
						else{
							if(element.parentElement.classList.contains('active')){
								element.parentElement.classList.remove('active');
							}
							if(!element.parentElement.classList.contains('@@'+element.text.toLowerCase())){
								element.parentElement.classList.add('@@'+element.text.toLowerCase());
							}
						}
					});
				}
				else{
					throw 'no nav-link found';
				}
			}
			catch(e){
				nav_handle();
			}
		},200);
	}


	// var ele;
	// var ele_link;
	// var url_hash;
	// var info = {
	// 	'Home': ['',true, ''], 
	// 	'About': ['./a/about.html',false,'#About'],
	// 	'Events': ['./a/events.html',false, '#Events'], 
	// 	'Contact': ['./a/contact.html',false, '#Contact'],
	// };

	// function handle_pageload(element){
	// 	console.log("fsdsdsd",element);
	// 	ele = element;
	// 	ele_link = element.attr('data-link');
	// 	// console.log($('.'+ele_link).html());

	// 	if (info[ele_link][1] == false || $('.'+ele_link).html == ''){
	// 		console.log('here');
	// 		$('.'+ele_link).load(info[ele_link][0], function(responseTxt, statusTxt, jqXHR){
	// 			if(statusTxt == "success"){
	// 				$(".nav-link").each(function(){
	// 					// console.log($('.'+$(this).attr('data-link')));
	// 					// console.log($('.'+ele_link));
	// 					if ($(this).attr('data-link') != ele_link){
	// 						// console.log($('.'+$(this).attr('data-link')));
	// 						$('.'+$(this).attr('data-link')).hide();
	// 					}
	// 				});
	// 				$('.'+ele_link).show();
	// 				// alert("New content loaded successfully!");
	// 				info[ele_link][1] = true;
	// 				background_images();
	// 				$('#info').attr('data-pagetype',ele_link);
	// 				nav_handle();
	// 				url_hash = window.location.hash;
	// 				if (url_hash != info[ele_link][2]){
	// 					history.pushState(null, null, info[ele_link][2]);
	// 				}
	// 			}
	// 			if(statusTxt == "error"){
	// 				alert("Something went wrong!!!");
	// 			}
	// 		});
	// 	}
	// 	else{
	// 		console.log('here22');
	// 		// var show_this = $('.'+$(this).attr('data-link'));
	// 		$(".nav-link").each(function(){
	// 			// console.log($('.'+$(this).attr('data-link')));
	// 			// console.log($('.'+ele_link));
	// 			if ($(this).attr('data-link') != ele_link){
	// 				// console.log($('.'+$(this).attr('data-link')));
	// 				$('.'+$(this).attr('data-link')).hide();
	// 			}
	// 		});
	// 		$('.'+ele_link).show();
	// 		background_images();
	// 		$('#info').attr('data-pagetype',ele_link);
	// 		nav_handle();
	// 		url_hash = window.location.hash;
	// 		if (url_hash != info[ele_link][2]){
	// 			history.pushState(null, null, info[ele_link][2]);
	// 		}
	// 	}
	// }

	// window.addEventListener('hashchange', function(){
	// 	url_hash = window.location.hash;
	// 	for(var key in info) {
	// 		if (url_hash == info[key][2]){
	// 			handle_pageload($('[data-link="'+key+'"]'));
	// 		}
	// 	};
	// 	if (url_hash == ''){
	// 		handle_pageload($('[data-link="Home"]'));
	// 		if (url_hash != ''){
	// 			history.pushState(null, null, '/');
	// 		}
	// 	}
	// });

	// $(window).on('popstate', function() {
	// 	url_hash = window.location.hash;
	// 	for(var key in info) {
	// 		if (url_hash == info[key][2]){
	// 			console.log("url_hash",url_hash);
	// 			console.log("info[key][2]",info[key][2]);
	// 			handle_pageload($('[data-link="'+key+'"]'));
	// 		}
	// 	};
	//   });

	// $(window).on('load', function () {
	// 	url_hash = window.location.hash;
	// 	for(var key in info) {
	// 		if (url_hash == info[key][2]){
	// 			console.log("url_hash",url_hash);
	// 			console.log("info[key][2]",info[key][2]);
	// 			handle_pageload($('[data-link="'+key+'"]'));
	// 		}
	// 	};
	// });


	// venobox popup
	$(document).ready(function () {
		$('.venobox').venobox();
		$(function () {
			$(".load").each(function () {
				try{
					$(this).load(this.dataset.source);
				}
				catch (e){ }
				nav_handle();
				getDate();
			});
		});

		
		// $(".nav-link").each(function(){
		// 	$(this).click(function(){
		// 		console.log(this);
		// 		console.log($(this).attr('data-link'));
		// 		if (url_hash != ''){
		// 			history.pushState(null, null, '/');
		// 		}
		// 		handle_pageload($(this));
		// 	});
		// });

		$(function () {
			
		});
		
	});


	// filter
	$(document).ready(function () {
		var containerEl = document.querySelector('.filtr-container');
		var filterizd;
		if (containerEl) {
			filterizd = $('.filtr-container').filterizr({});
		}
		//Active changer
		$('.filter-controls li').on('click', function () {
			$('.filter-controls li').removeClass('active');
			$(this).addClass('active');
		});
	});

	//  Count Up
	function counter() {
		var oTop;
		if ($('.count').length !== 0) {
			oTop = $('.count').offset().top - window.innerHeight;
		}
		if ($(window).scrollTop() > oTop) {
			$('.count').each(function () {
				var $this = $(this),
					countTo = $this.attr('data-count');
				$({
					countNum: $this.text()
				}).animate({
					countNum: countTo
				}, {
					duration: 1000,
					easing: 'swing',
					step: function () {
						$this.text(Math.floor(this.countNum));
					},
					complete: function () {
						$this.text(this.countNum);
					}
				});
			});
		}
	}
	$(window).on('scroll', function () {
		counter();
	});

})(jQuery);
