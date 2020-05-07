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


function countRemove() {
    var w = 1920, h = 900;
    var iw = $(window).innerWidth(), ih = $(window).innerHeight();
    var pRatio = window.devicePixelRatio || 0, xRatio = iw / w, yRatio = ih / h, sRatio = 1;
    sRatio = Math.min(xRatio, yRatio);
    if ($('.count').val() >= 10 && $('.count').val() < 100) {
        $('.count').css({ width: Math.round(250 * sRatio), height: Math.round(250 * sRatio), fontSize: Math.round(200 * sRatio), left: "82%" });
    } else if ($('.count').val() >= 100) {
        $('.count').css({ width: Math.round(250 * sRatio), height: Math.round(250 * sRatio), fontSize: Math.round(140 * sRatio), top: "12.5%", left: "82%" });
    } else {
        $('.count').css({ width: Math.round(200 * sRatio), height: Math.round(250 * sRatio), fontSize: Math.round(200 * sRatio), left: "85%" });
    }
    $('.count').css({lineHeight: 0})
}
var obj_padding
var cursor_padding
var sRout
var change_img = $('.img_fR').css("width")
function convertSizeALL(className) {

    var w = 1920, h = 900;
    var iw = $(window).innerWidth(), ih = $(window).innerHeight();
    var pRatio = window.devicePixelRatio || 0, xRatio = iw / w, yRatio = ih / h, sRatio = 1;
    sRatio = Math.min(xRatio, yRatio);
    $('.background-img').css({ width: Math.round(w * sRatio), height: Math.round(h * sRatio) });
    $(".background1").css({ width: Math.round(w * sRatio), height: Math.round(h * sRatio) });
    $(".background").css({ width: Math.round(w * sRatio), height: Math.round(h * sRatio) });
    $('.color').css({ width: Math.round(46 * sRatio), height: Math.round(46 * sRatio) });
    $('.return').css({ width: Math.round(37 * sRatio), height: Math.round(39 * sRatio) });
    $('.enter').css({ width: Math.round(44 * sRatio), height: Math.round(41 * sRatio) });
    countRemove()
    $('.garbage').css({ width: Math.round(123 * sRatio), height: Math.round(158 * sRatio) });
    $('.cursor').css({ width: Math.round(116 * sRatio), height: Math.round(122 * sRatio) });
    $('.backpage').css({ width: Math.round(116 * sRatio), height: Math.round(122 * sRatio) });
    $('.close').css({ width: Math.round(116 * sRatio), height: Math.round(122 * sRatio) });
    $('.question').css({ width: Math.round(116 * sRatio), height: Math.round(122 * sRatio) });

    $('.numberText').css({ width: Math.round(130 * sRatio), height: Math.round(59 * sRatio), fontSize: Math.round(59 * sRatio) })
    $('.img_flower').css({ width: Math.round(113 * sRatio), height: Math.round(113 * sRatio) });
    $('.tri_btn').css({ width: Math.round(19 * sRatio), height: Math.round(16 * sRatio) });
    $('.choose_area').css({ width: Math.round(127 * sRatio), height: Math.round(453 * sRatio) });
    $('.number').css({ width: Math.round(106 * sRatio), height: Math.round(43 * sRatio), fontSize: Math.round(35 * sRatio), paddingLeft: Math.round(11 * sRatio) });
    $('.enter_input').css({ width: Math.round(70 * sRatio), height: Math.round(60 * sRatio), fontSize: Math.round(36 * sRatio) })
    $('.display_btn').css({ width: Math.round(158 * sRatio), height: Math.round(52 * sRatio) });
    
    $('.mask').css({ width: Math.round(w * sRatio), height: Math.round(h * sRatio) });
    $('.info').css({ width: Math.round(673*1.6  * sRatio), height: Math.round(456 *1.6* sRatio) });
    $('.info-page').css({ width: Math.round(1039  * sRatio), height: Math.round(687.6* sRatio),borderRadius: Math.round(15 * sRatio) });
    $('.info-btn-left,.info-btn-right').css({ width: Math.round(35 * sRatio), height: Math.round(35 * sRatio) });

    $('.btn_close_inset').css({ width: Math.round(53 * sRatio), height: Math.round(53 * sRatio) });
    
    sRout = sRatio
    canvas.setHeight(665 * sRatio);
    canvas.setWidth(1415 * sRatio);
    $('.canvas-container').css({ borderRadius: Math.round(50 * sRatio) })
    canvas.discardActiveObject();


    var nowW = $('.img_fR').css('width')
    console.log(nowW)
    console.log(change_img)

    var countscale = parseInt(nowW) / parseInt(change_img)
    var objse = canvas.getObjects()
    objse.forEach((obj) => {


        obj.scaleX = obj.scaleX * countscale

        obj.scaleY = obj.scaleY * countscale
        obj.left = obj.left * countscale
        obj.top = obj.top * countscale
        obj.setCoords()
        // obj.width=  obj._element.naturalWidth* scalenow
        // obj.height=  obj._element.naturalHeigh* scalenow


    });
    change_img = nowW







    fabric.Object.prototype.customiseCornerIcons({
        settings: {
            borderColor: 'black',
            cornerSize: Math.round(40 * sRatio),
            cornerShape: 'circle',
            cornerBackgroundColor: 'rgba(0,0,0,0)',
            cornerPadding: 0
        },

        tr: {

            icon: 'img/tX.svg',
        },
        bl: {
            icon: 'img/tR.svg',

        },
        br: {
            settings: {
                borderColor: '#0094dd',

                cornerShape: 'circle',
            },
            icon: 'img/tB.svg'
        },
    }, function () {
        canvas.renderAll()
    })

    fabric.Object.prototype.set({
        padding: Math.round(10 * sRatio)
    })
    fabric.Object.prototype.set({
        borderColor: '#0094dd',
        lockScalingFlip: true
    })

    cursor_padding = Math.round(40 * sRatio)
    obj_padding = Math.round(10 * sRatio)



}

