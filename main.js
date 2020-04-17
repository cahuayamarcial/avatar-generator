/* Template: Sync - Free Mobile App Landing Page HTML Template
   Author: Inovatik
   Created: Dec 2019
   Description: Custom JS file
*/


(function($) {
    "use strict"; 
	
	/* Preloader */
	$(window).on('load', function() {
		var preloaderFadeOutTime = 500;
		function hidePreloader() {
			var preloader = $('.spinner-wrapper');
			setTimeout(function() {
				preloader.fadeOut(preloaderFadeOutTime);
			}, 500);
		}
		hidePreloader();
	});

	
	/* Navbar Scripts */
	// jQuery to collapse the navbar on scroll
    // $(window).on('scroll load', function() {
	// 	if ($(".navbar").offset().top > 60) {
	// 		$(".fixed-top").addClass("top-nav-collapse");
	// 	} else {
	// 		$(".fixed-top").removeClass("top-nav-collapse");
	// 	}
    // });

	// jQuery for page scrolling feature - requires jQuery Easing plugin
	// $(function() {
	// 	$(document).on('click', 'a.page-scroll', function(event) {
	// 		var $anchor = $(this);
	// 		$('html, body').stop().animate({
	// 			scrollTop: $($anchor.attr('href')).offset().top
	// 		}, 600, 'easeInOutExpo');
	// 		event.preventDefault();
	// 	});
	// });

    // closes the responsive menu on menu item click
    $(".navbar-nav li a").on("click", function(event) {
    if (!$(this).parent().hasClass('dropdown'))
        $(".navbar-collapse").collapse('hide');
    });


    /* Image Slider - Swiper */
    var imageSlider = new Swiper('.image-slider', {
        autoplay: {
            delay: 2000,
            disableOnInteraction: false
		},
        loop: false,
        navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
        spaceBetween: 30,
        slidesPerView: 5,
		breakpoints: {
            // when window is <= 516px
            516: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            // when window is <= 767px
            767: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            // when window is <= 991px
            991: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            // when window is <= 1199px
            1199: {
                slidesPerView: 4,
                spaceBetween: 30
            },
        }
    });


    /* Image Lightbox - Magnific Popup */
	$('.popup-link').magnificPopup({
		removalDelay: 300,
		type: 'image',
		callbacks: {
			beforeOpen: function() {
				this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure ' + this.st.el.attr('data-effect'));
			},
			beforeClose: function() {
				$('.mfp-figure').addClass('fadeOut');
			}
		},
		gallery:{
			enabled:true //enable gallery mode
		}
    });
    

    /* Video Lightbox - Magnific Popup */
    $('.popup-youtube, .popup-vimeo').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
        iframe: {
            patterns: {
                youtube: {
                    index: 'youtube.com/', 
                    id: function(url) {        
                        var m = url.match(/[\\?\\&]v=([^\\?\\&]+)/);
                        if ( !m || !m[1] ) return null;
                        return m[1];
                    },
                    src: 'https://www.youtube.com/embed/%id%?autoplay=1'
                },
                vimeo: {
                    index: 'vimeo.com/', 
                    id: function(url) {        
                        var m = url.match(/(https?:\/\/)?(www.)?(player.)?vimeo.com\/([a-z]*\/)*([0-9]{6,11})[?]?.*/);
                        if ( !m || !m[5] ) return null;
                        return m[5];
                    },
                    src: 'https://player.vimeo.com/video/%id%?autoplay=1'
                }
            }
        }
    });


    /* Details Lightbox - Magnific Popup */
	$('.popup-with-move-anim').magnificPopup({
		type: 'inline',
		fixedContentPos: false, /* keep it false to avoid html tag shift with margin-right: 17px */
		fixedBgPos: true,
		overflowY: 'auto',
		closeBtnInside: true,
		preloader: false,
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
    });
    

    /* Counter - CountTo */
	var a = 0;
	$(window).scroll(function() {
		if ($('#counter').length) { // checking if CountTo section exists in the page, if not it will not run the script and avoid errors	
			var oTop = $('#counter').offset().top - window.innerHeight;
			if (a == 0 && $(window).scrollTop() > oTop) {
			$('.counter-value').each(function() {
				var $this = $(this),
				countTo = $this.attr('data-count');
				$({
				countNum: $this.text()
				}).animate({
					countNum: countTo
				},
				{
					duration: 2000,
					easing: 'swing',
					step: function() {
					$this.text(Math.floor(this.countNum));
					},
					complete: function() {
					$this.text(this.countNum);
					//alert('finished');
					}
				});
			});
			a = 1;
			}
		}
    });
    
    
    /* Move Form Fields Label When User Types */
    // for input and textarea fields
    $("input, textarea").keyup(function(){
		if ($(this).val() != '') {
			$(this).addClass('notEmpty');
		} else {
			$(this).removeClass('notEmpty');
		}
    });


    /* Privacy Form */
    $("#privacyForm").validator().on("submit", function(event) {
    	if (event.isDefaultPrevented()) {
            // handle the invalid form...
            pformError();
            psubmitMSG(false, "Please fill all fields!");
        } else {
            // everything looks good!
            event.preventDefault();
            psubmitForm();
        }
    });

    function psubmitForm() {
        // initiate variables with form content
		var name = $("#pname").val();
		var email = $("#pemail").val();
        var select = $("#pselect").val();
        var terms = $("#pterms").val();
        
        $.ajax({
            type: "POST",
            url: "php/privacyform-process.php",
            data: "name=" + name + "&email=" + email + "&select=" + select + "&terms=" + terms, 
            success: function(text) {
                if (text == "success") {
                    pformSuccess();
                } else {
                    pformError();
                    psubmitMSG(false, text);
                }
            }
        });
	}

    function pformSuccess() {
        $("#privacyForm")[0].reset();
        psubmitMSG(true, "Request Submitted!");
        $("input").removeClass('notEmpty'); // resets the field label after submission
    }

    function pformError() {
        $("#privacyForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).removeClass();
        });
	}

    function psubmitMSG(valid, msg) {
        if (valid) {
            var msgClasses = "h3 text-center tada animated";
        } else {
            var msgClasses = "h3 text-center";
        }
        $("#pmsgSubmit").removeClass().addClass(msgClasses).text(msg);
    }
    

    /* Back To Top Button */
    // create the back to top button
    // $('body').prepend('<a href="body" class="back-to-top page-scroll">Back to Top</a>');
    // var amountScrolled = 700;
    // $(window).scroll(function() {
    //     if ($(window).scrollTop() > amountScrolled) {
    //         $('a.back-to-top').fadeIn('500');
    //     } else {
    //         $('a.back-to-top').fadeOut('500');
    //     }
    // });


	/* Removes Long Focus On Buttons */
	$(".button, a, button").mouseup(function() {
		$(this).blur();
	});

})(jQuery);


