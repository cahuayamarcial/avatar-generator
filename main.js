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
    ],
    //Bodies
    [
        { name: 'Zetsu', item1: 10, item2: 0, item3: 0, item4: 10, item5: 0, item6: 5, item7: 0, item8: 0, cash: 5000, gold: 0, gender: 'M' },
        { name: 'Yahiko', item1: 5, item2: 0, item3: 0, item4: 10, item5: 0, item6: 0, item7: 0, item8: 15, cash: 7000, gold: 0, gender: 'M' },
        { name: 'Naruto Sabio', item1: 0, item2: 0, item3: 0, item4: 15, item5: 0, item6: 0, item7: 0, item8: 10, cash: 5000, gold: 0, gender: 'M' },
        { name: 'Itachi Uchiha', item1: 0, item2: 0, item3: 7, item4: 0, item5: 5, item6: 0, item7: 0, item8: 10, cash: 5000, gold: 0, gender: 'M' },
    ],
    //Glasses
    [
        { name: 'Galactic Sword', item1: 0, item2: 0, item3: 0, item4: 10, item5: 0, item6: 0, item7: 0, item8: 6, cash: 0, gold: 500000, gender: 'MF' },
        { name: 'Easter 2019 (RARE)', item1: 0, item2: 0, item3: 0, item4: 10, item5: 0, item6: 15, item7: 10, item8: 15, cash: 8000, gold: 0, gender: 'MF' },
        { name: 'Cone II', item1: 0, item2: 0, item3: 8, item4: 0, item5: 8, item6: 0, item7: 0, item8: 8, cash: 0, gold: 400000, gender: 'MF' },
    ],
    //Flags
    [
        { name: 'Hell Weapon', item1: 0, item2: 5, item3: 6, item4: 0, item5: 0, item6: 0, item7: 0, item8: 6, cash: 0, gold: 500000, gender: 'M' },
        { name: 'Star Weapon', item1: 0, item2: 0, item3: 0, item4: 5, item5: 6, item6: 0, item7: 0, item8: 6, cash: 0, gold: 500000, gender: 'M' },
        { name: 'Magic Potion', item1: 0, item2: 0, item3: 0, item4: 10, item5: 0, item6: 0, item7: 0, item8: 0, cash: 0, gold: 70000, gender: 'M' },
    ]
]