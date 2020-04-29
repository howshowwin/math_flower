var counttimes = ''
function idontknowwhatiwrite() {
    redcount = -1
    counttimes = 0

    var redlittlemove = 0


    var numnum = 0



    var redEnterNum = 0
    var blueEnterNum = 0
    var yellowEnterNum = 0
    var greenEnterNum = 0
    var reRedEnterNum = 0
    var temporary_storage = 0
    let countval = $('.count').val()
    if (countval > 50) {
        var r = confirm("欄位數字不得大於50，按確認後將會自動跳轉成50，取消將無動作")
        if (r == true) {
            canvas.clear();

            countval = 50
            $('.count').val(50)
            temporary_storage = $('.count').val()
        }
        else {
            return
        }

    } else {
        temporary_storage = $('.count').val()
        canvas.clear();

    }
    switch (true) {
        case (0 < temporary_storage && temporary_storage <= 5):
            counttimes = 1
            break;
        case (5 < temporary_storage && temporary_storage <= 10):
            counttimes = 2
            break;
        case (10 < temporary_storage && temporary_storage <= 15):
            counttimes = 3
            break;
        case (15 < temporary_storage && temporary_storage <= 20):
            counttimes = 4
            break;
        case (20 < temporary_storage && temporary_storage <= 25):
            counttimes = 5
            break;
        case (25 < temporary_storage && temporary_storage <= 30):
            counttimes = 6
            break;
        case (30 < temporary_storage && temporary_storage <= 35):
            counttimes = 7
            break;
        case (35 < temporary_storage && temporary_storage <= 40):
            counttimes = 8
            break;
        case (40 < temporary_storage && temporary_storage <= 45):
            counttimes = 9
            break;
        case (45 < temporary_storage && temporary_storage <= 50):
            counttimes = 10
            break;

    }
    console.log("ewww" + counttimes)
    if (temporary_storage > 40) {
        reRedEnterNum = Math.abs(40 - temporary_storage)
        temporary_storage = temporary_storage - reRedEnterNum

    }
    if (temporary_storage > 30) {
        greenEnterNum = Math.abs(30 - temporary_storage)
        temporary_storage = temporary_storage - greenEnterNum

    }
    if (temporary_storage > 20) {
        yellowEnterNum = Math.abs(20 - temporary_storage)
        temporary_storage = temporary_storage - yellowEnterNum

    }
    if (temporary_storage > 10) {
        blueEnterNum = Math.abs(10 - temporary_storage)
        temporary_storage = temporary_storage - blueEnterNum


    }
    if (temporary_storage > 0) {
        redEnterNum = Math.abs(0 - temporary_storage)

    }
    redlittlemove = 0
    redcount = -1

    if (redEnterNum) {
        doit(redEnterNum, "img/fR.svg", 180)
    }
    if (blueEnterNum) {
        setTimeout(function () {
            doit(blueEnterNum, "img/fB.svg", 500)

        }, 250)
    }
    if (yellowEnterNum) {
        setTimeout(function () {
            doit(yellowEnterNum, "img/fY.svg", 700)
        }, 500)
    }
    if (greenEnterNum) {
        setTimeout(function () {
            doit(greenEnterNum, "img/fG.svg", 1100)

        }, 750)
    }
    if (reRedEnterNum) {
        setTimeout(function () {
            doit(reRedEnterNum, "img/fR.svg", 180)
        }, 1000)
    }


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

                    s_1 += 40


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
                    s_1 += 40



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



            }
        }





    }








}
var settimeclick = 1
$('.enter').click(function () {

    if (settimeclick == 1) {
        idontknowwhatiwrite()
        settimeclick = 0
        $('.enter').css({
            pointerEvents: "none"
        })
    }
    setTimeout(function () {
        $('.enter').css({
            pointerEvents: "all"
        })

    }, 1700)
    settimeclick = 1

    // redlittlemove += 10


})
