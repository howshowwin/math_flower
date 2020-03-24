function idontknowwhatiwrite(){
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
            countval = 50
            $('.count').val(50)
            temporary_storage = $('.count').val()
        }
        else {
            return
        }

    } else {
        temporary_storage = $('.count').val()

    }
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
    // redbtn`````````````````````````````````````````````````````

    numnum = -1
    if (redEnterNum != "") {
        redcount += 1.02
    }
    if (redcount > 4.8) {
        redcount = 0
        redlittlemove += 10
    }
    if (redlittlemove > 100) {
        redlittlemove = 0
    }

    var arr_one = new Array()
    for (i = 0; i < redEnterNum; i++) {
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

            var maxWidthRed = 280 * sRout
            numnum++
            // for (i = 0; i < arr_one.length; i++) {
            if (arr_one.length <= 5) {
                s_1 += 10


                image.animate('top', 30 * sRout + 120 * sRout * numnum, {
                    duration: 800 + s_1,
                    onChange: canvas.renderAll.bind(canvas),

                    easing: fabric.util.ease.easeInOutExpo
                })
                image.animate('left', (20 * sRout) + (maxWidthRed * redcount) + (redlittlemove * sRout), {
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
                image.animate('left', (140 * sRout) + (maxWidthRed * redcount) + (redlittlemove * sRout), {
                    duration: 800 + s_1,
                    onChange: canvas.renderAll.bind(canvas),

                    easing: fabric.util.ease.easeInOutExpo
                })

            }
            // }



        }
    }



    // bluebtn````````````````````````````````````




    if (blueEnterNum != "") {
        bluecount += 1.03
    }
    if (bluecount > 4.8) {
        bluecount = 0
        bluelittlemove += 10
    }
    if (bluelittlemove > 100) {
        bluelittlemove = 0
    }
    numnum1 = -1
    var arr_two = new Array()
    for (i = 0; i < blueEnterNum; i++) {
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
            var maxWidthblue = Math.round(280 * sRout)
            // for (i = 0; i < arr_two.length; i++) {
            if (arr_two.length <= 5) {
                s_1 += 10


                image.animate('top', Math.round(30 * sRout) + Math.round(120 * sRout) * numnum1, {
                    duration: 800 + s_1,
                    onChange: canvas.renderAll.bind(canvas),

                    easing: fabric.util.ease.easeInOutExpo
                })
                image.animate('left', (Math.round(20 * sRout)) + (maxWidthblue * bluecount) + (Math.round(bluelittlemove * sRout)), {
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
                image.animate('left', (Math.round(140 * sRout)) + (maxWidthblue * bluecount) + (Math.round(bluelittlemove * sRout)), {
                    duration: 800 + s_1,
                    onChange: canvas.renderAll.bind(canvas),

                    easing: fabric.util.ease.easeInOutExpo
                })

            }
            // }



        }
    }

    // YELLOWBTN``````````````````````````````````````````````

    if (yellowEnterNum != "") {
        yellowcount += 1.04
    }
    if (yellowcount > 4.8) {
        yellowcount = 0
        yellowlittlemove += 10
    }
    if (yellowlittlemove > 100) {
        yellowlittlemove = 0
    }
    numnum2 = -1
    var arr_three = new Array()
    for (i = 0; i < yellowEnterNum; i++) {
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
            // console.log(arr_two)
            var maxWidthyellow = Math.round(280 * sRout)
            // for (i = 0; i < arr_two.length; i++) {
            if (arr_three.length <= 5) {
                s_1 += 10


                image.animate('top', Math.round(30 * sRout) + Math.round(120 * sRout) * numnum2, {
                    duration: 800 + s_1,
                    onChange: canvas.renderAll.bind(canvas),

                    easing: fabric.util.ease.easeInOutExpo
                })
                image.animate('left', (Math.round(20 * sRout)) + (maxWidthyellow * yellowcount) + (Math.round(yellowlittlemove * sRout)), {
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
                image.animate('left', (Math.round(140 * sRout)) + (maxWidthyellow * yellowcount) + (Math.round(yellowlittlemove * sRout)), {
                    duration: 800 + s_1,
                    onChange: canvas.renderAll.bind(canvas),

                    easing: fabric.util.ease.easeInOutExpo
                })

            }
            // }



        }
    }



    // greenbtn




    if (greenEnterNum != "") {
        greencount += 1.05
    }
    if (greencount > 4.8) {
        greencount = 0
        greenlittlemove += 10
    }
    if (greenlittlemove > 100) {
        greenlittlemove = 0
    }
    numnum3 = -1
    var arr_four = new Array()
    for (i = 0; i < greenEnterNum; i++) {
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
                left: Math.round(780 * sRout)
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
            var maxWidthgreen = Math.round(280 * sRout)
            // for (i = 0; i < arr_two.length; i++) {
            if (arr_four.length <= 5) {
                s_1 += 10


                image.animate('top', Math.round(30 * sRout) + Math.round(120 * sRout) * numnum3, {
                    duration: 800 + s_1,
                    onChange: canvas.renderAll.bind(canvas),

                    easing: fabric.util.ease.easeInOutExpo
                })
                image.animate('left', (Math.round(20 * sRout)) + (maxWidthgreen * greencount) + (Math.round(greenlittlemove * sRout)), {
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
                image.animate('left', (Math.round(140 * sRout)) + (maxWidthgreen * greencount) + (Math.round(greenlittlemove * sRout)), {
                    duration: 800 + s_1,
                    onChange: canvas.renderAll.bind(canvas),

                    easing: fabric.util.ease.easeInOutExpo
                })

            }
            // }



        }
    }

    // reredbtn``````````````````````````````````````
    numnum4 = -1
    var arr_five = new Array()
    for (i = 0; i < reRedEnterNum; i++) {
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
            arr_five.push(image)

            console.log(arr_five)
            var maxWidthRed = 280 * sRout
            numnum4++
            // for (i = 0; i < arr_five.length; i++) {
            if (arr_five.length <= 5) {
                s_1 += 10


                image.animate('top', 30 * sRout + 120 * sRout * numnum4, {
                    duration: 800 + s_1,
                    onChange: canvas.renderAll.bind(canvas),

                    easing: fabric.util.ease.easeInOutExpo
                })
                image.animate('left', (30 * sRout) + (maxWidthRed * 4) + (redlittlemove * sRout), {
                    duration: 800 + s_1,
                    onChange: canvas.renderAll.bind(canvas),

                    easing: fabric.util.ease.easeInOutExpo
                })
            } else if (arr_five.length > 5 && arr_five.length <= 10) {
                s_1_1 += 10


                image.animate('top', 30 * sRout + 120 * sRout * (numnum4 - 5), {
                    duration: 800 + s_1,
                    onChange: canvas.renderAll.bind(canvas),

                    easing: fabric.util.ease.easeInOutExpo
                })
                image.animate('left', (150 * sRout) + (maxWidthRed * 4) + (redlittlemove * sRout), {
                    duration: 800 + s_1,
                    onChange: canvas.renderAll.bind(canvas),

                    easing: fabric.util.ease.easeInOutExpo
                })

            }
            // }



        }
    }







}

$('.enter').click(function () {
    canvas.clear();

   

    idontknowwhatiwrite()



})