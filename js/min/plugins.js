$(document).ready(function(){"use strict";$(".navbar ul li").click(function(){$(this).addClass("active").siblings().removeClass("active")}),$("nav ul li a").click(function(){var t=$(this).data("value");$("html,body").animate({scrollTop:$(t).offset().top},1200)}),$(".navbar nav i.fas").on("click",function(){$(".navbar nav ul").toggleClass("ul_hover")}),function o(){$(".testimonials .testi_slider .active").each(function(){if($(this).is(":last-child"))$(this).delay(3e3).fadeOut(1e3,function(){var t=$(this).data("value");$(this).removeClass("active"),$(t).removeClass("activeDot"),$(".testimonials .testi_slider .multi_boxes").eq(0).addClass("active").fadeIn(1e3),$(".testimonials .slider_dots span").eq(0).addClass("activeDot"),o()});else{var t=$(this).data("value");$(this).delay(3e3).fadeOut(1e3,function(){$(this).removeClass("active").next().addClass("active").fadeIn(1e3),$(t).removeClass("activeDot").next().addClass("activeDot"),o()})}})}(),$(window).on("scroll",function(){1e3<=$(window).scrollTop()?$(".scroll_top").fadeIn():$(".scroll_top").fadeOut()}),$(".scroll_top").click(function(){$("html,body").animate({scrollTop:$("#home").offset().top},1200)}),$(window).on("scroll",function(){var t=$(window).scrollTop(),o=$(".features_sec").offset().top,s=$(".about_one").offset().top,e=$(".about_two").offset().top,i=$(".what_see").offset().top,a=$(".pricing").offset().top,c=$(".contact").offset().top,n=$(".location").offset().top;t<o-150?$(".features_view .features").css("transform","scale(0)"):$(".features_view .features").css("transform","scale(1)"),t<s-400?($(".about_one .about_left_one").css({position:"relative",opacity:"0",left:"-1000%"}),$(".about_one .about_right_one").css({position:"relative",opacity:"0",right:"-1000%"})):($(".about_one .about_left_one").css({position:"relative",opacity:"1",left:"0%"}),$(".about_one .about_right_one").css({position:"relative",opacity:"1",right:"0%"})),t<e-700?($(".about_two .about_left_two").css({position:"relative",opacity:"0",left:"-1000%"}),$(".about_two .about_right_two").css({position:"relative",opacity:"0",right:"-1000%"})):($(".about_two .about_left_two").css({position:"relative",opacity:"1",left:"0%"}),$(".about_two .about_right_two").css({position:"relative",opacity:"1",right:"0%"})),t<i-500?($(".what_see .like_q").css({left:"-1000px"}),$(".what_see .like_btns #btn_one").css({top:"-1000px"}),$(".what_see .like_btns #btn_two").css({bottom:"-1000px"})):($(".what_see .like_q").css({left:"0"}),$(".what_see .like_btns #btn_one").css({top:"0"}),$(".what_see .like_btns #btn_two").css({bottom:"0"})),t<a-100?($(".pricing .price_boxes_all #price_left").css({left:"-1000px"}),$(".pricing .price_boxes_all #price_mid_one").css({bottom:"-1000px"}),$(".pricing .price_boxes_all #price_mid_two").css({bottom:"-1000px"}),$(".pricing .price_boxes_all #price_right").css({right:"-1000px"})):($(".pricing .price_boxes_all #price_left").css({left:"0"}),$(".pricing .price_boxes_all #price_mid_one").css({bottom:"0"}),$(".pricing .price_boxes_all #price_mid_two").css({bottom:"0"}),$(".pricing .price_boxes_all #price_right").css({right:"0"})),t<c-250?($(".contact-info .phone_box").css("left","-1000px"),$(".contact-info .address_box").css("transform","scale(0)"),$(".contact-info .email_box").css("right","-1000px"),$(".contact .send_msg").css({transform:"scale(.2) rotate(30deg) translate(-50%,-50%)","transform-position":"center"})):($(".contact-info .phone_box").css("left","0"),$(".contact-info .address_box").css("transform","scale(1)"),$(".contact-info .email_box").css("right","0"),$(".contact .send_msg").css({transform:"scale(1) rotate(0deg) translate(-50%,-50%)","transform-position":"center"})),t<n-900?$(".footer .social_icons a").css("transform","scale(0)"):$(".footer .social_icons a").css("transform","scale(1)")})});