// Combinations

function* cartesian(head, ...tail) {
    let remainder = tail.length ? cartesian(...tail) : [[]]
    for (let r of remainder) for (let h of head) yield [h, ...r]
}

function multiSort(array, sortObject = {}) {
    const sortKeys = Object.keys(sortObject);
    
    // Return array if no sort object is supplied.
    if (!sortKeys.length) {
        return array;
    }
    
    // Change the values of the sortObject keys to -1, 0, or 1.
    for (let key in sortObject) {
        sortObject[key] = sortObject[key] === 'desc' || sortObject[key] === -1 ? -1
                        : (sortObject[key] === 'skip' || sortObject[key] === 0 ? 0 : 1);
    }
    
    const keySort = (a, b, direction) => {
        direction = direction !== null ? direction : 1;
        
        if (a === b) { // If the values are the same, do not switch positions.
        return 0;
        }
        
        // If b > a, multiply by -1 to get the reverse direction.
        return a > b ? direction : -1 * direction;
    };
    
    return array.sort((a, b) => {
        let sorted = 0;
        let index = 0;
        
        // Loop until sorted (-1 or 1) or until the sort keys have been processed.
        while (sorted === 0 && index < sortKeys.length) {
            const key = sortKeys[index];
            
            if (key) {
                const direction = sortObject[key];
                
                sorted = keySort(a[key], b[key], direction);
                index++;
            }
        }
        
        return sorted;
    });
}



