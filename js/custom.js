jQuery(document).ready(function ($) {
	$('.banner-slideshow').owlCarousel({
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		loop: true,
		nav: true,
		items: 1,
		navText: ["<i class='icon-chevron-left'></i>", "<i class='icon-chevron-right'></i>"],
		lazyLoad: true,
		lazyLoadEager: 1,
		responsive: {
			0: {
				items: 1,
				dots: true,
				nav: false,
			},
			768: {
				items: 1,
				dots: false,
				nav: false,
			},
			1024: {
				items: 1,
				dots: true
			}
		},
	});


	$('.slider .owl-carousel.ndots-col3').owlCarousel({
		autoplay: false,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		loop: true,
		nav: true,
		navText: ["<i class='icon-arrow-prev'></i>", "<i class='icon-arrow-next'></i>"],
		items: 3,
		dots: false,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			1024: {
				items: 3
			}
		},
		lazyLoad: true
	});

	$('.slider .owl-carousel.fs-col3').owlCarousel({
		autoplay: false,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		loop: true,
		nav: false,
		dots: true,
		navText: ["<i class='icon-chevron-left'></i>", "<i class='icon-chevron-right'></i>"],
		items: 3,
		responsive: {
			0: {
				items: 1,
				dots: true,
			},
			768: {
				items: 2,
				dots: true
			},
			1024: {
				items: 3
			}
		},
		lazyLoad: true
	});

	$('.slider .list-utilities.owl-carousel.col2').owlCarousel({
		autoplay: false,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		loop: true,
		nav: true,
		navText: ["<i class='icon-chevron-left'></i>", "<i class='icon-chevron-right'></i>"],
		items: 2,
		responsive: {
			0: {
				items: 2.2,
				dots: false,
				nav: false
			},
			768: {
				items: 2,
				dots: true
			}
		},
		lazyLoad: true
	});

	$('.slider.content-dvqt .owl-carousel.col2').owlCarousel({
		loop: true,
		navText: ["<i class='icon-chevron-left'></i>", "<i class='icon-chevron-right'></i>"],
		responsive: {
			0: {
				items: 1.5,
				dots: false,
				nav: false,
			},
			768: {
				items: 2,
				dots: true,
				nav: true
			}
		},
	});

	$('.slider .col1-sp.owl-carousel').owlCarousel({
		responsive: {
			0: {
				loop: true,
				items: 1.1,
				dots: false,
				nav: false,
				autoWidth: false,
			}
		},
	});

	$('.slider .col2-sp.owl-carousel').owlCarousel({
		responsive: {
			0: {
				loop: true,
				items: 2.5,
				dots: false,
				nav: false,
				autoWidth: false,
			}
		},
	});

	$('.slider .owl-carousel.col2').owlCarousel({
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		nav: true,
		navText: ["<i class='icon-arrow-prev'></i>", "<i class='icon-arrow-next'></i>"],
		items: 2,
		responsive: {
			0: {
				dots: true,
				nav: true,
				items: 1,
			},
			768: {
				dots: true,
				items: 2
			}
		},
		lazyLoad: true
	});

	$('.postpaid-slider .owl-carousel.manager-postpaid-col2').owlCarousel({
		autoplay: true,
		autoplayTimeout: 3000,
		autoWidth: true,
		autoplayHoverPause: true,
		loop: false,
		nav: true,
		navText: ["<i class='icon-chevron-left'></i>", "<i class='icon-chevron-right'></i>"],
		items: 2,
		responsive: {
			0: {
				dots: true,
				nav: true,
				items: 1,
				autoWidth: false,
			},
			768: {
				dots: true,
				items: 2
			}
		},
		lazyLoad: true
	});

	$('.slider .owl-carousel.payment-col2').owlCarousel({
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		loop: true,
		nav: true,
		navText: ["<i class='icon-chevron-left'></i>", "<i class='icon-chevron-right'></i>"],
		items: 2,
		responsive: {
			0: {
				items: 2,
				dots: true,
				nav: true
			},
			768: {
				items: 2,
				dots: true
			}
		},
		lazyLoad: true
	});

	$('.slider .owl-carousel.entertainment-col2').owlCarousel({
		autoplayTimeout: 3000,
		autoplayHoverPause: false,
		loop: true,
		nav: true,
		navText: ["<i class='icon-chevron-left'></i>", "<i class='icon-chevron-right'></i>"],
		items: 2,
		responsive: {
			0: {
				items: 2,
				dots: false,
				nav: true
			},
			768: {
				items: 2,
				dots: false
			}
		},
		lazyLoad: true
	});

	$('.slider .owl-carousel.voucher-col4').owlCarousel({
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		loop: true,
		nav: true,
		navText: ["<i class='icon-chevron-left'></i>", "<i class='icon-chevron-right'></i>"],
		items: 4,
		responsive: {
			0: {
				items: 2,
				dots: false,
				nav: true
			},
			768: {
				items: 4,
				dots: false
			}
		},
		lazyLoad: true
	});

	$('.slider .owl-carousel.product-col4').owlCarousel({
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		loop: true,
		nav: true,
		navText: ["<i class='icon-chevron-left'></i>", "<i class='icon-chevron-right'></i>"],
		items: 4,
		responsive: {
			0: {
				items: 2,
				dots: false,
				nav: false
			},
			768: {
				items: 4,
				dots: false
			}
		},
		lazyLoad: true
	});

	$('.box-data .owl-carousel').owlCarousel({
		autoWidth: false,
		autoplay: false,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		loop: true,
		nav: true,
		items: 4,
		navText: ["<i class='icon-chevron-left'></i>", "<i class='icon-chevron-right'></i>"],
		responsive: {
			0: {
				items: 1.5,
				dots: false,
				nav: false,
				autoWidth: false
			},
			768: {
				dots: true,
				nav: true
			}
		},
		lazyLoad: true
	});

	$('.package .slider .owl-carousel.col4').owlCarousel({
		responsive: {
			0: {
				items: 2,
				dots: false,
				nav: false,
				autoWidth: false,
			},
			480: {
				items: 2
			},
			768: {
				items: 3,
				dots: true,
				nav: true,
			},
			1024: {
				items: 4
			}
		}
	});

	$('.slider .owl-carousel.col4').owlCarousel({
		autoWidth: false,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		nav: true,
		navText: ["<i class='icon-arrow-prev'></i>", "<i class='icon-arrow-next'></i>"],
		items: 4,
		responsive: {
			0: {
				dots: true,
				nav: true,
				items: 1
			},
			480: {
				dots: true,
				nav: true,
				items: 1
			},
			768: {
				dots: true,
				nav: true,
				items: 2
			},
			1024: {
				items: 4
			}
		},
		lazyLoad: true
	});

	$('.slider .owl-carousel.col5').owlCarousel({
		autoWidth: false,
		autoplay: false,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		loop: true,
		nav: true,
		navText: ["<i class='icon-arrow-prev'></i>", "<i class='icon-arrow-next'></i>"],
		items: 4,
		responsive: {
			0: {
				dots: true,
				nav: true,
				items: 1
			},
			480: {
				dots: true,
				nav: true,
				items: 1
			},
			768: {
				dots: true,
				nav: true,
				items: 2
			},
			1024: {
				items: 4
			},
			1360: {
				items: 5
			}
		},
		lazyLoad: true
	});

	$('.slider .owl-carousel.col1').owlCarousel({
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		loop: true,
		dots: true,
		nav: true,
		navText: ["<i class='icon-arrow-prev'></i>", "<i class='icon-arrow-next'></i>"],
		items: 1,
		responsive: {
			0: {
				dots: true,
				nav: true,
				items: 1,
			},
			768: {
				dots: true,
				nav: true,
				items: 1
			}
		},
		lazyLoad: true
	});

	$('.slider .owl-carousel.hhv-col1').owlCarousel({
		autoplay: false,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		loop: true,
		dots: true,
		nav: true,
		navText: ["<i class='icon-chevron-left'></i>", "<i class='icon-chevron-right'></i>"],
		items: 1,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 1
			},
			1024: {
				items: 1
			}
		},
		lazyLoad: true
	});

	$('.slider .owl-carousel.hhv-col1-nodots').owlCarousel({
		autoplay: false,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		loop: true,
		dots: false,
		nav: true,
		navText: ["<i class='icon-chevron-left'></i>", "<i class='icon-chevron-right'></i>"],
		items: 1,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 1
			},
			1024: {
				items: 1
			}
		},
		lazyLoad: true
	});

	if ($('.slide-slick').length > 0) {
		$('.slide-slick').each(function () {
			var slide_row_desktop = $(this).data('item-desktop');
			var slide_row_tab = $(this).data('item-tab');
			var slide_row_mobile = $(this).data('item-mobile');
			var rows_desktop = 1;
			var rows_tab = 1;
			var rows_mobile = 1;
			if ($(this).data('rows-desktop') > 1)
				rows_desktop = $(this).data('rows-desktop');
			if ($(this).data('rows-tab') > 1)
				rows_tab = $(this).data('rows-tab');
			if ($(this).data('rows-mobile') > 1)
				rows_mobile = $(this).data('rows-mobile');
			if (rows_desktop > 1) {
				$(this).slick({
					rows: rows_desktop,
					slidesPerRow: slide_row_desktop,
					dots: true,
					dotsClass: 'owl-dots',
					arrows: true,
					adaptiveHeight: true,
					prevArrow: '<button type="button" data-role="none" class="slick-prev"><i class="icon-i-prev"></button>',
					nextArrow: '<button type="button" data-role="none" class="slick-next"><i class="icon-i-next"></button>',
					responsive: [{
						breakpoint: 1024,
						settings: {
							slidesPerRow: slide_row_desktop,
							rows: rows_desktop
						}
					}, {
						breakpoint: 768,
						settings: {
							slidesPerRow: slide_row_tab,
							rows: rows_tab
						}
					}, {
						breakpoint: 480,
						settings: {
							slidesPerRow: slide_row_mobile,
							rows: rows_mobile
						}
					}]
				});
			}
		});
	}

	function slide_haft() {
		if ($(window).width() <= 767) {
			$('.dv-internet .owl-carousel .item').width($('.dv-internet .tabs').width() / 1.5);
		} else {
			$('.dv-internet .owl-carousel .item').width($('.dv-internet .tabs').width() / 2.5);
		}
		if ($(window).width() <= 767) {
			$('.slider .owl-carousel.col3 .item').width($('.tabs-service .tabs').width() / 2.5);
		}
	}

	slide_haft();
	$(window).resize(function () {
		slide_haft();
	});

	$('.slider .owl-carousel.col3').owlCarousel({
		autoWidth: false,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		nav: true,
		dots: true,
		items: 3,
		navText: ["<i class='icon-arrow-prev'></i>", "<i class='icon-arrow-next'></i>"],
		responsive: {
			0: {
				dots: true,
				nav: true,
				items: 1
			},
			768: {
				dots: true,
				nav: true,
				items: 2
			},
			1024: {
				dots: true,
				nav: true,
				items: 3
			}
		},
		lazyLoad: true
	});

	$('.dv-internet .owl-carousel').owlCarousel({
		autoWidth: true,
		dots: true,
		loop: true,
		navRewind: true,
		autoplay: true,
		nav: true,
		navText: ["<i class='icon-chevron-left'></i>", "<i class='icon-chevron-right'></i>"],
		responsive: {
			0: {
				margin: 0,
				dots: false,
				nav: false
			},
			768: {
				autoplayTimeout: 3000,
				autoplayHoverPause: true,
				margin: 30
			}
		},
		lazyLoad: true
	});

	$('.ud-viettel .owl-carousel').owlCarousel({
		autoWidth: true,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		loop: true,
		nav: true,
		navText: ["<i class='icon-chevron-left'></i>", "<i class='icon-chevron-right'></i>"],
		responsive: {
			0: {
				items: 1.5,
				dots: false,
				nav: false,
				autoWidth: false
			},
			768: {
				dots: true,
				nav: true
			}
		},
		lazyLoad: true
	});

	$('.box-results.slider-fee .owl-carousel').owlCarousel({
		navText: ["<i class='icon-chevron-left'></i>", "<i class='icon-chevron-right'></i>"],
		loop: true,
		dots: true,
		nav: true,
		responsive: {
			0: {
				items: 1.1,
				dots: true,
				nav: true,
			},
			768: {
				items: 1
			},
		},
	})

	$('.slider-fee .owl-carousel').owlCarousel({
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		loop: true,
		dots: true,
		nav: true,
		navText: ["<i class='icon-chevron-left'></i>", "<i class='icon-chevron-right'></i>"],
		items: 1,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 1
			},
			1024: {
				items: 1
			}
		},
		lazyLoad: true
	});

	$('.slider .owl-carousel.col5').owlCarousel({
		autoWidth: false,
		autoplay: false,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		loop: true,
		nav: true,
		navText: ["<i class='icon-arrow-prev'></i>", "<i class='icon-arrow-next'></i>"],
		items: 5,
		responsive: {
			0: {
				items: 3,
				dots: false,
				nav: false
			},
			768: {
				items: 3,
				dots: true,
				nav: true
			},
			1024: {
				items: 5
			}
		},
		lazyLoad: true
	});

	// Custom slider SP
	$('.slider .js-slider-col1').owlCarousel({
		autoWidth: false,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		loop: false,
		nav: true,
		dots: true,
		items: 2,
		navText: ["<i class='icon-arrow-prev'></i>", "<i class='icon-arrow-next'></i>"],
		responsive: {
			0: {
				dots: false,
				nav: false,
				items: 1
			},
			768: {
				dots: true,
				nav: true,
				items: 1
			},
			1024: {
				dots: true,
				nav: true,
				items: 1
			}
		},
		lazyLoad: true
	});
	$('.slider .js-slider-col2').owlCarousel({
		autoWidth: false,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		loop: false,
		nav: true,
		dots: true,
		items: 2,
		navText: ["<i class='icon-arrow-prev'></i>", "<i class='icon-arrow-next'></i>"],
		responsive: {
			0: {
				dots: false,
				nav: false,
				items: 1.5
			},
			768: {
				dots: true,
				nav: true,
				items: 2
			},
			1024: {
				dots: true,
				nav: true,
				items: 2
			}
		},
		lazyLoad: true
	});

	$('.slider .js-slider-col3').owlCarousel({
		autoWidth: false,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		loop: false,
		nav: true,
		dots: true,
		items: 3,
		navText: ["<i class='icon-arrow-prev'></i>", "<i class='icon-arrow-next'></i>"],
		responsive: {
			0: {
				dots: false,
				nav: false,
				items: 1.5
			},
			768: {
				dots: true,
				nav: true,
				items: 3
			},
			1024: {
				dots: true,
				nav: true,
				items: 3
			}
		},
		lazyLoad: true
	});

	$('.slider .js-slider-col4').owlCarousel({
		autoWidth: false,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		loop: false,
		nav: true,
		dots: true,
		items: 4,
		navText: ["<i class='icon-arrow-prev'></i>", "<i class='icon-arrow-next'></i>"],
		responsive: {
			0: {
				dots: false,
				nav: false,
				items: 1.5
			},
			768: {
				dots: true,
				nav: true,
				items: 3
			},
			1024: {
				dots: true,
				nav: true,
				items: 4
			}
		},
		lazyLoad: true
	});

	$('.slider .js-sp-col4').owlCarousel({
		autoWidth: false,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		loop: false,
		nav: true,
		dots: true,
		items: 4,
		navText: ["<i class='icon-arrow-prev'></i>", "<i class='icon-arrow-next'></i>"],
		responsive: {
			0: {
				dots: false,
				nav: false,
				items: 1.5
			},
			768: {
				dots: true,
				nav: true,
				items: 3
			},
			1024: {
				dots: true,
				nav: true,
				items: 4
			}
		},
		lazyLoad: true
	});

	$('.slider .js-endow-col').owlCarousel({
		autoWidth: false,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		loop: false,
		nav: true,
		dots: true,
		items: 2.5,
		navText: ["<i class='icon-chevron-left'></i>", "<i class='icon-chevron-right'></i>"],
		responsive: {
			0: {
				dots: false,
				nav: false,
				items: 1.5
			},
			768: {
				items: 2.5
			}
		},
		lazyLoad: true
	});

	$('.slider .js-card-col4').owlCarousel({
		autoWidth: false,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		loop: false,
		nav: true,
		dots: true,
		items: 4,
		navText: ["<i class='icon-chevron-left'></i>", "<i class='icon-chevron-right'></i>"],
		responsive: {
			0: {
				dots: false,
				items: 4
			}
		},
		lazyLoad: true
	});

	$('.slider .js-gift-col4').owlCarousel({
		autoWidth: false,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		loop: false,
		nav: true,
		dots: true,
		items: 4,
		navText: ["<i class='icon-chevron-left'></i>", "<i class='icon-chevron-right'></i>"],
		responsive: {
			0: {
				dots: false,
				items: 2
			},
			768: {
				dots: false,
				items: 4
			},
		},
		lazyLoad: true
	});

	$('.side-menu__info').on('click', function (e) {
		$(this).parents('.side-menu--sp').toggleClass('opened');
		e.preventDefault();
	});

	$('.js-step-guide').on('click', function (e) {
		$(this).parents('.step-guide').find('.step-guide__item').removeClass('active');
		$(this).addClass('active');
		$(this).parents('.guide-sp').find('.box-guide__info').removeClass('active');
		$($(this).data('target')).addClass('active');
	});

	$('.js-nav-link-plus').on('click', function (e) {
		$(this).parents('.tabs').find('.nav-item-plus').removeClass('active');
		$(this).parent().addClass('active');
		$(this).parents('.tabs').find('.tab-pane').removeClass('active');
		$($(this).attr('href')).addClass('active');
		$(this).parents('.tabs').find('.step-guide__item').removeClass('active');
		$(this).parents('.tabs').find('.step-guide li:first-child').addClass('active');
		$(this).parents('.tabs').find('.box-guide__info').removeClass('active');
		$(this).parents('.tabs').find('.guide-sp__detail li:first-child').addClass('active');
		e.preventDefault();
	});

	// Chart ============

	function dataDonutChart(arr) {
		for (var id of arr) {
			var percentData1 = $('#' + id).data('percent1');
			var percentData2 = $('#' + id).data('percent2');
			var color1 = $('#' + id).data('color1') ? $('#' + id).data('color1') : '#D8D8D8';
			var color2 = $('#' + id).data('color2') ? $('#' + id).data('color2') : '#EE0033';
			if (percentData1 && percentData2) {
				Highcharts.chart(id, {
					chart: {
						height: 276,
						plotBackgroundColor: null,
						plotBorderWidth: 0,
						plotShadow: false
					},
					title: {
						text: "",
						align: 'center',
						verticalAlign: 'middle',
						y: 60
					},
					tooltip: {
						enabled: false,
						pointFormat: '{series.name} <b>{point.percentage:.1f}%</b>'
					},
					credits: {
						enabled: false
					},
					plotOptions: {
						pie: {
							dataLabels: {
								enabled: false,
								distance: -50,
								style: {
									fontWeight: 'bold',
									color: 'white'
								}
							},
							startAngle: -90,
							endAngle: 90,
							center: ['50%', '75%'],
							size: '100%'
						},
						series: {
							states: {
								hover: {
									enabled: false
								},
								inactive: {
									opacity: .85,
								},
							}
						}
					},
					series: [{

						type: 'pie',
						name: '',
						innerSize: '90%',
						data: [
							['Lưu lượng đã sử dụng ', percentData1],
							['Lưu lượng còn lại', percentData2],

						],

					}],
					colors: [color1, color2]
				});
			}
		}
	}

	function createDonutCarousel() {
		$('.tabs-pack-data .owl-carousel').owlCarousel({
			center: true,
			loop: true,
			nav: true,
			items: 1,
			navText: ["<i class='icon-chevron-left'></i>", "<i class='icon-chevron-right'></i>"],
			lazyLoad: true,
			responsive: {
				0: {
					center: false,
					items: 1,
					dots: false,
					nav: false
				},
				479: {
					center: false,
					items: 1.2,
					dots: false,
					nav: false
				},
				768: {
					dots: true,
				},
				1024: {
					margin: 80
				}
			},
			lazyLoadEager: 1
		});

		$('.radius-top .owl-carousel').owlCarousel({
			center: true,
			loop: true,
			nav: true,
			items: 1,
			navText: ["<i class='icon-chevron-left'></i>", "<i class='icon-chevron-right'></i>"],
			lazyLoad: true,
			responsive: {
				0: {
					margin: 15,
					dots: false,
					nav: false
				},
				479: {
					margin: 20,
					dots: false,
					nav: false
				},
				768: {
					dots: false,
					nav: false
				},
				1024: {
					margin: 80
				}
			},
			onInitialize: setTimeout(cloneChart, 1000),
		});
	}

	function cloneChart() {

		var htmlString3 = $(".owl-item:not(.cloned) .item3").html();
		$(".owl-item.cloned .item3").html(htmlString3);
		var htmlString = $(".owl-item:not(.cloned) .item1").html();
		$(".owl-item.cloned .item1").html(htmlString);
		var htmlString2 = $(".owl-item:not(.cloned) .item2").html();
		$(".owl-item.cloned .item2").html(htmlString2);

	}
	dataDonutChart(['data-donut1', 'data-donut2', 'data-donut3', 'date-donut1', 'date-donut2', 'date-donut3']);
	createDonutCarousel();

	// End Chart ===============

	$('.tabs .tab-title a').on('click', function (e) {
		$(this).parents('.tabs').find('.tab-title li').removeClass('active');
		$(this).parent().addClass('active');
		$(this).parents('.tabs').find('.tabcontent').removeClass('active');
		$($(this).attr('href')).addClass('active');
		e.preventDefault();
	});

	$('.tabs .tab-service a').on('click', function (e) {
		$(this).parents('.tabs').find('.tab-service li').removeClass('active');
		$(this).parent().addClass('active');
		$(this).parents('.tabs').find('.tabcontentsv').removeClass('active');
		$($(this).attr('href')).addClass('active');
		e.preventDefault();
	});

	$('.tabs-link').on('click', function (e) {
		$(this).parents('.tabs').find('.tabs-item').removeClass('active');
		$(this).parent().addClass('active');
		$(this).parents('.tabs').find('.tabcontent').removeClass('active');
		$($(this).attr('href')).addClass('active');
		e.preventDefault();
	});

	$('.js-nav-link').on('click', function (e) {
		$(this).parents('.tabs').find('.nav-item').removeClass('active');
		$(this).parent().addClass('active');
		$(this).parents('.tabs').find('.tabcontent').removeClass('active');
		$($(this).attr('href')).addClass('active');
		e.preventDefault();
	});

	$('.js-nav-link').on('click', function (e) {
		$(this).parents('.tabs').find('.nav-item').removeClass('active');
		$(this).parent().addClass('active');
		$(this).parents('.tabs').find('.tab-pane').removeClass('active');
		$($(this).attr('href')).addClass('active');
		e.preventDefault();
	});

	$('.tabs-side__link').on('click', function (e) {
		$(this).parents('.tabs-side').find('.tabs-side__item').removeClass('active');
		$(this).parent().addClass('active');
		$(this).parents('.tabs-side').find('.tabs-side__pane').removeClass('active');
		$($(this).attr('href')).addClass('active');
		e.preventDefault();
	});

	$('.block__transfers .field__values__item').on('click', function () {
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
		} else {
			$('.block__transfers .field__values__item').removeClass('active');
			$(this).addClass('active');
		}
	});

	$('.get__sim .item__content__check').on('click', function () {
		if ($(this).parents('.get__sim__box__item').hasClass('active')) {
			$(this).parents('.get__sim__box__item').removeClass('active');
		} else {
			$('.get__sim__box__item').removeClass('active');
			$(this).parents('.get__sim__box__item').addClass('active');
		}
	});

	$('.off-canvas-toggle').on('click', function (e) {
		$("html").toggleClass("open");
		return false;
	});

	$('.lp-mobile__item').on('click', function (e) {
		$("html").removeClass("open");
	});

	$('.box-language').on('click', function (e) {
		$(this).parent().toggleClass("open-language");
	});
	$('.has-sub .current').on('click', function (e) {
		$(this).parent().toggleClass("active");
	});

	$('.boxmenu .show-sub, .sub-regis .show-sub.icon-next').on('click', function (e) {
		$(this).parent().toggleClass("open");
	});

	$('.box-notices .show-sub').on('click', function (e) {
		$(this).parent().toggleClass("open");
		e.preventDefault();
	});

	$('.section__tabs .tab__title').on('click', function () {
		$(this).parent().toggleClass("active");
	});

	$('.notice').on('click', function (e) {
		$(this).parents('li').toggleClass("open");
		$(this).parents('ul').removeClass("open");
		e.preventDefault();
	});

	$('.login-register .show-sub.icon-down').on('click', function (e) {
		$(this).parents('ul').toggleClass("open");
		$(this).parents('li').removeClass("open");
	});

	$(document).on('click', '.box-filter', function () {
		$(this).parent().find('.filter-content').fadeToggle("slow");
	});

	$(document).on('click', '.close-filter', function () {
		$(this).parents('.filter').find('.filter-content').hide('slow');
	});

	$(document).click(function (e) {
		var container = $(".filter-content");
		var container1 = $(".box-filter");
		if (!container.is(e.target) && container.has(e.target).length === 0 && !container1.is(e.target) && container1.has(e.target).length === 0) {
			$('.filter-content').hide('slow');
		}
	});

	$(document).on('click', '.filter-custom__toggle', function () {
		$(this).parents('.filter-custom').toggleClass('opened');
	});

	$(document).on('click', '.select-custom__toggle', function () {
		$(this).parents('.select-custom').toggleClass('opened');
	});

	$('.product-hot .tech .view-detail').on('click', function (e) {
		if ($('.tbl-tech').hasClass('open')) {
			$('.tbl-tech').removeClass('open');
			$('.product-hot .tech .view-detail').text('Xem cấu hình chi tiết');
		} else {
			$('.tbl-tech').addClass('open');
			$('.product-hot .tech .view-detail').text('Thu gọn');
		}
	});

	$('#isHome:checked').parents('.items').find('.form-info').slideDown();

	$('.hhv-form-hopdong input[type="radio"]').on('click', function () {
		if ($('#isHome').is(':checked')) {
			$('#isHome').parents('.items').find('.form-info').slideDown();
		} else {
			$('#isHome').parents('.items').find('.form-info').slideUp();

		}
	});

	$('#box-tkkm').on('click', function () {
		if ($('.tabs__detail__content__left__listkm').hasClass('open')) {
			$('.tabs__detail__content__left__listkm').removeClass('open');
		} else {
			$('.tabs__detail__content__left__listkm').addClass('open');
		}
	});

	$('.menu-slide').each(function () {
		var self = $(this);
		self.children('.menu-slide__toggle').on('click', function (e) {
			e.preventDefault();
			self.children('.menu-slide__sub').slideToggle();

			if (self.children('.menu-slide__toggle').hasClass('closed')) {
				self.children('.menu-slide__toggle').removeClass('closed');
				self.children('.menu-slide__toggle').addClass('opened');
			}
			else {
				self.children('.menu-slide__toggle').addClass('closed');
				self.children('.menu-slide__toggle').removeClass('opened');
			}
		});
	});

	$('.search-sp__icon').on('click', function (e) {
		$(this).parents('.search-sp').toggleClass('opened');
		e.preventDefault();
	});

	$('.shopping-cart__icon').on('click', function (e) {
		$(this).parents('.shopping-cart').toggleClass('opened');
		e.preventDefault();
	});

	$('.js-show-submenu').on('click', function (e) {
		$('.menu-sp__content').addClass('show-submenu');
		$('.menu-sub').css('display', 'none');
		$('.menu-sub' + $(this).data('target')).css('display', 'block');
		$('.menu-sp__sub').addClass('active');
	});

	$('.js-close-submenu').on('click', function (e) {
		$('.menu-sp__content').removeClass('show-submenu');
		$('.menu-sp__sub').removeClass('active');
	});

	$('.header-account').on('click', function () {
		$(this).toggleClass('opened');
		e.preventDefault();
	});

	$('.menu_select_sp').on('click', function (e) {
		$(this).parents('.btabs').toggleClass('opened');
		e.preventDefault();
	});

	$('.detail-account__action').on('click', function (e) {
		$(this).parents('.menu-sp__inner').toggleClass('opened');
		e.preventDefault();
	});

	$('.sort-device__icon').on('click', function (e) {
		$(this).parents('.sort-device__result').toggleClass('opened');
		e.preventDefault();
	});

	$('.btn-filter').on('click', function (e) {
		$(this).parents('.sort-device__button').toggleClass('opened');
		e.preventDefault();
	});

	$('.intro-time__toggle').on('click', function (e) {
		$(this).parents('.intro-time__info').toggleClass('opened');
		e.preventDefault();
	});

	$('.rules-more').on('click', function (e) {
		$(this).parents('.rules-promotion__list').toggleClass('opened');
		e.preventDefault();
	});

	$('.js-box-total').on('click', function (e) {
		$(this).parents('.box-total').toggleClass('opened');
		e.preventDefault();
	});

	$('.endow-camera__spec-top').on('click', function (e) {
		$(this).parents('.endow-camera__spec').toggleClass('opened');
		e.preventDefault();
	});

	$('.box-item__top').on('click', function (e) {
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
			$(this).siblings('.box-item__content').css('display', 'none');
			$(this).siblings('.box-item__more').css('display', 'none');
		} else {
			$('.box-item__top').removeClass('active');
			$(this).addClass('active');
			$('.box-item__content').css('display', 'none');
			$(this).siblings('.box-item__content').css('display', 'block');
			$('.box-item__more').css('display', 'none');
			$(this).siblings('.box-item__more').css('display', 'block');
		}
	});

	$('.info-product__button').on('click', function () {
		$(this).parents('.section-contract__content').find('.info-product__detail').show();
		$(this).hide();
	});

	// Start Uploadfile
	function readURL(input) {
		if (input.files && input.files[0]) {
			var reader = new FileReader();

			reader.onload = function (e) {
				$(input).parent().find('.js-img-preview').attr('src', e.target.result);
			};

			reader.readAsDataURL(input.files[0]);
			$(input).parent().addClass('has-images');
		}
	}

	$('.js-upload-image').change(function () {
		readURL(this);
		$(this).parent().find('.upload-file__preview').addClass('active');
	});

	$('.js-remove-image').click(function () {
		$(this).parents('.upload-file__preview').hide();
		$(this).parents().removeClass('has-images');
	});

	$('.js-upload-image').change(function () {
		readURL(this);
		$(this).parent().find('.upload-files__preview').addClass('active');
	});

	$('.js-remove-image').click(function () {
		$(this).parents('.upload-files__preview').hide();
		$(this).parents().removeClass('has-images');
	});

	$('.js-upload-image').change(function () {
		readURL(this);
		$(this).parent().find('.js-upload-preview').addClass('active');
	});

	$('.js-remove-image').click(function () {
		$(this).parents('.js-upload-preview').hide();
		$(this).parents().removeClass('has-images');
	});

	// Start CheckboxAll
	$(document).on('click', '.js-checkbox-all input', function () {
		$(this)
			.parent()
			.parent()
			.find('.checkbox__input')
			.prop('checked', this.checked);
	});
	$(document).on('change', '.js-checkbox-list input', function () {
		if (this.checked) {
			if (
				$(this)
					.parents('.checkbox-custom')
					.find('.js-checkbox-list input:not(:checked)').length === 0
			) {
				$(this)
					.parents('.checkbox-custom')
					.find('.checkbox-all input:not(:checked)')
					.prop('checked', true);
			}
		} else {
			$(this)
				.parents('.checkbox-custom')
				.find('.checkbox-all input:checked')
				.prop('checked', false);
		}
	});

	$('.lp-faq__top').on('click', function (e) {
		if ($(this).parents('.lp-faq__item').hasClass('active')) {
			$(this).parents('.lp-faq__item').removeClass('active');
			$(this).siblings('.lp-faq__info').css('display', 'none');
		} else {
			$('.lp-faq__top').parents('.lp-faq__item').removeClass('active');
			$(this).parents('.lp-faq__item').addClass('active');
			$('.lp-faq__info').css('display', 'none');
			$(this).siblings('.lp-faq__info').css('display', 'block');
		}
	});

	$('.faq-viettel__top').on('click', function (e) {
		if ($(this).parents('.faq-viettel__item').hasClass('active')) {
			$(this).parents('.faq-viettel__item').removeClass('active');
			$(this).siblings('.faq-viettel__info').css('display', 'none');
		} else {
			$('.faq-viettel__top').parents('.faq-viettel__item').removeClass('active');
			$(this).parents('.faq-viettel__item').addClass('active');
			$('.faq-viettel__info').css('display', 'none');
			$(this).siblings('.faq-viettel__info').css('display', 'block');
		}
	});

	$('.tutorial-kid__top').on('click', function (e) {
		if ($(this).parents('.tutorial-kid__item').hasClass('active')) {
			$(this).parents('.tutorial-kid__item').removeClass('active');
			$(this).siblings('.tutorial-kid__info').find('.tutorial-kid__detail').css('display', 'none');
		} else {
			$('.tutorial-kid__top').parents('.tutorial-kid__item').removeClass('active');
			$(this).parents('.tutorial-kid__item').addClass('active');
			$('.tutorial-kid__detail').css('display', 'none');
			$(this).siblings('.tutorial-kid__info').find('.tutorial-kid__detail').css('display', 'block');
		}
	});

	$('.faq-kid__top').on('click', function (e) {
		if ($(this).parents('.faq-kid__item').hasClass('active')) {
			$(this).parents('.faq-kid__item').removeClass('active');
			$(this).siblings('.faq-kid__info').css('display', 'none');
		} else {
			$('.faq-kid__top').parents('.faq-kid__item').removeClass('active');
			$(this).parents('.faq-kid__item').addClass('active');
			$('.faq-kid__info').css('display', 'none');
			$(this).siblings('.faq-kid__info').css('display', 'block');
		}
	});

	$('.js-faq-top').on('click', function (e) {
		if ($(this).parents('.js-faq-item').hasClass('active')) {
			$(this).parents('.js-faq-item').removeClass('active');
			$(this).siblings('.js-faq-info').css('display', 'none');
		} else {
			$('.js-faq-top').parents('.js-faq-item').removeClass('active');
			$(this).parents('.js-faq-item').addClass('active');
			$('.js-faq-info').css('display', 'none');
			$(this).siblings('.js-faq-info').css('display', 'block');
		}
	});

	$('.endow-price__top').on('click', function (e) {
		if ($(this).parents('.endow-price__item').hasClass('active')) {
			$(this).parents('.endow-price__item').removeClass('active');
			$(this).siblings('.endow-price__info').css('display', 'none');
		} else {
			$('.endow-price__top').parents('.endow-price__item').removeClass('active');
			$(this).parents('.endow-price__item').addClass('active');
			$('.endow-price__info').css('display', 'none');
			$(this).siblings('.endow-price__info').css('display', 'block');
		}
	});

	$('.policy-warranty__top').on('click', function (e) {
		if ($(this).parents('.policy-warranty__item').hasClass('active')) {
			$(this).parents('.policy-warranty__item').removeClass('active');
			$(this).siblings('.policy-warranty__detail').css('display', 'none');
		} else {
			$('.policy-warranty__top').parents('.policy-warranty__item').removeClass('active');
			$(this).parents('.policy-warranty__item').addClass('active');
			$('.policy-warranty__detail').css('display', 'none');
			$(this).siblings('.policy-warranty__detail').css('display', 'block');
		}
	});

	$('.endow-store__top').on('click', function (e) {
		if ($(this).parents('.endow-store__item').hasClass('active')) {
			$(this).parents('.endow-store__item').removeClass('active');
			$(this).siblings('.endow-store__info').css('display', 'none');
		} else {
			$('.endow-store__top').parents('.endow-store__item').removeClass('active');
			$(this).parents('.endow-store__item').addClass('active');
			$('.endow-store__info').css('display', 'none');
			$(this).siblings('.endow-store__info').css('display', 'block');
		}
	});

	$('.nav-sp').on('click', function (e) {
		$(this).parents('.shop-viettel__nav').toggleClass('opened');
		e.preventDefault();
	});

	$('.lp-product__showmore').on('click', function (e) {
		$(this).parents('.lp-product__box').toggleClass('opened');
		e.preventDefault();
	});

	$('.technical-specifications__more').on('click', function (e) {
		if ($('.technical-specifications__content').hasClass('opened')) {
			$('.technical-specifications__content').removeClass('opened');
			$('.technical-specifications__more').text('Xem cấu hình chi tiết');
		} else {
			$('.technical-specifications__content').addClass('opened');
			$('.technical-specifications__more').text('Thu gọn');
		}
	});

	$('.advertise__action').on('click', function (e) {
		if ($('.advertise__content').hasClass('opened')) {
			$('.advertise__content').removeClass('opened');
			$('.advertise__text').text('Mở rộng');
		} else {
			$('.advertise__content').addClass('opened');
			$('.advertise__text').text('Thu gọn');
		}
	});

	$('.advertise-sp__action').on('click', function (e) {
		if ($('.advertise-sp__content').hasClass('opened')) {
			$('.advertise-sp__content').removeClass('opened');
			$('.advertise-sp__text').text('Xem thêm');
		} else {
			$('.advertise-sp__content').addClass('opened');
			$('.advertise-sp__text').text('Thu gọn');
		}
	});

	$('.recent-trade__link').on('click', function (e) {
		if ($('.recent-trade__content').hasClass('opened')) {
			$('.recent-trade__content').removeClass('opened');
			$('.recent-trade__link-txt').text('Xem thêm');
		} else {
			$('.recent-trade__content').addClass('opened');
			$('.recent-trade__link-txt').text('Thu gọn');
		}
	});

	$('.package-internet__action').on('click', function (e) {
		if ($('.package-internet__fee').hasClass('opened')) {
			$('.package-internet__fee').removeClass('opened');
			$('.package-internet__see-more').text('Xem thêm lựa chọn khác');
		} else {
			$('.package-internet__fee').addClass('opened');
			$('.package-internet__see-more').text('Ẩn lựa chọn khác');
		}
	});

	$('.pack-qr__link').on('click', function (e) {
		if ($('.pack-qr__list').hasClass('opened')) {
			$('.pack-qr__list').removeClass('opened');
			$('.pack-qr__link-txt').text('Xem thêm');
		} else {
			$('.pack-qr__list').addClass('opened');
			$('.pack-qr__link-txt').text('Thu gọn');
		}

		if ($('.data-hot').hasClass('opened')) {
			$('.data-hot').removeClass('opened');
			$('.pack-qr__link-txt').text('Xem thêm');
		} else {
			$('.data-hot').addClass('opened');
			$('.pack-qr__link-txt').text('Thu gọn');
		}
	});

	$('.contact-now__close').on('click', function (e) {
		$(this).parents('.contact-now').toggleClass('closed');
		e.preventDefault();
	});

	$('.viettel-regulations__cat-container').on('click', function (e) {
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
		}
		else {
			$(this).addClass('active');
		}
	})

	$('.tab-item').on('click', function (e) {
		$(".tab-list li").removeClass("active");
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
		}
		else {
			$(this).addClass('active')
		}
	})

	$('.custom-collapse__header').on('click', function (e) {
		if ($(this).parents('.custom-collapse__item').hasClass('active')) {
			$(this).parents('.custom-collapse__item').removeClass('active');
			$(this).siblings('.custom-collapse__content').css('display', 'none');
		} else {
			$(this).parents('.custom-collapse__item').addClass('active');
			$(this).siblings('.custom-collapse__content').css('display', 'block');
		}
	});

	$('.js-has-sub').on('click', function (e) {
		$(this).parents('.side-menu__item').toggleClass('opened');
		e.preventDefault();
	});

	$('.js-toggle').on('click', function (e) {
		$(this).parents('.select-method__top').toggleClass('opened');
		e.preventDefault();

		$(this).parents('.method-payment__detail').toggleClass('opened');
		e.preventDefault();
	});
});

