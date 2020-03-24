var red
var blue
var yellow
var green

$('.redbtn').click(function () {

    $('.redchoose').css({
        transform: "scale(1)"
    })

    setTimeout(function () {
        red = 1
    }, 100)
})
$('.bluebtn').click(function () {

    $('.bluechoose').css({
        transform: "scale(1)"
    })
    setTimeout(function () {
        blue = 1
    }, 100)

})
$('.yellowbtn').click(function () {

    $('.yellowchoose').css({
        transform: "scale(1)"
    })
    setTimeout(function () {
        yellow = 1
    }, 100)
})
$('.greenbtn').click(function () {

    $('.greenchoose').css({
        transform: "scale(1)"
    })
    setTimeout(function () {
        green = 1
    }, 100)
})




$('body').bind('click', function (event) {
    if (red == 1) {
        console.log(event)
        var evt = event.srcElement ? event.srcElement : event.target;
        var allele = []

        var opop = event.target.classList.length

        for (i = 0; i < opop; i++) {
            allele.push(event.target.classList[i])

        }


        for (i = 0; i < allele.length; i++) {
            if (allele[i] == "redbtn") return;
            else {

                $('.choose_area').css({
                    transform: "scale(0)"
                })
            }
        }
        red = 0
    }
});


$('body').bind('click', function (event) {
    if (blue == 1) {
        console.log(event)
        var evt = event.srcElement ? event.srcElement : event.target;
        var allele = []

        var opop = event.target.classList.length

        for (i = 0; i < opop; i++) {
            allele.push(event.target.classList[i])

        }


        for (i = 0; i < allele.length; i++) {
            if (allele[i] == "bluebtn") return;
            else {

                $('.choose_area').css({
                    transform: "scale(0)"
                })
            }
        }
        blue = 0
    }
});


$('body').bind('click', function (event) {
    if (yellow == 1) {
        console.log(event)
        var evt = event.srcElement ? event.srcElement : event.target;
        var allele = []

        var opop = event.target.classList.length

        for (i = 0; i < opop; i++) {
            allele.push(event.target.classList[i])

        }


        for (i = 0; i < allele.length; i++) {
            if (allele[i] == "yellowbtn") return;
            else {

                $('.choose_area').css({
                    transform: "scale(0)"
                })
            }
        }
        yellow = 0
    }
});

$('body').bind('click', function (event) {
    if (green == 1) {
        console.log(event)
        var evt = event.srcElement ? event.srcElement : event.target;
        var allele = []

        var opop = event.target.classList.length

        for (i = 0; i < opop; i++) {
            allele.push(event.target.classList[i])

        }


        for (i = 0; i < allele.length; i++) {
            if (allele[i] == "greenbtn") return;
            else {

                $('.choose_area').css({
                    transform: "scale(0)"
                })
            }
        }
        green = 0
    }
});


$('body').bind('touchstart', function (event) {


});

// 點擊產生花片欄位----------------------------



var canvas = new fabric.Canvas('canvas');
canvas.setHeight(500);
canvas.setWidth(500);
const imgset = document.querySelector('.background')
const defaultImg = document.querySelector('.defaultImg')
let movingImage
let movingSrc
let imgDragOffset = {
    offsetX: 0,
    offsetY: 0
}

var oldimgX = ''
var oldimgY = ''

function saveImg(e) {
    console.log(e.target.src)

    if (e.target.tagName.toLowerCase() === 'img') {
        movingSrc = e.target.src
        imgDragOffset.offsetX = e.clientX - e.target.offsetLeft
        imgDragOffset.offsetY = e.clientY - e.target.offsetTop
        movingImage = e.target
        oldimgX = movingImage.width / movingImage.naturalWidth
        oldimgY = movingImage.height / movingImage.naturalHeight
    }
    canvas.discardActiveObject();
    canvas.renderAll();

}
var jijo = ''
function saveFoneImg(e) {


    if (e.target.tagName.toLowerCase() === 'img') {

        imgDragOffset.offsetX = e.targetTouches[0].clientX - e.target.width / 2
        imgDragOffset.offsetY = e.targetTouches[0].clientY - e.target.height / 2
        movingImage = e.target
        oldimgX = movingImage.width / movingImage.naturalWidth
        oldimgY = movingImage.height / movingImage.naturalHeight
    }

    let copyObj = movingImage.cloneNode(true);
    document.body.appendChild(copyObj);

    copyObj.style.position = "absolute"
    copyObj.style.top = e.target.y + "px"
    copyObj.style.left = e.target.x + "px"
    copyObj.style.zIndex = "9999"
    copyObj.style.opacity = "0.6"


    copyObj.style.top = e.targetTouches[0].clientY - e.target.height / 2 + "px"
    copyObj.style.left = e.targetTouches[0].clientX - e.target.width / 2 - spcial_move + "px"
    jijo = copyObj
    canvas.discardActiveObject();
    canvas.renderAll();
}
var odX
var odY
function drag(e) {


    e.preventDefault();
    console.log(e)
    jijo.style.transition = "none"

    jijo.style.top = e.targetTouches[0].clientY - e.target.height / 2 + "px"
    jijo.style.left = e.targetTouches[0].clientX - e.target.width / 2 - spcial_move + "px"

    odX = e.targetTouches[0].clientX - e.target.width / 2
    odY = e.targetTouches[0].clientY - e.target.height / 2
}
var push = false
var image_q = new Array()