var data = [
    //Heads
    [
        { name: 'Zetsu', item1: 10, item2: 0, item3: 0, item4: 0, item5: 15, item6: 0, item7: 0, item8: 10, cash: 5000, gold: 0, gender: 'M' },
        { name: 'Yahiko', item1: 10, item2: 0, item3: 0, item4: 5, item5: 0, item6: 0, item7: 0, item8: 15, cash: 7000, gold: 0, gender: 'M' },
        { name: 'Naruto Sabio', item1: 5, item2: 0, item3: 0, item4: 7, item5: 0, item6: 5, item7: 0, item8: 15, cash: 5000, gold: 0, gender: 'M' },
        { name: 'Itachi Uchiha', item1: 0, item2: 0, item3: 5, item4: 0, item5: 10, item6: 0, item7: 0, item8: 10, cash: 5000, gold: 0, gender: 'M' },
        { name: 'Glotzy', item1: 0, item2: 0, item3: 5, item4: 0, item5: 10, item6: 0, item7: 0, item8: 10, cash: 0, gold: 200000, gender: 'M' },
        { name: 'Heavenly Knight', item1: 15, item2: 0, item3: 0, item4: 15, item5: 0, item6: 0, item7: 15, item8: 10, cash: 10000, gold: 0, gender: 'M' },
        { name: 'Mr Gum', item1: 15, item2: 0, item3: 0, item4: 5, item5: 15, item6: 12, item7: 0, item8: 10, cash: 10000, gold: 0, gender: 'M' },
        { name: 'Glowing Warrior', item1: 10, item2: 0, item3: 0, item4: 5, item5: 5, item6: 0, item7: 0, item8: 0, cash: 10, gold: 1500000, gender: 'M' },
        { name: 'Raccoon', item1: 0, item2: 5, item3: 10, item4: 0, item5: 0, item6: 0, item7: 0, item8: 10, cash: 0, gold: 500000, gender: 'M' },
        { name: 'Pony', item1: 20, item2: 0, item3: 10, item4: 5, item5: 0, item6: 0, item7: 0, item8: 15, cash: 15000, gold: 0, gender: 'M' },
        { name: 'Popcorn SET', item1: 14, item2: 14, item3: 11, item4: 12, item5: 0, item6: 0, item7: 0, item8: 15, cash: 22000, gold: 0, gender: 'M' },
        { name: 'Dragon Costume', item1: 0, item2: 20, item3: 20, item4: 20, item5: 0, item6: 0, item7: 0, item8: 15, cash: 9990, gold: 0, gender: 'M' },
        { name: 'KoreaGunba', item1: 0, item2: 18, item3: 25, item4: 0, item5: 0, item6: 12, item7: 0, item8: 18, cash: 15000, gold: 0, gender: 'M' },
        { name: "Boy's fur coat", item1: 0, item2: 0, item3: 0, item4: 7, item5: 7, item6: 0, item7: 0, item8: 8, cash: 3000, gold: 600000, gender: 'M' },
        { name: 'Dragon Set', item1: 10, item2: 10, item3: 25, item4: 0, item5: 12, item6: 0, item7: 0, item8: 10, cash: 19000, gold: 0, gender: 'M' },
        { name: 'Elf', item1: 0, item2: 0, item3: 0, item4: 5, item5: 0, item6: 0, item7: 0, item8: 10, cash: 0, gold: 500000, gender: 'M' },
        { name: 'Dark Man', item1: 10, item2: 0, item3: 0, item4: 0, item5: 5, item6: 0, item7: 0, item8: 10, cash: 5000, gold: 1000000, gender: 'M' },
        { name: 'Doe', item1: 12, item2: 5, item3: 0, item4: 0, item5: 5, item6: 0, item7: 0, item8: 15, cash: 6500, gold: 1300000, gender: 'M' },
        { name: 'Water', item1: 0, item2: 0, item3: 20, item4: 0, item5: 10, item6: 0, item7: 25, item8: 15, cash: 9000, gold: 0, gender: 'M' },
        { name: 'Gantz', item1: 0, item2: 12, item3: 0, item4: 0, item5: 12, item6: 12, item7: 0, item8: 15, cash: 4500, gold: 900000, gender: 'M' },
        { name: 'BFX', item1: 0, item2: 0, item3: 7, item4: 10, item5: 0, item6: 5, item7: 0, item8: 15, cash: 0, gold: 500000, gender: 'M' },
        { name: 'Sacred Angel', item1: 15, item2: 0, item3: 15, item4: 5, item5: 15, item6: 0, item7: 0, item8: 15, cash: 20000, gold: 0, gender: 'M' },
        { name: 'Fruit', item1: 10, item2: 0, item3: 0, item4: 6, item5: 0, item6: 0, item7: 0, item8: 7, cash: 9000, gold: 2000000, gender: 'M' },
        { name: 'Alyan', item1: 0, item2: 0, item3: 0, item4: 0, item5: 10, item6: 5, item7: 0, item8: 7, cash: 0, gold: 500000, gender: 'M' },
        { name: 'Shamanist', item1: 0, item2: 7, item3: 7, item4: 0, item5: 7, item6: 0, item7: 0, item8: 0, cash: 2075, gold: 415000, gender: 'M' },
        { name: 'Mr. Sushi', item1: 0, item2: 10, item3: 12, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 3000, gold: 0, gender: 'M' },
        { name: 'Latin Hair', item1: 0, item2: 9, item3: 0, item4: 0, item5: 6, item6: 6, item7: 0, item8: 0, cash: 2075, gold: 415000, gender: 'M' },
        { name: 'Arabian Prince', item1: 0, item2: 0, item3: 0, item4: 12, item5: 12, item6: 0, item7: 0, item8: 0, cash: 2825, gold: 565000, gender: 'M' },
        { name: 'Persian king', item1: 5, item2: 0, item3: 0, item4: 12, item5: 12, item6: 0, item7: 0, item8: 0, cash: 3700, gold: 740000, gender: 'M' },
        { name: 'Musketeer', item1: 0, item2: 0, item3: 8, item4: 0, item5: 8, item6: 0, item7: 0, item8: 6, cash: 2250, gold: 450000, gender: 'M' },
        { name: 'Dracula', item1: 0, item2: 0, item3: 0, item4: 6, item5: 0, item6: 0, item7: 0, item8: 6, cash: 1500, gold: 300000, gender: 'M' },
        { name: 'Ocean King', item1: 0, item2: 6, item3: 9, item4: 0, item5: 0, item6: 0, item7: 0, item8: 7, cash: 1775, gold: 355000, gender: 'M' },
        { name: 'Skeleton', item1: 0, item2: 0, item3: 30, item4: 0, item5: 20, item6: 0, item7: 0, item8: 25, cash: 8000, gold: 0, gender: 'M' },
        { name: 'Kendo Helmet', item1: 3, item2: 0, item3: 7, item4: 0, item5: 11, item6: 0, item7: 0, item8: 0, cash: 2150, gold: 430000, gender: 'M' },
        { name: 'Ice Hockey Helmet', item1: 9, item2: 0, item3: 0, item4: 0, item5: 12, item6: 0, item7: 0, item8: 0, cash: 3750, gold: 750000, gender: 'M' },
        { name: 'Elf Hair', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 3450, gold: 690000, gender: 'M' },
        { name: 'Muaythai Hair', item1: 0, item2: 0, item3: 9, item4: -3, item5: 9, item6: 0, item7: 0, item8: 0, cash: 1275, gold: 255000, gender: 'M' },
        { name: 'Samurai Hair', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 1325, gold: 265000, gender: 'M' },
        { name: 'M.Hair', item1: 0, item2: 0, item3: 0, item4: -3, item5: 0, item6: 12, item7: 0, item8: 6, cash: 1025, gold: 205000, gender: 'M' },
        { name: 'Red Devil', item1: 0, item2: 0, item3: 3, item4: 6, item5: 0, item6: 0, item7: 0, item8: 6, cash: 1500, gold: 300000, gender: 'M' },
        { name: 'Heavenly', item1: 9, item2: 16, item3: 25, item4: 0, item5: 0, item6: 12, item7: 0, item8: 0, cash: 1500, gold: 0, gender: 'M' },
        { name: 'Air Robot', item1: 0, item2: 0, item3: 10, item4: 15, item5: 0, item6: 5, item7: 9, item8: 15, cash: 0, gold: 600000, gender: 'M' },
        { name: 'Happy Day', item1: 10, item2: 0, item3: 0, item4: 5, item5: 5, item6: 0, item7: 0, item8: 10, cash: 0, gold: 500000, gender: 'M' },
        { name: 'Golden man', item1: 0, item2: 0, item3: 15, item4: 0, item5: 10, item6: 0, item7: 0, item8: 15, cash: 5000, gold: 1000000, gender: 'M' },
        { name: 'Mummy (RARE)', item1: 5, item2: 0, item3: 25, item4: 5, item5: 5, item6: 0, item7: 0, item8: 25, cash: 7000, gold: 0, gender: 'M' },
        { name: 'Acolyte', item1: 10, item2: 0, item3: 0, item4: 0, item5: 5, item6: 0, item7: 0, item8: 10, cash: 0, gold: 300000, gender: 'M' },
        { name: 'Green Alien', item1: 0, item2: 0, item3: 0, item4: 0, item5: 10, item6: 10, item7: 0, item8: 10, cash: 0, gold: 400000, gender: 'M' },
        { name: 'Blond', item1: 5, item2: 0, item3: 5, item4: 0, item5: 0, item6: 0, item7: 10, item8: 15, cash: 0, gold: 500000, gender: 'M' },
        { name: 'Agez', item1: 15, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 15, cash: 0, gold: 900000, gender: 'M' },
        { name: 'Jiren', item1: 21, item2: 0, item3: 19, item4: 0, item5: 0, item6: 21, item7: 0, item8: 21, cash: 19900, gold: 0, gender: 'M' },
        { name: 'Ultra Instinct', item1: 24, item2: 5, item3: 10, item4: 0, item5: 0, item6: 24, item7: 0, item8: 22, cash: 19900, gold: 0, gender: 'M' },
        { name: 'White', item1: 10, item2: 0, item3: 0, item4: 0, item5: 10, item6: 10, item7: 0, item8: 10, cash: 8000, gold: 0, gender: 'M' },
        { name: 'Napoleon', item1: 0, item2: 15, item3: 25, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 3380000, gender: 'M' },
        { name: 'Legendary Samurai', item1: 0, item2: 0, item3: 20, item4: 20, item5: 20, item6: 0, item7: 0, item8: 20, cash: 22000, gold: 0, gender: 'M' },
        { name: 'Prince Of Fire', item1: 18, item2: 18, item3: 18, item4: 0, item5: 0, item6: 0, item7: 0, item8: 18, cash: 22000, gold: 0, gender: 'M' },
        { name: 'Marvin T.M', item1: 0, item2: 0, item3: 0, item4: 0, item5: 40, item6: 0, item7: 0, item8: 15, cash: 6000, gold: 0, gender: 'M' },
        { name: 'Space Robot', item1: 5, item2: 5, item3: 0, item4: 0, item5: 25, item6: 5, item7: 25, item8: 15, cash: 8888, gold: 0, gender: 'M' },
        { name: 'White Wolf', item1: 12, item2: 0, item3: 0, item4: 0, item5: 15, item6: 0, item7: 0, item8: 10, cash: 4000, gold: 0, gender: 'M' },
        { name: 'Kind Skeleton', item1: 15, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 10, cash: 0, gold: 800000, gender: 'M' },
        { name: 'Rat Boy', item1: 0, item2: 25, item3: 20, item4: 15, item5: 0, item6: 0, item7: 0, item8: 20, cash: 9990, gold: 0, gender: 'M' },
        { name: 'Aztec Warrior', item1: 12, item2: 0, item3: 0, item4: 0, item5: 5, item6: 12, item7: 0, item8: 12, cash: 5000, gold: 0, gender: 'M' },
        { name: 'Man Of Crystals', item1: 15, item2: 0, item3: 12, item4: 0, item5: 5, item6: 0, item7: 0, item8: 0, cash: 4000, gold: 0, gender: 'M' },
        { name: 'Fire Man', item1: 12, item2: 0, item3: 0, item4: 0, item5: 10, item6: 0, item7: 0, item8: 15, cash: 4000, gold: 0, gender: 'M' },
        { name: 'Chick Magnet', item1: 5, item2: 0, item3: 20, item4: 0, item5: 15, item6: 20, item7: 20, item8: 15, cash: 15000, gold: 0, gender: 'M' },
        { name: 'Flower Buddies', item1: 0, item2: 25, item3: 0, item4: 0, item5: 25, item6: 10, item7: 0, item8: 0, cash: 15000, gold: 0, gender: 'M' },
        { name: 'Dark Angel', item1: 0, item2: 0, item3: 15, item4: 15, item5: 25, item6: 0, item7: 8, item8: 0, cash: 15000, gold: 0, gender: 'M' },
        { name: 'Urban', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 3500, gold: 700000, gender: 'M' },
        { name: 'Snorlax', item1: 0, item2: 15, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 15, cash: 4000, gold: 0, gender: 'M' },
        { name: 'SSJ Legendario', item1: 0, item2: 20, item3: 20, item4: 10, item5: 10, item6: 0, item7: 0, item8: 15, cash: 7000, gold: 0, gender: 'M' },
        { name: 'WarRed Evil', item1: 0, item2: 7, item3: 0, item4: 0, item5: 10, item6: 0, item7: 0, item8: 15, cash: 2000, gold: 0, gender: 'M' },
        { name: 'Shadow', item1: 0, item2: 0, item3: 15, item4: 0, item5: 0, item6: 10, item7: 6, item8: 0, cash: 4000, gold: 0, gender: 'M' },
        { name: 'Jiraiya', item1: 0, item2: 0, item3: 10, item4: 0, item5: 0, item6: 5, item7: 0, item8: 9, cash: 0, gold: 1000000, gender: 'M' },
        { name: 'Madara Uchiha', item1: 0, item2: 0, item3: 10, item4: 0, item5: 8, item6: 7, item7: 0, item8: 10, cash: 4000, gold: 0, gender: 'M' },
        { name: 'Nyx Jomel', item1: 5, item2: 20, item3: 10, item4: 0, item5: 0, item6: 0, item7: 0, item8: 12, cash: 6000, gold: 3000000, gender: 'M' },
        { name: 'Orochimaru', item1: 0, item2: 10, item3: 15, item4: 10, item5: 0, item6: 5, item7: 0, item8: 0, cash: 3000, gold: 0, gender: 'M' },
        { name: 'Blue', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 9000, gold: 1800000, gender: 'M' },
        { name: 'Magic', item1: 0, item2: 0, item3: 15, item4: 10, item5: 0, item6: 6, item7: 7, item8: 0, cash: 0, gold: 1500000, gender: 'M' },
        { name: 'Locked', item1: 0, item2: 5, item3: 15, item4: 10, item5: 0, item6: 0, item7: 0, item8: 10, cash: 7000, gold: 0, gender: 'M' },
        { name: 'Mario Bros', item1: 0, item2: 0, item3: 9, item4: 5, item5: 0, item6: 0, item7: 10, item8: 7, cash: 0, gold: 1000000, gender: 'M' },
        { name: 'Andres', item1: 12, item2: 12, item3: 0, item4: 0, item5: 0, item6: 12, item7: 12, item8: 12, cash: 9000, gold: 0, gender: 'M' },
        { name: 'Anonymous', item1: 0, item2: 10, item3: 0, item4: 10, item5: 5, item6: 15, item7: 15, item8: 10, cash: 0, gold: 900000, gender: 'M' },
        { name: 'Shadow Warrior', item1: 5, item2: 0, item3: 12, item4: 0, item5: 12, item6: 0, item7: 5, item8: 10, cash: 8000, gold: 1500000, gender: 'M' },
        { name: 'Zeno Sama', item1: 17, item2: 0, item3: 0, item4: 0, item5: 17, item6: 0, item7: 17, item8: 17, cash: 6000, gold: 0, gender: 'M' },
        { name: 'Nyx Blade', item1: 0, item2: 0, item3: 10, item4: 0, item5: 0, item6: 9, item7: 0, item8: 10, cash: 4000, gold: 800000, gender: 'M' },
        { name: 'Enchanted', item1: 10, item2: 0, item3: 0, item4: 10, item5: 0, item6: 0, item7: 9, item8: 0, cash: 7000, gold: 3000000, gender: 'M' },
        { name: 'Warrior of lights', item1: 5, item2: 0, item3: 15, item4: 5, item5: 0, item6: 5, item7: 20, item8: 10, cash: 0, gold: 5000000, gender: 'M' },
        { name: 'Yoda', item1: 0, item2: 0, item3: 0, item4: 0, item5: 10, item6: 0, item7: 10, item8: 10, cash: 0, gold: 300000, gender: 'M' },
        { name: 'Brock', item1: 10, item2: 5, item3: 10, item4: 5, item5: 0, item6: 5, item7: 10, item8: 5, cash: 4500, gold: 0, gender: 'M' },
        { name: 'Gohan Dbz Super', item1: 10, item2: 0, item3: 0, item4: 5, item5: 10, item6: 0, item7: 15, item8: 5, cash: 7500, gold: 1500000, gender: 'M' },
        { name: 'Pokegamer', item1: 0, item2: 0, item3: 15, item4: 5, item5: 10, item6: 15, item7: 0, item8: 15, cash: 8000, gold: 3000000, gender: 'M' },
        { name: 'Christmas', item1: 0, item2: 0, item3: 0, item4: 20, item5: 15, item6: 0, item7: 10, item8: 10, cash: 9000, gold: 1800000, gender: 'M' },
        { name: 'Saul', item1: 0, item2: 0, item3: 20, item4: 0, item5: 15, item6: 0, item7: 0, item8: 10, cash: 8000, gold: 2500000, gender: 'M' },
        { name: 'One Punch Man', item1: 0, item2: 15, item3: 8, item4: 8, item5: 15, item6: 0, item7: 0, item8: 10, cash: 3000, gold: 0, gender: 'M' },
        { name: 'Jack Skellington', item1: 0, item2: 15, item3: 0, item4: 20, item5: 0, item6: 0, item7: 0, item8: 10, cash: 4000, gold: 2000000, gender: 'M' },
        { name: 'Jocker', item1: 0, item2: 15, item3: 9, item4: 0, item5: 9, item6: 6, item7: 0, item8: 12, cash: 8000, gold: 2500000, gender: 'M' },
        { name: 'Flame Man', item1: 21, item2: 0, item3: 10, item4: 0, item5: 5, item6: 0, item7: 0, item8: 20, cash: 10000, gold: 0, gender: 'M' },
        { name: 'Polar Bear', item1: 10, item2: 0, item3: 0, item4: 10, item5: 10, item6: 0, item7: 0, item8: 25, cash: 4000, gold: 0, gender: 'M' }, // PÁGINA 20
        // { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        // { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        // { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
    ],
    //Bodies
    [
        { name: 'Zetsu', item1: 10, item2: 0, item3: 0, item4: 10, item5: 0, item6: 5, item7: 0, item8: 0, cash: 5000, gold: 0, gender: 'M' },
        { name: 'Yahiko', item1: 5, item2: 0, item3: 0, item4: 10, item5: 0, item6: 0, item7: 0, item8: 15, cash: 7000, gold: 0, gender: 'M' },
        { name: 'Naruto Sabio', item1: 0, item2: 0, item3: 0, item4: 15, item5: 0, item6: 0, item7: 0, item8: 10, cash: 5000, gold: 0, gender: 'M' },
        { name: 'Itachi Uchiha', item1: 0, item2: 0, item3: 7, item4: 0, item5: 5, item6: 0, item7: 0, item8: 10, cash: 5000, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
    ],
    //Glasses
    [
        { name: 'Galactic Sword', item1: 0, item2: 0, item3: 0, item4: 10, item5: 0, item6: 0, item7: 0, item8: 6, cash: 0, gold: 500000, gender: 'MF' },
        { name: 'Easter 2019 (RARE)', item1: 0, item2: 0, item3: 0, item4: 10, item5: 0, item6: 15, item7: 10, item8: 15, cash: 8000, gold: 0, gender: 'MF' },
        { name: 'Cone II', item1: 0, item2: 0, item3: 8, item4: 0, item5: 8, item6: 0, item7: 0, item8: 8, cash: 0, gold: 400000, gender: 'MF' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
    ],
    //Flags
    [
        { name: 'Hell Weapon', item1: 0, item2: 5, item3: 6, item4: 0, item5: 0, item6: 0, item7: 0, item8: 6, cash: 0, gold: 500000, gender: 'M' },
        { name: 'Star Weapon', item1: 0, item2: 0, item3: 0, item4: 5, item5: 6, item6: 0, item7: 0, item8: 6, cash: 0, gold: 500000, gender: 'M' },
        { name: 'Magic Potion', item1: 0, item2: 0, item3: 0, item4: 10, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 70000, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
        { name: '', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 0, gender: 'M' },
    ]
]