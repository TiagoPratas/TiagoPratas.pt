$(document).ready(function(){
	beer.init();
});

var beer = {
	
	settings: {
		var: 0,
		urlSite: '',
		gallery: '',
	},

	init: function() {
		//urlSite = 'beer';
		this.bindActions();
		this.animInit();
		this.scrollInit();
		this.goResize();
	},
	
	bindActions: function() {
		$('#menu-trigger').on("click", function() {
			beer.triggerNav();
		});

		$('.icon-menu').on('click', function(e) {
			e.preventDefault();
			beer.showHideMenu();
		});
	},

	animInit: function() {
		var tl = new TimelineMax();

		var card = $('.card'),
			cerveja = $('.cerveja');

		tl
			.fromTo(card, 1.4, {
				autoAlpha: 0
			}, {
				autoAlpha: 1
			})
			.fromTo(cerveja, 1, {
				autoAlpha: 0,
				x: 50
			}, {
				autoAlpha: 1,
				x: 0
			}, '-=.6')
	},

	showHideMenu: function() {
		var menu = $('.menu'),
			menuList = $('.menu-list li'),
			windowWidth = $(window).width();

		if ( menu.hasClass('is-open') ) {
			
			// Close menu
			var tl = new TimelineMax();

			tl
				.add(TweenMax.staggerToFrom(menuList, .2, {
					y: -24,
					autoAlpha: 0
				}, {
					y: 0,
					autoAlpha: 1
				} .15))
				.to(menu, .7, {
					x: 0,
					ease: Power4.easeOut
				}, '-=.1');
			
			menu.removeClass('is-open');

		} else {
			// Show menu
			menu.addClass('is-open');
			
			var tl = new TimelineMax();

			tl
				.to(menu, 1.2, {
					x: windowWidth,
					ease: Power4.easeOut
				})
				.add(TweenMax.staggerToFrom(menuList, .4, {
					y: 0,
					autoAlpha: 1
				}, {
					y: -24,
					autoAlpha: 0
				} .2), '-=0.6');
		}
	},
	
	scrollInit: function() {
		$(window).scroll(function () {
			var offset = $(document).scrollTop();

			//console.log("offset: " + offset);
			
			if ( offset >= 0 ) {
				var headingsOpacity = 1 - offset / 750,
					headingsPosition = 38 + offset / 30 + "%";
			
				//console.log("opacity: " + headingsOpacity);
				//console.log("top: " + headingsPosition);
			
				$( '.article-header .headings' ).css({
					'opacity'	: headingsOpacity,
					'top'		: headingsPosition
				});
			}
			
		});
	},
	
	goResize: function() {
		function onResize(c,t){onresize=function(){clearTimeout(t);t=setTimeout(c,100)};return c};
		
		onResize(function() {
			// ?
		});
		
	},
	
}