$(window).scroll(function () {
	var scroll = $(window).scrollTop();
	if (scroll >= 1) {
		$('.js-header').addClass('header--sticky');
		$('body').addClass('body-sticky');
		$('.js-header-small').addClass('header--sticky');
		$('.js-lp-header').addClass('header--sticky');
		$('body').addClass('body-sticky-small');
	}
	if (scroll < 1) {
		$('.js-header').removeClass('header--sticky');
		$('body').removeClass('body-sticky');
		$('.js-header-small').removeClass('header--sticky');
		$('.js-lp-header').removeClass('header--sticky');
		$('body').removeClass('body-sticky-small');
	}
});

$(document).ready(function() {
	var sync1 = $("#sync1");
	var sync2 = $("#sync2");
	var slidesPerPage = 5; //globaly define number of elements per page
	var syncedSecondary = true;
	sync1.owlCarousel({
		items : 1,
		nav: true,
		autoplay: false,
		dots: false,
		loop: true,
		responsiveRefreshRate : 200,
	}).on('changed.owl.carousel', syncPosition);
	sync2
		.on('initialized.owl.carousel', function () {
			sync2.find(".owl-item").eq(0).addClass("current");
		})
		.owlCarousel({
		items : slidesPerPage,
		dots: false,
		nav: false,
		slideBy: 1, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
		responsiveRefreshRate : 100
	}).on('changed.owl.carousel', syncPosition2);
	function syncPosition(el) {
		var count = el.item.count-1;
		var current = Math.round(el.item.index - (el.item.count/2) - .5);
		if(current < 0 && current !== -2) {
			current = count;
		}
		if(current > count) {
			current = 0;
		}
		sync2
			.find(".owl-item")
			.removeClass("current")
			.eq(current)
			.addClass("current");
		var onscreen = sync2.find('.owl-item.active').length - 1;
		var start = sync2.find('.owl-item.active').first().index();
		var end = sync2.find('.owl-item.active').last().index();
		if (current > end) {
			sync2.data('owl.carousel').to(current, 100, true);
		}
		if (current < start) {
			sync2.data('owl.carousel').to(current - onscreen, 100, true);
		}
	}
	function syncPosition2(el) {
		if(syncedSecondary) {
			var number = el.item.index;
			sync1.data('owl.carousel').to(number, 100, true);
		}
	}
	sync2.on("click", ".owl-item", function(e){
		e.preventDefault();
		var number = $(this).index();
		sync1.data('owl.carousel').to(number, 300, true);
	});
	$("#sync2").hover(function(){
		$("#sync1").toggleClass("hover");
	});

	var headerHeight = $('.header').height();
	$(document).scroll(function() {
		var winTop = $(window).scrollTop();
		if (winTop > headerHeight + 100 + 430) {
			$('.main').addClass('main--endow');
		} else {
			$('.main').removeClass('main--endow');
		}
	});
});
