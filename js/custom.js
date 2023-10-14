$(function(){

	$('#menu').mmenu({
		extensions	: [ 'effect-slide-menu', 'pageshadow' ],
		searchfield	: true,
		navbar 		: {
			title		: 'القائمة'
		},
		navbars		: [
			{
				position	: 'top',
				content		: [ 'searchfield' ]
			}, {
				position	: 'top',
				content		: [
					'prev',
					'title',
					'close'
				]
			}
		]
	});
	
	$(".header .headerCenter .shoppingCart .linkLeft").click(function () {
		
		$(this).siblings().toggleClass("active")
		
	});
	
	
	
	
	/****** start nice scroll ******/
	
	$(".header .headerCenter .sub .items").niceScroll({
	    cursorborderradius: 10,
		scrollspeed: 60,
		mousescrollstep: 38,
		cursorwidth: 4,
		cursorborder: 0,
		cursorcolor: '#cacaca'
		
		
    });
    
	/****** End nice scroll ******/
	
	$('.the-slider-inner').bxSlider({
		useCSS: false,
		auto: true,
		controls: true,
		pager: true,
		autoHover: true,
		responsive: true,
		nextSelector: '#slider-next',
		prevSelector: '#slider-prev',
		nextText: '<i class="fa fa-angle-right"></i>',
		prevText: '<i class="fa fa-angle-left"></i>'
	});
	
	
	
	  var owlProducts = $('#owlProducts');
	 
	  owlProducts.owlCarousel({
	      
	      
	      items : 4, //10 items above 1000px browser width
	      itemsDesktop : [1200,4], //5 items between 1000px and 901px
	      itemsDesktopSmall : [979,2], // betweem 900px and 601px
	      itemsTablet: [768,2], //2 items between 600 and 0
	      itemsMobile : [479,1],// itemsMobile disabled - inherit from itemsTablet option
	      slideSpeed : 500,
	      paginationSpeed : 400,
	      pagination:false,
	      navigation:true,
	      autoPlay:true,
	      navigationText:["<i class='fa fa-angle-left fa-2x'></i>","<i class='fa fa-angle-right fa-2x'></i>"]
	  });	
	
	  var owlProducts2 = $('#owlProducts2');
	 
	  owlProducts2.owlCarousel({
	      
	      
	      items : 4, //10 items above 1000px browser width
	      itemsDesktop : [1200,4], //5 items between 1000px and 901px
	      itemsDesktopSmall : [979,2], // betweem 900px and 601px
	      itemsTablet: [768,2], //2 items between 600 and 0
	      itemsMobile : [479,1],// itemsMobile disabled - inherit from itemsTablet option
	      slideSpeed : 500,
	      paginationSpeed : 400,
	      pagination:false,
	      navigation:true,
	      autoPlay:true,
	      navigationText:["<i class='fa fa-angle-left fa-2x'></i>","<i class='fa fa-angle-right fa-2x'></i>"]
	  });	
	
	  var owlProduct3 = $('#owlProduct3');
	 
	  owlProduct3.owlCarousel({
	      
	      
	      items : 4, //10 items above 1000px browser width
	      itemsDesktop : [1200,4], //5 items between 1000px and 901px
	      itemsDesktopSmall : [979,2], // betweem 900px and 601px
	      itemsTablet: [768,2], //2 items between 600 and 0
	      itemsMobile : [479,1],// itemsMobile disabled - inherit from itemsTablet option
	      slideSpeed : 500,
	      paginationSpeed : 400,
	      pagination:false,
	      navigation:true,
	      autoPlay:true,
	      navigationText:["<i class='fa fa-angle-left fa-2x'></i>","<i class='fa fa-angle-right fa-2x'></i>"]
	  });	
	
	
	$(".select-durtion li ul li").click(function (){

		var myButton = $(this).attr("id");
		var value = $(this).attr("value");

		$(this).addClass("active").siblings().removeClass("active");
		
		  $(this).parent().parent().children().first().text(myButton);

		$(".vps-price .header-panel .price-tabs-"+value).hide();
		
		$("." + myButton +"-"+value).fadeIn();
		
		
	});
	
	
	$(".tabsBtns li").click(function () {
		
		var myButton = $(this).attr("id"),
			parent = $(this).parent().attr("id");
		
		$(this).addClass("active").siblings().removeClass("active");
		
		$("."+parent+" .tab").hide();
		
		$("."+parent+" ." + myButton).fadeIn();
		
	});
	
		$("#PriceSlider").rangeSlider({
        bounds: { max: 7000,min: 1},
        arrows: false,
        defaultValues: {min: $("#MinPrice").text(), max: $("#MaxPrice").text()},
        symmetricPositionning: true,
        range: {min: 3000}
    });
    $("#PriceSlider").bind("valuesChanging", function (e, data) {
        $("#MinPrice").text(parseInt(data.values.min));
        $("#MaxPrice").text(parseInt(data.values.max));

        });
	
	

	$(".sideMenu li a").click(function () {
		
		$(this).next().slideToggle(500);
		
		$(".sideMenu li .accordionMenu").not($(this).next()).slideUp(500);
		
		$(this).parent().toggleClass("active").siblings().removeClass("active");

	});
	
	

		$('.carousel-indicators').bxSlider({
		  	mode: 'vertical',
 			auto: true,
		    autoControls: true,
		    speed: 500,
	        minSlides: 3,
		    maxSlides: 3,
		    moveSlides: 1,
			nextSelector: '#carousel-next',
			prevSelector: '#carousel-prev',
			nextText: '<i class="fa fa-angle-up"></i>',
			prevText: '<i class="fa fa-angle-down"></i>'
		});
		

	$('.rate').raty({
		score:2,
		starOff: 'images/star-off.png',
		starOn: 'images/star-on.png'	
	});
	
	
});
