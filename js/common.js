$(document).ready(function() {
 //dropdown menu в header
 $(".header__bars").click(function(){
 	$(".header_menu").slideToggle();
 });

 $(".icon-close").click(function(){
 	$(".header_menu").slideToggle();
 });

 //open catalog
 $(".catalog__button").click(function() {
 	$(".catalog_container").slideToggle();
 });

// burger close and open
 $(".header__bars").on("click", function() {
 	$(this).toggleClass("active");
 	$(".icon-close").toggle(),$(".header__bars").hide(),$(".header__phone").hide();
 })

 $(".icon-close").on("click", function() {
 	$(this).toggleClass("active");
 	$(".header__bars").toggle(),$(".icon-close").hide(),$(".header__phone").show();
 })

//jquery tabs
$(".tab_item").not(":first").hide();
$(".infoblock .tab").click(function() {
	$(".infoblock .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

// arrows slider
 $('.slider_slick').slick({
  nextArrow: '<div class="next_button "><i class="fa fa-angle-right"></i></div>',
  prevArrow: '<div class="prev_button"><i class="fa fa-angle-left"></i></div>',
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: true,
  slidesToShow: 1,
  adaptiveHeight: true,
  infinite: true,
  centerPadding: '0px',
  slidesToScroll: 1,
 centerMode: true,
 });
/*$(".popup__button").click(function() {
 	 $(location).attr('href','thank_you.html');
 	}); */

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();
		//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/
	/*var owl = $(".carousel");
	owl.owlCarousel({
		items : 1,
	});
	owl.on("mousewheel", ".owl-wrapper", function (e) {
		if (e.deltaY > 0) {
			owl.trigger("owl.prev");
		} else {
			owl.trigger("owl.next");
		}
		e.preventDefault();
	});
	$(".next_button").click(function(){
		owl.trigger("owl.next");
	});
	$(".prev_button").click(function(){
		owl.trigger("owl.prev");
	}); */


	/*
	//Таймер обратного отсчета
	//Документация: http://keith-wood.name/countdown.html
	//<div class="countdown" date-time="2015-01-07"></div>
	var austDay = new Date($(".countdown").attr("date-time"));
	$(".countdown").countdown({until: austDay, format: 'yowdHMS'});

	

	//Навигация по Landing Page
	//$(".top_mnu") - это верхняя панель со ссылками.
	//Ссылки вида <a href="#contacts">Контакты</a>
	$(".top_mnu").navigation();

	//Добавляет классы дочерним блокам .block для анимации
	//Документация: http://imakewebthings.com/jquery-waypoints/
	$(".block").waypoint(function(direction) {
		if (direction === "down") {
			$(".class").addClass("active");
		} else if (direction === "up") {
			$(".class").removeClass("deactive");
		};
	}, {offset: 100});

	//Плавный скролл до блока .div по клику на .scroll
	//Документация: https://github.com/flesler/jquery.scrollTo
	$("a.scroll").click(function() {
		$.scrollTo($(".div"), 800, {
			offset: -90
		});
	});

	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	
	*/
	/*
//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#callback").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("#callback").serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});
	*/
});