$(".count").click(function(){
    $(".count").val('')
})
$(".count").bind('input porpertychange', function () {    
    if ($('.count').val() > 50) {
        $('.count').val(50)
    }
    countRemove()
})
$(".enter_input").bind('input porpertychange', function () {
    if ($(this).val() > 10) {
        $(this).val(10)
    }
    if (!isNaN($(this).val())) {
        let num = $(this).val()
        num = parseInt(num)
        $(this).val("+" + num)
    }
    if (isNaN($(this).val())) {
        $(this).val("+" + 0)

    }
    $('.enter_input').not(this).val('')
})

$('.number').click(function () {
    let showClick = $(this).data("count")
    let color = $(this).closest(".choose_area").data("color")
    $(`.enter_${color}`).val(showClick == 10 ? "+10" : `+${showClick}`)
    clicknum()
    resetnum()

})
var red_flower
var blue_flower
var yellow_flower
var green_flower
var redcount = -1
var bluecount = 0
var yellowcount = 1
var greencount = 2
var redlittlemove = 0
var bluelittlemove = 0
var yellowlittlemove = 0
var greenlittlemove = 0


var numnum = 0
var numnum1 = 0
var numnum2 = 0
var numnum3 = 0
var numnum4 = 0
function SumData(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    };
    return sum;
}

$('body').keydown(function (event) {
    red_flower = $('.enter_red').val().replace(/[^0-9]/ig, "");
    blue_flower = $('.enter_blue').val().replace(/[^0-9]/ig, "");
    yellow_flower = $('.enter_yellow').val().replace(/[^0-9]/ig, "");
    green_flower = $('.enter_green').val().replace(/[^0-9]/ig, "");
    if (red_flower) {
        whatnow = "img/fR.svg"
        whatnownumber = red_flower
    } else if (blue_flower) {
        whatnow = "img/fB.svg"
        whatnownumber = blue_flower
    } else if (yellow_flower) {
        whatnow = "img/fY.svg"
        whatnownumber = yellow_flower
    } else if (green_flower) {
        whatnow = "img/fG.svg"
        whatnownumber = green_flower
    }
    if (event.which == 13 && $('.count').is(":focus")) {
        canvas.clear();

        idontknowwhatiwrite()
        // redcount =redcount+ counttimes
        console.log("recountNOW"+redcount)

        $('.enter_red').val('')
        $('.enter_blue').val('')
        $('.enter_yellow').val('')
        $('.enter_green').val('')
    }
    if (event.which == 13 && !$('.count').is(":focus") && whatnownumber != 0 && whatnownumber) {


        clicknummult()



    }
});
// 計算有幾個並且拿第幾個




