$(function () {
    $(window).resize(objSizeReset);
    objSizeReset();
    function objSizeReset() {
        convertSizeALL('.outside-frame');

    }



    $(window).on('load', function () {
        objSizeReset();
    });


});


var spcial_move = ""


function convertSizeALL(className) {

    var w = 1920, h = 900;
    var iw = $(window).innerWidth(), ih = $(window).innerHeight();
    var pRatio = window.devicePixelRatio || 0, xRatio = iw / w, yRatio = ih / h, sRatio = 1;
    sRatio = Math.min(xRatio, yRatio);
    $(className).css({ width: Math.round(w * sRatio), height: Math.round(h * sRatio) });
    $(".outside-frame").css({ width: Math.round(w * sRatio), height: Math.round(h * sRatio) });

    var reW = 1.92771084337349
    var reH = 1.31964809384164
    $("body").css("margin-left", (iw - Math.round(w * sRatio)) / 2);
    spcial_move  = (iw - Math.round(w * sRatio)) / 2
    $(".box").css({ width: Math.round(300 * sRatio), height: Math.round(700 * sRatio) });
    // $('canvas').css({ width: Math.round(1620  * sRatio), height: Math.round(700* sRatio) });
    $('.carousel-item img').css({ width: Math.round(295 * sRatio), height: Math.round(138 * sRatio) });
    $(".ans_hv,.ans2_hv,.ans3_hv").css({ width: Math.round(89.5 * sRatio), height: Math.round(44 * sRatio) });
    $(".clear_frame").css({ width: Math.round(300 * sRatio), height: Math.round(170 * sRatio) });
    $('.input_1').css({ width: Math.round(200 * sRatio), height: Math.round(165 * sRatio), fontSize: Math.round(50 * sRatio) });
    $('.btn_1').css({ width: Math.round(90 * sRatio), height: Math.round(160 * sRatio) });
    $('.btn_1 img').css({ width: Math.round(40 * sRatio), height: Math.round(50 * sRatio) });
    $("#imgset").css({ width: Math.round(1920 * sRatio), height: Math.round(195 * sRatio) });
    $('.imgbox img').css({ width: Math.round(100 * sRatio), height: Math.round(100 * sRatio) });
    $('.imgbox ').css({ width: Math.round(100 * sRatio), height: Math.round(200 * sRatio), marginRight: Math.round(80 * sRatio) });
    $('.es-input').css({ width: Math.round(120 * sRatio), height: Math.round(30 * sRatio) });
    $('.change_frame').css({ width: Math.round(340 * sRatio), height: Math.round(200 * sRatio) });
    $('.btn_3,.btn_4,.btn_5').css({ width: Math.round(170 * sRatio), height: Math.round(60 * sRatio), fontSize: Math.round(15 * sRatio) });
    $('.btn_6').css({ width: Math.round(60 * sRatio), height: Math.round(60 * sRatio) });
    $("#background_canvas").css({ width: Math.round(1920 * sRatio), height: Math.round(700 * sRatio) });
    $('.menu-item,.menu-open-button').css({ width: Math.round(80 * sRatio), height: Math.round(80 * sRatio) });
    $('.hamburger').css({ width: Math.round(25 * sRatio), height: Math.round(3 * sRatio) });
    $('.menu').css({ width: Math.round(300 * sRatio), height: Math.round(150 * sRatio) });
    $('.now_color').css({ width: Math.round(100 * sRatio), height: Math.round(100 * sRatio) });
    $('.paint_function').css({ width: Math.round(160 * sRatio), height: Math.round(30 * sRatio), fontSize: Math.round(20 * sRatio) });
    $('.outside-frame').css({paddingLeft: Math.round(20 * sRatio) })
}

var height_img
var width_img

$(window).resize(function () {
    location.reload()


})
setTimeout(function () {
    height_img = $("#defaultImg").css('height')
    width_img = $("#defaultImg").css('width')
    console.log(height_img)
    console.log(width_img)
}, 100)
