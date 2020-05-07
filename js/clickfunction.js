$('.info-page').css({
    background: `url(setpic/${set_pic_info[0]})`,
    backgroundSize: "cover"
  })
var red = 0
var blue = 0
var yellow = 0
var green = 0
var display_count = 0
$('.display_btn').click(function () {
    if (display_count == 0) {
        $('.count').removeClass('display_none')
        $(this).css({
            background: "url(img/btN2.png)",
            backgroundSize: "cover"
        })
        let items = canvas.getObjects()
        let Array_sum
        let ArrTest = new Array();　// 宣告一個新的陣列為 ArrTest

        for (i = 0; i < items.length; i++) {
            ArrTest[i] = parseInt(items[i]._element.alt)

        }
        Array_sum = SumData(ArrTest)
        $(".count").val(Array_sum)
        countRemove()

        display_count = 1
    } else if (display_count == 1) {
        $('.count').addClass('display_none')
        $(this).css({
            background: "url(img/btN1.png)",
            backgroundSize: "cover"
        })
        display_count = 0

    }
})

$('.redbtn').click(function (e) {
    e.stopPropagation();
    $('.choose_area').not('.redchoose').css({
        transform: "scale(0)"
    })
    if (red == 0) {
        $('.redchoose').css({
            transform: "scale(1)"
        })

        setTimeout(function () {
            red = 1
        }, 100)
    } else if (red == 1) {
        $('.redchoose').css({
            transform: "scale(0)"
        })
        red = 0
    }

})
$('.bluebtn').click(function (e) {
    e.stopPropagation();
    $('.choose_area').not('.bluechoose').css({
        transform: "scale(0)"
    })
    if (blue == 0) {
        $('.bluechoose').css({
            transform: "scale(1)"
        })
        setTimeout(function () {
            blue = 1
        }, 100)
    } else if (blue == 1) {
        $('.bluechoose').css({
            transform: "scale(0)"
        })
        blue = 0
    }


})
$('.yellowbtn').click(function (e) {
    e.stopPropagation();
    $('.choose_area').not('.yellowchoose').css({
        transform: "scale(0)"
    })
    if (yellow == 0) {
        $('.yellowchoose').css({
            transform: "scale(1)"
        })
        setTimeout(function () {
            yellow = 1
        }, 100)
    } else if (yellow == 1) {
        $('.yellowchoose').css({
            transform: "scale(0)"
        })
        yellow = 0
    }

})
$('.greenbtn').click(function (e) {
    e.stopPropagation();
    $('.choose_area').not('.greenchoose').css({
        transform: "scale(0)"
    })
    if (green == 0) {
        $('.greenchoose').css({
            transform: "scale(1)"
        })
        setTimeout(function () {
            green = 1
        }, 100)
    } else if (green == 1) {
        $('.greenchoose').css({
            transform: "scale(0)"
        })
        green = 0
    }

})




$('body').bind('click', function (event) {
    if (red == 1) {


        $('.redchoose').css({
            transform: "scale(0)"
        })
    }
    red = 0

});


$('body').bind('click', function (event) {
    if (blue == 1) {

        $('.bluechoose').css({
            transform: "scale(0)"
        })
    }
    blue = 0
});


$('body').bind('click', function (event) {
    if (yellow == 1) {

        $('.yellowchoose').css({
            transform: "scale(0)"
        })
    }
    yellow = 0
});