var whatnow
var whatnownumber
var fly
function clicknum() {

    red_flower = $('.enter_red').val().replace(/[^0-9]/ig, "");
    blue_flower = $('.enter_blue').val().replace(/[^0-9]/ig, "");
    yellow_flower = $('.enter_yellow').val().replace(/[^0-9]/ig, "");
    green_flower = $('.enter_green').val().replace(/[^0-9]/ig, "");
    if (red_flower) {
        whatnow = "img/fR.svg"
        whatnownumber = red_flower
        fly = 180
    } else if (blue_flower) {
        whatnow = "img/fB.svg"
        whatnownumber = blue_flower
        fly = 500
    } else if (yellow_flower) {
        whatnow = "img/fY.svg"
        whatnownumber = yellow_flower
        fly = 700
    } else if (green_flower) {
        whatnow = "img/fG.svg"
        whatnownumber = green_flower
        fly = 1100
    }
    console.log(whatnow)

    $('.enter_red').val('')
    $('.enter_blue').val('')
    $('.enter_yellow').val('')
    $('.enter_green').val('')
    // red bbbbbbbbbbbbbbbbbbbbbbbbbbb
    numnum = -1
    let qq
    redcount = redcount + 1
    qq = redcount
    if (whatnownumber > 5) {
        redcount2 = redcount + 1
        redcount = redcount + 1
        qq = redcount2 - 1
        if (redcount2 > 9) {

            redcount = 0
            redcount2 = 0
            redlittlemove += 10
        }
        if (qq > 9) {
            qq = 0
            redcount = 1
            redcount2 = 1
        }

    } else {
        redcount2 = redcount
        if (redcount2 > 9) {

            redcount = 0
            redcount2 = 0
            redlittlemove += 10
        }
        if (qq > 9) {
            qq = 0
            redcount = 0
            redcount2 = 1
        }

    }


    if (redlittlemove > 30) {
        redlittlemove = 0
    }
    console.log(redcount)

    var arr_one = new Array()

    for (i = 0; i < whatnownumber; i++) {
        var s_1 = 0
        var s_1_1 = 0
        // var w = 0 
        const imgEl_1 = document.createElement('img')
        imgEl_1.src = whatnow
        imgEl_1.alt = '1'

        imgEl_1.onload = (e) => {


            const image = new fabric.Image(imgEl_1, {
                width: e.target.naturalWidth,
                height: e.target.naturalHeight,
                scaleX: parseInt($('.defaultImg').width()) / e.target.naturalWidth,
                scaleY: parseInt($('.defaultImg').height()) / e.target.naturalHeight,

                top: 650 * sRout,
                left: fly * sRout
            })
            canvas.add(image)

            image.alt = 1
            image.set({
                borderColor: '#01B0F1'
            })



            canvas.renderAll();


            image._element.alt = '1'
            arr_one.push(image)

            var maxWidthRed = 265 * sRout
            numnum++
            // for (i = 0; i < arr_one.length; i++) {


            if (arr_one.length <= 5) {

                s_1 += 10


                image.animate('top', 30 * sRout + 120 * sRout * numnum, {
                    duration: 800 + s_1,
                    onChange: canvas.renderAll.bind(canvas),

                    easing: fabric.util.ease.easeInOutExpo
                })
                console.log(qq + "ewqeqe")
                image.animate('left', (45 * sRout) + (maxWidthRed * qq) / 2 + (redlittlemove * sRout), {
                    duration: 800 + s_1,
                    onChange: canvas.renderAll.bind(canvas),

                    easing: fabric.util.ease.easeInOutExpo
                })
            } else if (arr_one.length > 5 && arr_one.length <= 10) {
                s_1_1 += 10


                image.animate('top', 30 * sRout + 120 * sRout * (numnum - 5), {
                    duration: 800 + s_1,
                    onChange: canvas.renderAll.bind(canvas),

                    easing: fabric.util.ease.easeInOutExpo
                })
                console.log(redcount2 + 'ejiejeje')

                image.animate('left', (45 * sRout) + (maxWidthRed * redcount2) / 2 + (redlittlemove * sRout), {
                    duration: 800 + s_1,
                    onChange: canvas.renderAll.bind(canvas),

                    easing: fabric.util.ease.easeInOutExpo
                })

            }
            // }



        }
    }



    setTimeout(function ww() {
        var items = canvas.getObjects()
        var Array_sum
        var ArrTest = new Array();　// 宣告一個新的陣列為 ArrTest

        for (i = 0; i < items.length; i++) {
            ArrTest[i] = parseInt(items[i]._element.alt)
            console.log(items[i]._element.alt)

        }
        console.log(SumData(ArrTest))
        Array_sum = SumData(ArrTest)
        $(".count").val(Array_sum)
        countRemove()
    }, 500)




}
function resetnum() {
    red_flower = ''
    blue_flower = ''
    yellow_flower = ''
    green_flower = ''
    whatnownumber = ''
}

