$(document).ready(function() {
    'use strict';
    ///// put active class to link you click on it
    $('.navbar ul li').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });
    ///// Smooth Scroll To All Links Sections
    $('nav ul li a').click(function(){
        var section = $(this).data('value');
        $('html,body').animate({
            scrollTop: $(section).offset().top
        },1200);
    });
    // Show navbar when click on icon bars
    $('.navbar nav i.fas').on('click', function(){
        $('.navbar nav ul').toggleClass('ul_hover');
    });
    ///// auto_tesimonials_Slider
    (function autoSlider(){
        $('.testimonials .testi_slider .active').each(function(){
            if(!$(this).is(':last-child')){
                var dotID = $(this).data('value');
                $(this).delay(3000).fadeOut(1000, function(){
                    $(this).removeClass('active').next().addClass('active').fadeIn(1000);
                    $(dotID).removeClass('activeDot').next().addClass('activeDot');
                    autoSlider();
                });
            }else{
                $(this).delay(3000).fadeOut(1000, function(){
                    var dotID = $(this).data('value');
                    $(this).removeClass('active');
                    $(dotID).removeClass('activeDot');
                    $('.testimonials .testi_slider .multi_boxes').eq(0).addClass('active').fadeIn(1000);
                    $('.testimonials .slider_dots span').eq(0).addClass('activeDot')
                    autoSlider();
                });
            }
        });
    }());
    ///// Scroll_top_show_hidden
    $(window).on('scroll', function(){
        var scroll_Top = $(window).scrollTop();
        //console.log($(window).scrollTop());
        if(scroll_Top >= 1000){
            $('.scroll_top').fadeIn();
        }else{
            $('.scroll_top').fadeOut();
        }
    });
    ///// Scroll_to_top
    $('.scroll_top').click(function(){
        $('html,body').animate({
            scrollTop: $('#home').offset().top
        },1200);
    });
    ///// animate All website Sections
    $(window).on('scroll', function(){
        var windowScrollTop = $(window).scrollTop();
        //get offset of each section
        var features = $('.features_sec').offset().top;
        var aboutOne = $('.about_one').offset().top;
        var aboutTwo = $('.about_two').offset().top;
        var whatSee = $('.what_see').offset().top;
        var pricing = $('.pricing').offset().top;
        var contact = $('.contact').offset().top;
        var location = $('.location').offset().top;
        // animate features section
        if(windowScrollTop < (features - 150)){
            $('.features_view .features').css('transform','scale(0)');
        }else{
            $('.features_view .features').css('transform','scale(1)');
        }
        // animate about section
        if(windowScrollTop < (aboutOne - 400)){
            $('.about_one .about_left_one').css({
                'position':'relative',
                'opacity':'0',
                'left':'-1000%',
            });
            $('.about_one .about_right_one').css({
                'position':'relative',
                'opacity':'0',
                'right':'-1000%',
            });
        }else{
            $('.about_one .about_left_one').css({
                'position':'relative',
                'opacity':'1',
                'left':'0%',
            });
            $('.about_one .about_right_one').css({
                'position':'relative',
                'opacity':'1',
                'right':'0%',
            });
        }
        if(windowScrollTop < (aboutTwo - 700)){
            $('.about_two .about_left_two').css({
                'position':'relative',
                'opacity':'0',
                'left':'-1000%',
            });
            $('.about_two .about_right_two').css({
                'position':'relative',
                'opacity':'0',
                'right':'-1000%',
            });
        }else{
            $('.about_two .about_left_two').css({
                'position':'relative',
                'opacity':'1',
                'left':'0%',
            });
            $('.about_two .about_right_two').css({
                'position':'relative',
                'opacity':'1',
                'right':'0%',
            });
        }
        // animate WhatSee Section
        if(windowScrollTop < (whatSee - 500)){
            $('.what_see .like_q').css({
                'left':'-1000px'
            });
            $('.what_see .like_btns #btn_one').css({
                'top':'-1000px'
            });
            $('.what_see .like_btns #btn_two').css({
                'bottom':'-1000px'
            });
        }else{
            $('.what_see .like_q').css({
                'left':'0'
            });
            $('.what_see .like_btns #btn_one').css({
                'top':'0'
            });
            $('.what_see .like_btns #btn_two').css({
                'bottom':'0'
            });
        }
        // animate Pricing section
        if(windowScrollTop < pricing - 100){
            $('.pricing .price_boxes_all #price_left').css({
                'left':'-1000px'
            });
            $('.pricing .price_boxes_all #price_mid_one').css({
                'bottom':'-1000px'
            });
            $('.pricing .price_boxes_all #price_mid_two').css({
                'bottom':'-1000px'
            });
            $('.pricing .price_boxes_all #price_right').css({
                'right':'-1000px'
            });
        }else{
            $('.pricing .price_boxes_all #price_left').css({
                'left':'0'
            });
            $('.pricing .price_boxes_all #price_mid_one').css({
                'bottom':'0'
            });
            $('.pricing .price_boxes_all #price_mid_two').css({
                'bottom':'0'
            });
            $('.pricing .price_boxes_all #price_right').css({
                'right':'0'
            });
        }
        // animate Contact features
        if(windowScrollTop < (contact - 250)){
            $('.contact-info .phone_box').css('left','-1000px');
            $('.contact-info .address_box').css('transform','scale(0)');
            $('.contact-info .email_box').css('right','-1000px');
            $('.contact .send_msg').css({
                'transform':'scale(.2) rotate(30deg) translate(-50%,-50%)',
                'transform-position':'center'
            });
        }else{
            $('.contact-info .phone_box').css('left','0');
            $('.contact-info .address_box').css('transform','scale(1)');
            $('.contact-info .email_box').css('right','0');
            $('.contact .send_msg').css({
                'transform':'scale(1) rotate(0deg) translate(-50%,-50%)',
                'transform-position':'center'
            });
        }
        // animate footerdepend on Location offset
        if(windowScrollTop < location - 900){
            $('.footer .social_icons a').css('transform','scale(0)');
        }else{
            $('.footer .social_icons a').css('transform','scale(1)');
        }
    });
});