var counttimes = ''
function idontknowwhatiwrite() {
    redcount = -1
    counttimes = 0
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


    var redEnterNum = 0
    var blueEnterNum = 0
    var yellowEnterNum = 0
    var greenEnterNum = 0
    var reRedEnterNum = 0
    var temporary_storage = 0
    let times = ''
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
    // for(i=0;i<times;i++){
    // console.log(i)
    // }

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

                    s_1 += 200


                    image.animate('top', 30 * sRout + 120 * sRout * numnum, {
                        duration: 100 + s_1,
                        onChange: canvas.renderAll.bind(canvas),

                        easing: fabric.util.ease.easeInOutExpo
                    })
                    console.log(qq + "ewqeqe")
                    image.animate('left', (45 * sRout) + (maxWidthRed * qq) / 2 + (redlittlemove * sRout), {
                        duration: 100 + s_1,
                        onChange: canvas.renderAll.bind(canvas),

                        easing: fabric.util.ease.easeInOutExpo
                    })
                } else if (arr_one.length > 5 && arr_one.length <= 10) {
                    s_1 += 400



                    image.animate('top', 30 * sRout + 120 * sRout * (numnum - 5), {
                        duration: 100 + s_1,
                        onChange: canvas.renderAll.bind(canvas),

                        easing: fabric.util.ease.easeInOutExpo
                    })
                    console.log(redcount2 + 'ejiejeje')

                    image.animate('left', (45 * sRout) + (maxWidthRed * redcount2) / 2 + (redlittlemove * sRout), {
                        duration: 300 + s_1,
                        onChange: canvas.renderAll.bind(canvas),

                        easing: fabric.util.ease.easeInOutExpo
                    })

                }
                // }



            }
        }


  


    }

    // redbtn`````````````````````````````````````````````````````

    // numnum = -1
    // if (redEnterNum != "") {
    //     redcount += 1.02
    // }
    // if (redcount > 4.8) {
    //     redcount = 0
    //     redlittlemove += 10
    // }
    // if (redlittlemove > 100) {
    //     redlittlemove = 0
    // }

    // var arr_one = new Array()
    // for (i = 0; i < redEnterNum; i++) {
    //     var s_1 = 0
    //     var s_1_1 = 0
    //     // var w = 0 
    //     const imgEl_1 = document.createElement('img')
    //     imgEl_1.src = "img/fR.svg"
    //     imgEl_1.alt = '1'

    //     imgEl_1.onload = (e) => {


    //         const image = new fabric.Image(imgEl_1, {
    //             width: e.target.naturalWidth,
    //             height: e.target.naturalHeight,
    //             scaleX: parseInt($('.defaultImg').width()) / e.target.naturalWidth,
    //             scaleY: parseInt($('.defaultImg').height()) / e.target.naturalHeight,

    //             top: 650 * sRout,
    //             left: 180 * sRout
    //         })
    //         canvas.add(image)

    //         image.alt = 1
    //         image.set({
    //             borderColor: '#01B0F1'
    //         })



    //         canvas.renderAll();


    //         image._element.alt = '1'
    //         arr_one.push(image)

    //         var maxWidthRed = 265 * sRout
    //         numnum++
    //         // for (i = 0; i < arr_one.length; i++) {
    //         if (arr_one.length <= 5) {
    //             s_1 += 10


    //             image.animate('top', 30 * sRout + 120 * sRout * numnum, {
    //                 duration: 800 + s_1,
    //                 onChange: canvas.renderAll.bind(canvas),

    //                 easing: fabric.util.ease.easeInOutExpo
    //             })
    //             image.animate('left', (28 * sRout) + (maxWidthRed * redcount) + (redlittlemove * sRout), {
    //                 duration: 800 + s_1,
    //                 onChange: canvas.renderAll.bind(canvas),

    //                 easing: fabric.util.ease.easeInOutExpo
    //             })
    //         } else if (arr_one.length > 5 && arr_one.length <= 10) {
    //             s_1_1 += 10


    //             image.animate('top', 30 * sRout + 120 * sRout * (numnum - 5), {
    //                 duration: 800 + s_1,
    //                 onChange: canvas.renderAll.bind(canvas),

    //                 easing: fabric.util.ease.easeInOutExpo
    //             })
    //             image.animate('left', (161 * sRout) + (maxWidthRed * redcount) + (redlittlemove * sRout), {
    //                 duration: 800 + s_1,
    //                 onChange: canvas.renderAll.bind(canvas),

    //                 easing: fabric.util.ease.easeInOutExpo
    //             })

    //         }
    //         // }



    //     }
    // }



    // // bluebtn````````````````````````````````````




    // if (blueEnterNum != "") {
    //     bluecount += 1.03
    // }
    // if (bluecount > 4.8) {
    //     bluecount = 0
    //     bluelittlemove += 10
    // }
    // if (bluelittlemove > 100) {
    //     bluelittlemove = 0
    // }
    // numnum1 = -1
    // var arr_two = new Array()
    // for (i = 0; i < blueEnterNum; i++) {
    //     var s_1 = 0
    //     var s_1_1 = 0
    //     // var w = 0 
    //     const imgEl_1 = document.createElement('img')
    //     imgEl_1.src = "img/fB.svg"
    //     imgEl_1.alt = '1'

    //     imgEl_1.onload = (e) => {


    //         const image = new fabric.Image(imgEl_1, {
    //             width: e.target.naturalWidth,
    //             height: e.target.naturalHeight,
    //             scaleX: parseInt($('.defaultImg').width()) / e.target.naturalWidth,
    //             scaleY: parseInt($('.defaultImg').height()) / e.target.naturalHeight,

    //             top: Math.round(650 * sRout),
    //             left: Math.round(500 * sRout)
    //         })
    //         canvas.add(image)

    //         image.alt = 1
    //         image.set({
    //             borderColor: '#01B0F1'
    //         })



    //         canvas.renderAll();


    //         image._element.alt = '1'
    //         arr_two.push(image)
    //         numnum1++
    //         var maxWidthblue = Math.round( 265 * sRout)
    //         // for (i = 0; i < arr_two.length; i++) {
    //         if (arr_two.length <= 5) {
    //             s_1 += 10


    //             image.animate('top', Math.round(30 * sRout) + Math.round(120 * sRout) * numnum1, {
    //                 duration: 800 + s_1,
    //                 onChange: canvas.renderAll.bind(canvas),

    //                 easing: fabric.util.ease.easeInOutExpo
    //             })
    //             image.animate('left', (Math.round(28 * sRout)) + (maxWidthblue * bluecount) + (Math.round(bluelittlemove * sRout)), {
    //                 duration: 800 + s_1,
    //                 onChange: canvas.renderAll.bind(canvas),

    //                 easing: fabric.util.ease.easeInOutExpo
    //             })
    //         } else if (arr_two.length > 5 && arr_two.length <= 10) {
    //             s_1_1 += 10


    //             image.animate('top', Math.round(30 * sRout) + Math.round(120 * sRout) * (numnum1 - 5), {
    //                 duration: 800 + s_1,
    //                 onChange: canvas.renderAll.bind(canvas),

    //                 easing: fabric.util.ease.easeInOutExpo
    //             })
    //             image.animate('left', (Math.round(161 * sRout)) + (maxWidthblue * bluecount) + (Math.round(bluelittlemove * sRout)), {
    //                 duration: 800 + s_1,
    //                 onChange: canvas.renderAll.bind(canvas),

    //                 easing: fabric.util.ease.easeInOutExpo
    //             })

    //         }
    //         // }



    //     }
    // }

    // // YELLOWBTN``````````````````````````````````````````````

    // if (yellowEnterNum != "") {
    //     yellowcount += 1.04
    // }
    // if (yellowcount > 4.8) {
    //     yellowcount = 0
    //     yellowlittlemove += 10
    // }
    // if (yellowlittlemove > 100) {
    //     yellowlittlemove = 0
    // }
    // numnum2 = -1
    // var arr_three = new Array()
    // for (i = 0; i < yellowEnterNum; i++) {
    //     var s_1 = 0
    //     var s_1_1 = 0
    //     // var w = 0 
    //     const imgEl_1 = document.createElement('img')
    //     imgEl_1.src = "img/fY.svg"
    //     imgEl_1.alt = '1'

    //     imgEl_1.onload = (e) => {


    //         const image = new fabric.Image(imgEl_1, {
    //             width: e.target.naturalWidth,
    //             height: e.target.naturalHeight,
    //             scaleX: parseInt($('.defaultImg').width()) / e.target.naturalWidth,
    //             scaleY: parseInt($('.defaultImg').height()) / e.target.naturalHeight,

    //             top: Math.round(650 * sRout),
    //             left: Math.round(780 * sRout)
    //         })
    //         canvas.add(image)

    //         image.alt = 1
    //         image.set({
    //             borderColor: '#01B0F1'
    //         })



    //         canvas.renderAll();


    //         image._element.alt = '1'
    //         arr_three.push(image)
    //         numnum2++
    //         // console.log(arr_two)
    //         var maxWidthyellow = Math.round( 265 * sRout)
    //         // for (i = 0; i < arr_two.length; i++) {
    //         if (arr_three.length <= 5) {
    //             s_1 += 10


    //             image.animate('top', Math.round(30 * sRout) + Math.round(120 * sRout) * numnum2, {
    //                 duration: 800 + s_1,
    //                 onChange: canvas.renderAll.bind(canvas),

    //                 easing: fabric.util.ease.easeInOutExpo
    //             })
    //             image.animate('left', (Math.round(38 * sRout)) + (maxWidthyellow * 2) + (Math.round(yellowlittlemove * sRout)), {
    //                 duration: 800 + s_1,
    //                 onChange: canvas.renderAll.bind(canvas),

    //                 easing: fabric.util.ease.easeInOutExpo
    //             })
    //         } else if (arr_three.length > 5 && arr_three.length <= 10) {
    //             s_1_1 += 10


    //             image.animate('top', Math.round(30 * sRout) + Math.round(120 * sRout) * (numnum2 - 5), {
    //                 duration: 800 + s_1,
    //                 onChange: canvas.renderAll.bind(canvas),

    //                 easing: fabric.util.ease.easeInOutExpo
    //             })
    //             image.animate('left', (Math.round(161 * sRout)) + (maxWidthyellow * yellowcount) + (Math.round(yellowlittlemove * sRout)), {
    //                 duration: 800 + s_1,
    //                 onChange: canvas.renderAll.bind(canvas),

    //                 easing: fabric.util.ease.easeInOutExpo
    //             })

    //         }
    //         // }



    //     }
    // }



    // // greenbtn




    // if (greenEnterNum != "") {
    //     greencount += 1.05
    // }
    // if (greencount > 4.8) {
    //     greencount = 0
    //     greenlittlemove += 10
    // }
    // if (greenlittlemove > 100) {
    //     greenlittlemove = 0
    // }
    // numnum3 = -1
    // var arr_four = new Array()
    // for (i = 0; i < greenEnterNum; i++) {
    //     var s_1 = 0
    //     var s_1_1 = 0
    //     // var w = 0 
    //     const imgEl_1 = document.createElement('img')
    //     imgEl_1.src = "img/fG.svg"
    //     imgEl_1.alt = '1'

    //     imgEl_1.onload = (e) => {


    //         const image = new fabric.Image(imgEl_1, {
    //             width: e.target.naturalWidth,
    //             height: e.target.naturalHeight,
    //             scaleX: parseInt($('.defaultImg').width()) / e.target.naturalWidth,
    //             scaleY: parseInt($('.defaultImg').height()) / e.target.naturalHeight,

    //             top: Math.round(650 * sRout),
    //             left: Math.round(780 * sRout)
    //         })
    //         canvas.add(image)

    //         image.alt = 1
    //         image.set({
    //             borderColor: '#01B0F1'
    //         })



    //         canvas.renderAll();


    //         image._element.alt = '1'
    //         arr_four.push(image)
    //         numnum3++
    //         var maxWidthgreen = Math.round( 265 * sRout)
    //         // for (i = 0; i < arr_two.length; i++) {
    //         if (arr_four.length <= 5) {
    //             s_1 += 10


    //             image.animate('top', Math.round(30 * sRout) + Math.round(120 * sRout) * numnum3, {
    //                 duration: 800 + s_1,
    //                 onChange: canvas.renderAll.bind(canvas),

    //                 easing: fabric.util.ease.easeInOutExpo
    //             })
    //             image.animate('left', (Math.round(38 * sRout)) + (maxWidthgreen * 3) + (Math.round(greenlittlemove * sRout)), {
    //                 duration: 800 + s_1,
    //                 onChange: canvas.renderAll.bind(canvas),

    //                 easing: fabric.util.ease.easeInOutExpo
    //             })
    //         } else if (arr_four.length > 5 && arr_four.length <= 10) {
    //             s_1_1 += 10


    //             image.animate('top', Math.round(30 * sRout) + Math.round(120 * sRout) * (numnum3 - 5), {
    //                 duration: 800 + s_1,
    //                 onChange: canvas.renderAll.bind(canvas),

    //                 easing: fabric.util.ease.easeInOutExpo
    //             })
    //             image.animate('left', (Math.round(171 * sRout)) + (maxWidthgreen * 3) + (Math.round(greenlittlemove * sRout)), {
    //                 duration: 800 + s_1,
    //                 onChange: canvas.renderAll.bind(canvas),

    //                 easing: fabric.util.ease.easeInOutExpo
    //             })

    //         }
    //         // }



    //     }
    // }

    // // reredbtn``````````````````````````````````````
    // numnum4 = -1
    // var arr_five = new Array()
    // for (i = 0; i < reRedEnterNum; i++) {
    //     var s_1 = 0
    //     var s_1_1 = 0
    //     // var w = 0 
    //     const imgEl_1 = document.createElement('img')
    //     imgEl_1.src = "img/fR.svg"
    //     imgEl_1.alt = '1'

    //     imgEl_1.onload = (e) => {


    //         const image = new fabric.Image(imgEl_1, {
    //             width: e.target.naturalWidth,
    //             height: e.target.naturalHeight,
    //             scaleX: parseInt($('.defaultImg').width()) / e.target.naturalWidth,
    //             scaleY: parseInt($('.defaultImg').height()) / e.target.naturalHeight,

    //             top: 650 * sRout,
    //             left: 180 * sRout
    //         })
    //         canvas.add(image)

    //         image.alt = 1
    //         image.set({
    //             borderColor: '#01B0F1'
    //         })



    //         canvas.renderAll();


    //         image._element.alt = '1'
    //         arr_five.push(image)

    //         console.log(arr_five)
    //         var maxWidthRed = 265 * sRout
    //         numnum4++
    //         // for (i = 0; i < arr_five.length; i++) {
    //         if (arr_five.length <= 5) {
    //             s_1 += 10


    //             image.animate('top', 30 * sRout + 120 * sRout * numnum4, {
    //                 duration: 800 + s_1,
    //                 onChange: canvas.renderAll.bind(canvas),

    //                 easing: fabric.util.ease.easeInOutExpo
    //             })
    //             image.animate('left', (38 * sRout) + (maxWidthRed * 4) + (redlittlemove * sRout), {
    //                 duration: 800 + s_1,
    //                 onChange: canvas.renderAll.bind(canvas),

    //                 easing: fabric.util.ease.easeInOutExpo
    //             })
    //         } else if (arr_five.length > 5 && arr_five.length <= 10) {
    //             s_1_1 += 10


    //             image.animate('top', 30 * sRout + 120 * sRout * (numnum4 - 5), {
    //                 duration: 800 + s_1,
    //                 onChange: canvas.renderAll.bind(canvas),

    //                 easing: fabric.util.ease.easeInOutExpo
    //             })
    //             image.animate('left', (171 * sRout) + (maxWidthRed * 4) + (redlittlemove * sRout), {
    //                 duration: 800 + s_1,
    //                 onChange: canvas.renderAll.bind(canvas),

    //                 easing: fabric.util.ease.easeInOutExpo
    //             })

    //         }
    //         // }



    //     }
    // }







}

$('.enter').click(function () {



    idontknowwhatiwrite()
    // redlittlemove += 10
 

})
