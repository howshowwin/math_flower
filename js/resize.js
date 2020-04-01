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
        $('.count').css({ width: Math.round(300 * sRatio), height: Math.round(200 * sRatio), fontSize: Math.round(200 * sRatio), left: "82%" });
    } else if ($('.count').val() >= 100) {
        $('.count').css({ width: Math.round(300 * sRatio), height: Math.round(200 * sRatio), fontSize: Math.round(140 * sRatio), top: "12.5%", left: "82%" });
    } else {
        $('.count').css({ width: Math.round(200 * sRatio), height: Math.round(200 * sRatio), fontSize: Math.round(200 * sRatio), left: "85%" });
    }

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
    $('.numberText').css({ width: Math.round(130 * sRatio), height: Math.round(59 * sRatio), fontSize: Math.round(59 * sRatio) })
    $('.img_flower').css({ width: Math.round(113 * sRatio), height: Math.round(113 * sRatio) });
    $('.tri_btn').css({ width: Math.round(19 * sRatio), height: Math.round(16 * sRatio) });
    $('.choose_area').css({ width: Math.round(127 * sRatio), height: Math.round(453 * sRatio) });
    $('.number').css({ width: Math.round(106 * sRatio), height: Math.round(43 * sRatio), fontSize: Math.round(35 * sRatio), paddingLeft: Math.round(11 * sRatio) });
    $('.enter_input').css({ width: Math.round(70 * sRatio), height: Math.round(30 * sRatio), fontSize: Math.round(36 * sRatio) })
    sRout = sRatio
    canvas.setHeight(665 * sRatio);
    canvas.setWidth(1415 * sRatio);
    $('.canvas-container').css({ borderRadius: Math.round(50 * sRatio) })
    canvas.discardActiveObject();


  var nowW =  $('.img_fR').css('width')
  console.log(nowW)
  console.log(change_img)

  var countscale =  parseInt(nowW)/ parseInt(change_img) 
    var objse = canvas.getObjects()
    objse.forEach((obj) => {
      

        obj.scaleX = obj.scaleX * countscale

        obj.scaleY = obj.scaleY * countscale
        obj.left = obj.left * countscale
        obj.top = obj.top *countscale
        obj.setCoords()
        // obj.width=  obj._element.naturalWidth* scalenow
        // obj.height=  obj._element.naturalHeigh* scalenow


    });
    change_img =nowW   







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
})