function clicknummult() {

    red_flower = $('.enter_red').val().replace(/[^0-9]/ig, "");
    blue_flower = $('.enter_blue').val().replace(/[^0-9]/ig, "");
    yellow_flower = $('.enter_yellow').val().replace(/[^0-9]/ig, "");
    green_flower = $('.enter_green').val().replace(/[^0-9]/ig, "");


    if (red_flower) {
        doit(red_flower, "img/fR.svg", 180)
    }
    if (blue_flower) {

        doit(blue_flower, "img/fB.svg", 500)
    }
    if (yellow_flower) {

        doit(yellow_flower, "img/fY.svg", 700)
    }
    if (green_flower) {

        doit(green_flower, "img/fG.svg", 1100)
    }


    console.log(whatnow)

    $('.enter_red').val('')
    $('.enter_blue').val('')
    $('.enter_yellow').val('')
    $('.enter_green').val('')
    // red bbbbbbbbbbbbbbbbbbbbbbbbbbb
    function doit(countnow, srcnow, long) {
        numnum = -1
        let qq
        redcount = redcount + 1
        qq = redcount
        if (countnow > 5) {
            redcount2 = redcount + 1
            redcount = redcount + 1
            qq = redcount2 - 1
            if (redcount2 > 9) {

                redcount = 0
                redcount2 = 0
                redlittlemove += 10
            }
            if (qq > 9) {
                qq = 0
                redcount = 1
                redcount2 = 1
            }

        } else {
            redcount2 = redcount
            if (redcount2 > 9) {

                redcount = 0
                redcount2 = 0
                redlittlemove += 10
            }
            if (qq > 9) {
                qq = 0
                redcount = 0
                redcount2 = 1
            }

        }


        if (redlittlemove > 30) {
            redlittlemove = 0
        }
        console.log(redcount)

        var arr_one = new Array()

        for (i = 0; i < countnow; i++) {
            var s_1 = 0
            var s_1_1 = 0
            // var w = 0 
            const imgEl_1 = document.createElement('img')
            imgEl_1.src = srcnow
            imgEl_1.alt = '1'

            imgEl_1.onload = (e) => {


                const image = new fabric.Image(imgEl_1, {
                    width: e.target.naturalWidth,
                    height: e.target.naturalHeight,
                    scaleX: parseInt($('.defaultImg').width()) / e.target.naturalWidth,
                    scaleY: parseInt($('.defaultImg').height()) / e.target.naturalHeight,

                    top: 650 * sRout,
                    left: long * sRout
                })
                canvas.add(image)

                image.alt = 1
                image.set({
                    borderColor: '#01B0F1'
                })



                canvas.renderAll();


                image._element.alt = '1'
                arr_one.push(image)

                var maxWidthRed = 265 * sRout
                numnum++
                // for (i = 0; i < arr_one.length; i++) {


                if (arr_one.length <= 5) {

                    s_1 += 10


                    image.animate('top', 30 * sRout + 120 * sRout * numnum, {
                        duration: 800 + s_1,
                        onChange: canvas.renderAll.bind(canvas),

                        easing: fabric.util.ease.easeInOutExpo
                    })
                    console.log(qq + "ewqeqe")
                    image.animate('left', (45 * sRout) + (maxWidthRed * qq) / 2 + (redlittlemove * sRout), {
                        duration: 800 + s_1,
                        onChange: canvas.renderAll.bind(canvas),

                        easing: fabric.util.ease.easeInOutExpo
                    })
                } else if (arr_one.length > 5 && arr_one.length <= 10) {
                    s_1_1 += 10


                    image.animate('top', 30 * sRout + 120 * sRout * (numnum - 5), {
                        duration: 800 + s_1,
                        onChange: canvas.renderAll.bind(canvas),

                        easing: fabric.util.ease.easeInOutExpo
                    })
                    console.log(redcount2 + 'ejiejeje')

                    image.animate('left', (45 * sRout) + (maxWidthRed * redcount2) / 2 + (redlittlemove * sRout), {
                        duration: 800 + s_1,
                        onChange: canvas.renderAll.bind(canvas),

                        easing: fabric.util.ease.easeInOutExpo
                    })

                }
                // }



            }
        }



        setTimeout(function ww() {
            var items = canvas.getObjects()
            var Array_sum
            var ArrTest = new Array();　// 宣告一個新的陣列為 ArrTest

            for (i = 0; i < items.length; i++) {
                ArrTest[i] = parseInt(items[i]._element.alt)
                console.log(items[i]._element.alt)

            }
            console.log(SumData(ArrTest))
            Array_sum = SumData(ArrTest)
            $(".count").val(Array_sum)
            countRemove()
        }, 500)



    }


}