$('body').bind('click', function (event) {
    if (green == 1) {


        $('.greenchoose').css({
            transform: "scale(0)"
        })
    }

    green = 0
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
    movingImage = ''


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
    copyObj.style.left = e.targetTouches[0].clientX - e.target.width / 2 + "px"
    jijo = copyObj
    canvas.discardActiveObject();
    canvas.renderAll();
}
var odX
var odY
function drag(e) {


    e.preventDefault();

    jijo.style.top = e.targetTouches[0].clientY - e.target.height / 2 + "px"
    jijo.style.left = e.targetTouches[0].clientX - e.target.width / 2 + "px"

    odX = e.targetTouches[0].clientX - e.target.width / 2
    odY = e.targetTouches[0].clientY - e.target.height / 2
}
var push = false
var image_q = new Array()

function pushimg(e) {

    document.body.removeChild(jijo);

    var oriTop = e.changedTouches[0].clientY - e.target.height
    var oriLeft = e.changedTouches[0].clientX - e.target.width

    var mix_padding = (obj_padding) + (cursor_padding / 2)



    if (oriTop - mix_padding < 0) {
        oriTop = mix_padding
    }
    if (oriLeft < 0) {
        oriLeft = 0
    }
    if (oriTop + movingImage.height > $('.canvas-container').height()) {
        movingImage = ''
    }
    if (oriLeft + movingImage.width + mix_padding > $('.canvas-container').width()) {
        movingImage = ''
    }






    if (movingImage != '') {
        const image_qq = new fabric.Image(movingImage, {
            width: movingImage.naturalWidth,
            height: movingImage.naturalHeight,
            scaleX: movingImage.width / movingImage.naturalWidth,
            scaleY: movingImage.height / movingImage.naturalHeight,
            top: oriTop,
            left: oriLeft,
            lockScalingFlip: true
        })


        image_qq.set({
            borderColor: '#01B0F1'
        })

        canvas.add(image_qq)

        image_q.push(image_qq)
        movingImage = ""
    }


    setTimeout(function ww() {
        var items = canvas.getObjects()
        var Array_sum
        var ArrTest = new Array();　// 宣告一個新的陣列為 ArrTest
        console.log(items)
        for (i = 0; i < items.length; i++) {
            ArrTest[i] = parseInt(items[i]._element.alt)

        }
        Array_sum = SumData(ArrTest)
        $(".count").val(Array_sum)

        countRemove()

    }, 500)


}




function dropImg(e) {
    const { offsetX, offsetY } = e.e


    // cursor_padding
    // obj_padding

    var oriTop = offsetY - imgDragOffset.offsetY
    var oriLeft = offsetX - imgDragOffset.offsetX
    // if()
    var mix_padding = (obj_padding) + (cursor_padding / 2)
    // var mix_padding = 0


    if (oriTop - mix_padding < 0) {
        oriTop = mix_padding
    }
    if (oriLeft < 0) {
        oriLeft = 0
    }
    if (oriTop + movingImage.height > $('.canvas-container').height()) {
        oriTop = $('.canvas-container').height() - movingImage.height
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

        }
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

var u = navigator.userAgent;
var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端


var clickappend = 0
var clickrow = 0
var clicklittlemove = 0

var u = navigator.userAgent;
var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

$('.enter_input').blur(function () {

    if (isAndroid || isiOS) {
        clicknum()
    }
})

$('.count').blur(function () {

    if (isAndroid || isiOS) {
        setTimeout(function () {
            idontknowwhatiwrite()

        }, 200)
    }
})
$('.defaultImg').click(function (e) {
    let movingImage = e.target
    const image_qq = new fabric.Image(movingImage, {
        width: movingImage.naturalWidth,
        height: movingImage.naturalHeight,
        scaleX: movingImage.width / movingImage.naturalWidth,
        scaleY: movingImage.height / movingImage.naturalHeight,
        top: 40 * sRout + 120 * clickappend * sRout,
        left: 30 * sRout + clickrow * 135 * sRout + clicklittlemove * sRout,
        lockScalingFlip: true
    })
    image_qq.alt = 1
    image_qq.set({
        borderColor: '#01B0F1'
    })
    clickappend++
    if (clickappend == 5) {
        clickrow++
        clickappend = 0
    }
    if (clickrow == 10) {
        clickrow = 0
        clicklittlemove += 10
    }
    if (clicklittlemove > 10) {
        clicklittlemove = 0
    }
    image_q.push(image_qq)

    canvas.add(image_qq)
    movingImage = ""
    setTimeout(function ww() {
        var items = canvas.getObjects()
        var Array_sum
        var ArrTest = new Array();　// 宣告一個新的陣列為 ArrTest

        for (i = 0; i < items.length; i++) {
            ArrTest[i] = parseInt(items[i]._element.alt)

        }
        Array_sum = SumData(ArrTest)
        $(".count").val(Array_sum)
        countRemove()

    }, 500)

})


// 設定 外觀


fabric.Canvas.prototype.customiseControls({
    tl: {
        action: function () {

        }
    },
    tr: {
        action: function (e) {


            var ji = canvas.getActiveObject()
            console.log(ji)
            console.log(objseleted)
            if (ji.cacheKey == objseleted) {
                if (ji) {

                    canvas.remove(ji)
                }
            }
            if (ji._objects) {
                function getSelection() {

                    return canvas.getActiveObject() == null ? canvas.getActiveGroup() : canvas.getActiveObject()
                }

                var o = getSelection();

                o._objects.forEach(function (object, key) {

                    canvas.remove(object);
                });
                canvas.discardActiveObject()

            }



            canvas.renderAll();

            setTimeout(function ww() {
                var items = canvas.getObjects()
                var Array_sum
                var ArrTest = new Array();　// 宣告一個新的陣列為 ArrTest

                for (i = 0; i < items.length; i++) {
                    ArrTest[i] = parseInt(items[i]._element.alt)

                }
                Array_sum = SumData(ArrTest)
                $(".count").val(Array_sum)
            }, 500)




        },
        cursor: 'pointer'
    },
    bl: {
        action: 'rotate',
        cursor: 'pointer'

    },
    br: {
        action: "scale",
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

fabric.Canvas.prototype.customiseControls({
    bl: {
        action: function () {

        },
        cursor: 'pointer'

    },
    br: {
        action: function () {

        },
        cursor: 'pointer'
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
fabric.Canvas.prototype.cursorMap[3] = 'pointer'
fabric.Canvas.prototype.cursorMap[5] = 'pointer'


var objseleted
var kok = false
var objscalerotate

canvas.on('selection:updated', function (e) {
    fabric.Canvas.prototype.customiseControls({
        bl: {
            action: function () {

            },
            cursor: 'pointer'

        },
        br: {
            action: function () {

            },
            cursor: 'pointer'
        },
    }, function () {

        canvas.renderAll()
    })

    setTimeout(function () {
        objseleted = e.target.cacheKey
        console.log(objseleted)
    }, 120)
    setTimeout(function () {
        objscalerotate = e.target.cacheKey
        console.log(objseleted)
        fabric.Canvas.prototype.customiseControls({
            tl: {
                action: function () {

                }
            },
            tr: {
                action: function (e) {


                    var ji = canvas.getActiveObject()
                    console.log(ji)
                    console.log(objseleted)
                    if (ji.cacheKey == objseleted) {
                        if (ji) {

                            canvas.remove(ji)
                        }
                    }
                    if (ji._objects) {
                        function getSelection() {

                            return canvas.getActiveObject() == null ? canvas.getActiveGroup() : canvas.getActiveObject()
                        }

                        var o = getSelection();

                        o._objects.forEach(function (object, key) {

                            canvas.remove(object);
                        });
                        canvas.discardActiveObject()

                    }



                    canvas.renderAll();

                    setTimeout(function ww() {
                        var items = canvas.getObjects()
                        var Array_sum
                        var ArrTest = new Array();　// 宣告一個新的陣列為 ArrTest

                        for (i = 0; i < items.length; i++) {
                            ArrTest[i] = parseInt(items[i]._element.alt)

                        }
                        Array_sum = SumData(ArrTest)
                        $(".count").val(Array_sum)
                    }, 500)




                },
                cursor: 'pointer'
            },
            bl: {
                action: 'rotate',
                cursor: 'pointer'

            },
            br: {
                action: "scale",
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
    }, 500)
});







canvas.on('object:selected', e => {
    fabric.Canvas.prototype.customiseControls({
        bl: {
            action: function () {

            },
            cursor: 'pointer'

        },
        br: {
            action: function () {

            },
            cursor: 'pointer'
        },
    }, function () {

        canvas.renderAll()
    })

    if (e.target) {

        console.log(e)
        e.target.bringToFront()
        setTimeout(function () {
            objseleted = e.target.cacheKey
            console.log(objseleted)
        }, 120)
        setTimeout(function () {
            objscalerotate = e.target.cacheKey
            console.log(objseleted)
            fabric.Canvas.prototype.customiseControls({
                tl: {
                    action: function () {

                    }
                },
                tr: {
                    action: function (e) {


                        var ji = canvas.getActiveObject()
                        console.log(ji)
                        console.log(objseleted)
                        if (ji.cacheKey == objseleted) {
                            if (ji) {

                                canvas.remove(ji)
                            }
                        }
                        if (ji._objects) {
                            function getSelection() {

                                return canvas.getActiveObject() == null ? canvas.getActiveGroup() : canvas.getActiveObject()
                            }

                            var o = getSelection();

                            o._objects.forEach(function (object, key) {

                                canvas.remove(object);
                            });
                            canvas.discardActiveObject()

                        }



                        canvas.renderAll();

                        setTimeout(function ww() {
                            var items = canvas.getObjects()
                            var Array_sum
                            var ArrTest = new Array();　// 宣告一個新的陣列為 ArrTest

                            for (i = 0; i < items.length; i++) {
                                ArrTest[i] = parseInt(items[i]._element.alt)

                            }
                            Array_sum = SumData(ArrTest)
                            $(".count").val(Array_sum)
                        }, 500)




                    },
                    cursor: 'pointer'
                },
                bl: {
                    action: 'rotate',
                    cursor: 'pointer'

                },
                br: {
                    action: "scale",
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
        }, 500)
    }


    // canvas.moveTo(e.target, 0);
})


canvas.on('selection:cleared', e => {
    objseleted = 0
})

if (set_pic_info.length > 1) {
    $('.info-btn-right').removeClass('display_none')
}
var picnowdisplay = 0
var picenddisplay = set_pic_info.length -1
$('.info-btn-right').click(function () {
    picnowdisplay++
    $('.info-page').css({
        background: `url(setpic/${set_pic_info[picnowdisplay]})`,
        backgroundSize: "cover"
    })
    if(picnowdisplay==picenddisplay){
        $('.info-btn-right').addClass('display_none')
    }
    if(picnowdisplay!=0){
        $('.info-btn-left').removeClass('display_none')
    }
})
$('.info-btn-left').click(function () {
    picnowdisplay--
    $('.info-page').css({
        background: `url(setpic/${set_pic_info[picnowdisplay]})`,
        backgroundSize: "cover"
    })
    if(picnowdisplay==0){
        $('.info-btn-left').addClass('display_none')
    }
    if(picnowdisplay!=picenddisplay){
        $('.info-btn-right').removeClass('display_none')
    }

})

$('.question').click(function () {
    picnowdisplay = 0
    $('.mask').removeClass("display_none")


})
$('.btn_close_inset').click(function () {
    $('.mask').addClass("display_none")

})