$('.number').click(function () {
    let showClick = $(this).data("count")
    let color = $(this).closest(".choose_area").data("color")
    $(`.enter_${color}`).val(showClick == 10 ? "+10" : `+${showClick}`)
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
    if (event.which == 13 && $('.count').is(":focus")) {
        canvas.clear();

        idontknowwhatiwrite()
        $('.enter_red').val('')
        $('.enter_blue').val('')
        $('.enter_yellow').val('')
        $('.enter_green').val('')
    }
    if (event.which == 13 && !$('.count').is(":focus")) {

        red_flower = $('.enter_red').val().replace(/[^0-9]/ig, "");
        blue_flower = $('.enter_blue').val().replace(/[^0-9]/ig, "");
        yellow_flower = $('.enter_yellow').val().replace(/[^0-9]/ig, "");
        green_flower = $('.enter_green').val().replace(/[^0-9]/ig, "");
        console.log(red_flower)
        $('.enter_red').val('')
        $('.enter_blue').val('')
        $('.enter_yellow').val('')
        $('.enter_green').val('')
        // red bbbbbbbbbbbbbbbbbbbbbbbbbbb
        numnum = -1
        if (red_flower != "") {
            redcount += 1
        }
        if (redcount > 4.2) {
            redcount = 0
            redlittlemove += 10
        }
        if (redlittlemove > 30) {
            redlittlemove = 0
        }
        console.log(redcount)

        var arr_one = new Array()
        for (i = 0; i < red_flower; i++) {
            var s_1 = 0
            var s_1_1 = 0
            // var w = 0 
            const imgEl_1 = document.createElement('img')
            imgEl_1.src = "img/fR.svg"
            imgEl_1.alt = '1'

            imgEl_1.onload = (e) => {


                const image = new fabric.Image(imgEl_1, {
                    width: e.target.naturalWidth,
                    height: e.target.naturalHeight,
                    scaleX: parseInt($('.defaultImg').width()) / e.target.naturalWidth,
                    scaleY: parseInt($('.defaultImg').height()) / e.target.naturalHeight,

                    top: 650 * sRout,
                    left: 180 * sRout
                })
                canvas.add(image)

                image.alt = 1
                image.set({
                    borderColor: '#01B0F1'
                })



                canvas.renderAll();


                image._element.alt = '1'
                arr_one.push(image)

                console.log(arr_one)
                var maxWidthRed = 265 * sRout
                numnum++
                console.log(numnum)
                // for (i = 0; i < arr_one.length; i++) {
                if (arr_one.length <= 5) {
                    s_1 += 10


                    image.animate('top', 30 * sRout + 120 * sRout * numnum, {
                        duration: 800 + s_1,
                        onChange: canvas.renderAll.bind(canvas),

                        easing: fabric.util.ease.easeInOutExpo
                    })
                    image.animate('left', (45 * sRout) + (maxWidthRed * redcount) + (redlittlemove * sRout), {
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
                    image.animate('left', (165 * sRout) + (maxWidthRed * redcount) + (redlittlemove * sRout), {
                        duration: 800 + s_1,
                        onChange: canvas.renderAll.bind(canvas),

                        easing: fabric.util.ease.easeInOutExpo
                    })

                }
                // }



            }
        }


        // arr_one = []
        // $(this).val("")

        // setTimeout(function ww() {
        //     var items = canvas.getObjects()
        //     var Array_sum
        //     var ArrTest = new Array();　// 宣告一個新的陣列為 ArrTest

        //     for (i = 0; i < items.length; i++) {
        //         ArrTest[i] = parseInt(items[i]._element.alt)
        //         console.log(items[i]._element.alt)

        //     }
        //     console.log(SumData(ArrTest))
        //     Array_sum = SumData(ArrTest)
        //     $(".input_1").val(Array_sum)
        //     console.log($(".input_1").val())
        // }, 500)


        // blue bbbbbbbbbbbbbbbbbbbbbbbbbbbb

        
        if (blue_flower != "") {
            bluecount += 1
        }
        if (bluecount > 4.3) {
            bluecount = 0
            bluelittlemove += 10
        }
        if (bluelittlemove > 30) {
            bluelittlemove = 0
        }
        console.log(bluecount+"jiejioeoe")
        numnum1 = -1
        var arr_two = new Array()
        for (i = 0; i < blue_flower; i++) {
            var s_1 = 0
            var s_1_1 = 0
            // var w = 0 
            const imgEl_1 = document.createElement('img')
            imgEl_1.src = "img/fB.svg"
            imgEl_1.alt = '1'

            imgEl_1.onload = (e) => {


                const image = new fabric.Image(imgEl_1, {
                    width: e.target.naturalWidth,
                    height: e.target.naturalHeight,
                    scaleX: parseInt($('.defaultImg').width()) / e.target.naturalWidth,
                    scaleY: parseInt($('.defaultImg').height()) / e.target.naturalHeight,

                    top: Math.round(650 * sRout),
                    left: Math.round(500 * sRout)
                })
                canvas.add(image)

                image.alt = 1
                image.set({
                    borderColor: '#01B0F1'
                })



                canvas.renderAll();


                image._element.alt = '1'
                arr_two.push(image)
                numnum1++
                console.log(numnum)
                // console.log(arr_two)
                var maxWidthblue = Math.round(265 * sRout)
                // for (i = 0; i < arr_two.length; i++) {
                if (arr_two.length <= 5) {
                    s_1 += 10


                    image.animate('top', Math.round(30 * sRout) + Math.round(120 * sRout) * numnum1, {
                        duration: 800 + s_1,
                        onChange: canvas.renderAll.bind(canvas),

                        easing: fabric.util.ease.easeInOutExpo
                    })
                    image.animate('left', (Math.round(45 * sRout))+(Math.round(10 * sRout)) + (maxWidthblue * bluecount) + (Math.round(bluelittlemove * sRout)), {
                        duration: 800 + s_1,
                        onChange: canvas.renderAll.bind(canvas),

                        easing: fabric.util.ease.easeInOutExpo
                    })
                } else if (arr_two.length > 5 && arr_two.length <= 10) {
                    s_1_1 += 10


                    image.animate('top', Math.round(30 * sRout) + Math.round(120 * sRout) * (numnum1 - 5), {
                        duration: 800 + s_1,
                        onChange: canvas.renderAll.bind(canvas),

                        easing: fabric.util.ease.easeInOutExpo
                    })
                    image.animate('left', (Math.round(165 * sRout)) +(Math.round(10 * sRout))+ (maxWidthblue * bluecount) + (Math.round(bluelittlemove * sRout)), {
                        duration: 800 + s_1,
                        onChange: canvas.renderAll.bind(canvas),

                        easing: fabric.util.ease.easeInOutExpo
                    })

                }
                // }



            }
        }









        // yeloow bbbbbbbbbbbbbbbbbbbbbbbbbbbb



        if (yellow_flower != "") {
            yellowcount += 1
        }
        if (yellowcount > 4.8) {
            yellowcount = 0
            yellowlittlemove += 10
        }
        if (yellowlittlemove > 30) {
            yellowlittlemove = 0
        }
        console.log(yellowcount)
        numnum2 = -1
        var arr_three = new Array()
        for (i = 0; i < yellow_flower; i++) {
            var s_1 = 0
            var s_1_1 = 0
            // var w = 0 
            const imgEl_1 = document.createElement('img')
            imgEl_1.src = "img/fY.svg"
            imgEl_1.alt = '1'

            imgEl_1.onload = (e) => {


                const image = new fabric.Image(imgEl_1, {
                    width: e.target.naturalWidth,
                    height: e.target.naturalHeight,
                    scaleX: parseInt($('.defaultImg').width()) / e.target.naturalWidth,
                    scaleY: parseInt($('.defaultImg').height()) / e.target.naturalHeight,

                    top: Math.round(650 * sRout),
                    left: Math.round(780 * sRout)
                })
                canvas.add(image)

                image.alt = 1
                image.set({
                    borderColor: '#01B0F1'
                })



                canvas.renderAll();


                image._element.alt = '1'
                arr_three.push(image)
                numnum2++
                console.log(numnum)
                // console.log(arr_two)
                var maxWidthyellow = Math.round(265 * sRout)
                // for (i = 0; i < arr_two.length; i++) {
                if (arr_three.length <= 5) {
                    s_1 += 10


                    image.animate('top', Math.round(30 * sRout) + Math.round(120 * sRout) * numnum2, {
                        duration: 800 + s_1,
                        onChange: canvas.renderAll.bind(canvas),

                        easing: fabric.util.ease.easeInOutExpo
                    })
                    image.animate('left', (Math.round(45 * sRout))+(Math.round(20 * sRout)) + (maxWidthyellow * yellowcount) + (Math.round(yellowlittlemove * sRout)), {
                        duration: 800 + s_1,
                        onChange: canvas.renderAll.bind(canvas),

                        easing: fabric.util.ease.easeInOutExpo
                    })
                } else if (arr_three.length > 5 && arr_three.length <= 10) {
                    s_1_1 += 10


                    image.animate('top', Math.round(30 * sRout) + Math.round(120 * sRout) * (numnum2 - 5), {
                        duration: 800 + s_1,
                        onChange: canvas.renderAll.bind(canvas),

                        easing: fabric.util.ease.easeInOutExpo
                    })
                    image.animate('left', (Math.round(165 * sRout))+(Math.round(20 * sRout)) + (maxWidthyellow * yellowcount) + (Math.round(yellowlittlemove * sRout)), {
                        duration: 800 + s_1,
                        onChange: canvas.renderAll.bind(canvas),

                        easing: fabric.util.ease.easeInOutExpo
                    })

                }
                // }



            }
        }


        // GREEN BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB



        if (green_flower != "") {
            greencount += 1
        }
        if (greencount > 4.8) {
            greencount = 0
            greenlittlemove += 10
        }
        if (greenlittlemove > 30) {
            greenlittlemove = 0
        }
        console.log(greencount)
        numnum3 = -1
        var arr_four = new Array()
        for (i = 0; i < green_flower; i++) {
            var s_1 = 0
            var s_1_1 = 0
            // var w = 0 
            const imgEl_1 = document.createElement('img')
            imgEl_1.src = "img/fG.svg"
            imgEl_1.alt = '1'

            imgEl_1.onload = (e) => {


                const image = new fabric.Image(imgEl_1, {
                    width: e.target.naturalWidth,
                    height: e.target.naturalHeight,
                    scaleX: parseInt($('.defaultImg').width()) / e.target.naturalWidth,
                    scaleY: parseInt($('.defaultImg').height()) / e.target.naturalHeight,

                    top: Math.round(650 * sRout),
                    left: Math.round(1100 * sRout)
                })
                canvas.add(image)

                image.alt = 1
                image.set({
                    borderColor: '#01B0F1'
                })



                canvas.renderAll();


                image._element.alt = '1'
                arr_four.push(image)
                numnum3++
                console.log(numnum)
                // console.log(arr_two)
                var maxWidthgreen = Math.round(265 * sRout)
                // for (i = 0; i < arr_two.length; i++) {
                if (arr_four.length <= 5) {
                    s_1 += 10


                    image.animate('top', Math.round(30 * sRout) + Math.round(120 * sRout) * numnum3, {
                        duration: 800 + s_1,
                        onChange: canvas.renderAll.bind(canvas),

                        easing: fabric.util.ease.easeInOutExpo
                    })
                    image.animate('left', (Math.round(45 * sRout)) +(Math.round(30 * sRout))+ (maxWidthgreen * greencount) + (Math.round(greenlittlemove * sRout)), {
                        duration: 800 + s_1,
                        onChange: canvas.renderAll.bind(canvas),

                        easing: fabric.util.ease.easeInOutExpo
                    })
                } else if (arr_four.length > 5 && arr_four.length <= 10) {
                    s_1_1 += 10


                    image.animate('top', Math.round(30 * sRout) + Math.round(120 * sRout) * (numnum3 - 5), {
                        duration: 800 + s_1,
                        onChange: canvas.renderAll.bind(canvas),

                        easing: fabric.util.ease.easeInOutExpo
                    })
                    image.animate('left', (Math.round(165 * sRout))+(Math.round(30 * sRout)) + (maxWidthgreen * greencount) + (Math.round(greenlittlemove * sRout)), {
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
});
// 計算有幾個並且拿第幾個