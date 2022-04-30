(function ($) {
	'use strict';

	// Preloader js    
	$(window).on('load', function () {
		$('.preloader').fadeOut(700);
	});

	// Sticky Menu
	$(window).scroll(function () {
		var height = $('.top-header').innerHeight();
		if ($('header').offset().top > 10) {
			$('.top-header').addClass('hide');
			$('.navigation').addClass('nav-bg');
			$('.navigation').css('margin-top', '-' + height + 'px');
		} else {
			$('.top-header').removeClass('hide');
			$('.navigation').removeClass('nav-bg');
			$('.navigation').css('margin-top', '-' + 0 + 'px');
		}
	});

	// Background-images
	$('[data-background]').each(function () {
		$(this).css({
			'background-image': 'url(' + $(this).data('background') + ')'
		});
	});

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
				$('.nav-link').each(function(){
					// console.log("here");
					// console.log(this.parentNode);
					if (this.text.toLowerCase() == $('#info').attr('data-pagetype').toLowerCase()){
						if(!this.parentElement.classList.contains('active')){
							this.parentElement.classList.add('active');
						}
						if(this.parentElement.classList.contains('@@'+this.text.toLowerCase())){
							this.parentElement.classList.remove('@@'+this.text.toLowerCase());
						}
					}
					else{
						if(this.parentElement.classList.contains('active')){
							this.parentElement.classList.remove('active');
						}
						if(!this.parentElement.classList.contains('@@'+this.text.toLowerCase())){
							this.parentElement.classList.add('@@'+this.text.toLowerCase());
						}
					}
				});
			}
			catch(e){
			nav_handle();
			}
		},200);
	}

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