function pushimg(e) {
    let yoyo = $('.canvas_wrapper').offset().left
    let yoyot = $('.canvas_wrapper').offset().top

    let offsetY = odY
    let offsetX = odX
    document.body.removeChild(jijo);
    console.log(spcial_move)
    let h
    if (e.changedTouches[0].clientY - yoyot - e.target.height / 2 < 0) {
        h = 35
    } else if ((e.changedTouches[0].clientY - yoyot - e.target.height / 2 + e.target.height) > ($('.canvas_wrapper').height())) {
        h = $('.canvas_wrapper').height() - e.target.height - 20
    } else {
        h = e.changedTouches[0].clientY - yoyot - e.target.height / 2
    }
    let w
    if (e.changedTouches[0].clientX - yoyo - e.target.width / 2 < 0) {
        w = 0
    }
    else if (e.changedTouches[0].clientX - yoyo - e.target.width / 2 + e.target.width > ($('.canvas_wrapper').width())) {
        w = $('.canvas_wrapper').width() * 999 + e.target.width / 2
    }
    else {
        w = e.changedTouches[0].clientX - yoyo - e.target.width
    }
    const image_qq = new fabric.Image(movingImage, {
        width: movingImage.naturalWidth,
        height: movingImage.naturalHeight,
        scaleX: movingImage.width / movingImage.naturalWidth,
        scaleY: movingImage.height / movingImage.naturalHeight,
        top: h,
        left: w + movingImage.naturalWidth / 4,
        lockScalingFlip: true
    })


    image_qq.set({
        borderColor: 'rgba(0,0,0,0)'
    })
    canvas.add(image_qq)

    image_q.push(image_qq)
}




function dropImg(e) {
    const { offsetX, offsetY } = e.e



    var oriTop = offsetY - imgDragOffset.offsetY
    var oriLeft = offsetX - imgDragOffset.offsetX
    // if()
    var mix_padding = (obj_padding) + (cursor_padding / 2)
    console.log($('.canvas-container').position().top)
    console.log($('.canvas-container').position().left)
    console.log($('.canvas-container').width())
    console.log($('.canvas-container').height())
    console.log($('.canvas-container').position().top + $('.canvas-container').height())
    console.log(oriTop + movingImage.height)
    if (oriTop - mix_padding < $('.canvas-container').position().top) {
        oriTop = mix_padding
    }
    if (oriLeft - mix_padding < $('.canvas-container').position().left) {
        oriLeft = mix_padding
    }
    if (oriTop + movingImage.height + mix_padding > $('.canvas-container').height()) {
        oriTop = $('.canvas-container').height() - movingImage.height - mix_padding
    }
    if (oriLeft + movingImage.width + mix_padding > $('.canvas-container').width()) {
        oriLeft = $('.canvas-container').width() - movingImage.width - mix_padding
    }
    const image_qq = new fabric.Image(movingImage, {
        width: movingImage.naturalWidth,
        height: movingImage.naturalHeight,
        scaleX: movingImage.width / movingImage.naturalWidth,
        scaleY: movingImage.height / movingImage.naturalHeight,
        top: oriTop,
        left: oriLeft,
        lockScalingFlip: true
    })
    image_qq.alt = 1
    image_qq.set({
        borderColor: '#01B0F1'
    })

    image_q.push(image_qq)

    canvas.add(image_qq)
    movingImage = ""
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




// document.oncontextmenu = function (e) {
//     e.preventDefault();
// };

canvas.on('drop', dropImg)

$('.defaultImg').mousedown(function () {
}, saveImg);
imgset.addEventListener('touchstart', saveFoneImg)
imgset.addEventListener("touchmove", drag);
imgset.addEventListener("touchend", pushimg);





// 設定 外觀


fabric.Canvas.prototype.customiseControls({
    tl: {
        action: function () {

        }
    },
    tr: {
        action: function () {
            // var activeObject = canvas.getActiveObject()
            // if (activeObject) {
            //         canvas.remove(activeObject);
            // }
            function getSelection() {
                var ji = canvas.getActiveObject()
                canvas.remove(ji)
                return canvas.getActiveObject() == null ? canvas.getActiveGroup() : canvas.getActiveObject()
            }
         

            var o = getSelection();
            
            o._objects.forEach(function (object, key) {
                canvas.remove(object);
            });
            canvas.discardActiveObject()


            canvas.renderAll();



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

        },
        cursor: 'pointer'
    },
    bl: {
        action: "rotate",

    },
    br: {
        action: "scale",
        // function () {
        //     canvas.on('mouse:down', e => {
        //         console.log(e)
        //     })
        // },
        cursor: 'pointer'
    },
    mb: {
        action: function () {

        }
    },
    mt: {
        action: function () {

        }
    },
    ml: {
        action: function () {

        }
    },
    mr: {
        action: function () {

        }
    },
    mtr: {
        action: function () {

        }
    },
}, function () {

    canvas.renderAll()
})


fabric.Object.prototype.setControlsVisibility({
    bl: true, // 左下
    br: true, // 右下
    mb: false, // 下中
    ml: false, // 中左
    mr: false, // 中右
    mt: false, // 上中
    tl: false, // 上左
    tr: true, // 上右
    mtr: false // 旋轉控制鍵
})

fabric.Canvas.prototype.cursorMap[1] = 'pointer'
// fabric.Canvas.prototype.cursorMap[2] = 'pointer'
fabric.Canvas.prototype.cursorMap[3] = 'pointer'
// fabric.Canvas.prototype.cursorMap[4] = 'pointer'
fabric.Canvas.prototype.cursorMap[5] = 'pointer'
// fabric.Canvas.prototype.cursorMap[6] = 'pointer'
// fabric.Canvas.prototype.cursorMap[7] = 'pointer'
// fabric.Canvas.prototype.cursorMap[8] = 'pointer'
// fabric.Canvas.prototype.cursorMap[9] = 'pointer'
// fabric.Canvas.prototype.cursorMap[1] = 'pointer'
