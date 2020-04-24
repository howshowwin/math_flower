var PickColor
var changeCur
var oncolorpickmode = 0
$('.color').click(function () {
    canvas.discardActiveObject();
    canvas.requestRenderAll();
    oncolorpickmode = 1
    $('*').removeClass(`cursor${changeCur}`)

    PickColor = $(this).data("color")
    changeCur = PickColor.replace('.svg', '')
    changeCur = changeCur.replace('f', '')
    console.log(changeCur)
    $('.cursor').css({
        background: "url(img/btVOn.svg)",
        backgroundSize: "cover"
    })
    $('*').addClass(`cursor${changeCur}`)
    canvas.selection = false;
    fabric.Object.prototype.setControlsVisibility({
        bl: false, // 左下
        br: false, // 右下
        mb: false, // 下中
        ml: false, // 中左
        mr: false, // 中右
        mt: false, // 上中
        tl: false, // 上左
        tr: false, // 上右
        mtr: false // 旋轉控制鍵
    })

})
$('.cursor').click(function () {
    oncolorpickmode = 0
    $('*').removeClass(`cursor${changeCur}`)
    canvas.selection = true;
    $('.cursor').css({
        background: "url(img/btV.svg)",
        backgroundSize: "cover"
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
})
canvas.on('mouse:down', e => {
    // console.log(e)

    const active = e.target

    console.log(e)
    if (oncolorpickmode == 1 && active) {
        canvas.discardActiveObject(active);

        const imgQ = document.createElement('img')
        imgQ.src = `img/${PickColor}`
        imgQ.alt = '1'
        imgQ.onload = (e) => {
            const image = new fabric.Image(imgQ, {
                width: active.naturalWidth,
                height: active.naturalHeight,
                scaleX: active.scaleX,
                scaleY: active.scaleY,
                angle: active.angle,
                top: active.top,
                left: active.left
            })
            console.log(image)

            image.alt = 1
            image.set({
                borderColor: '#01B0F1'
            })


            canvas.remove(active)

            canvas.discardActiveObject().renderAll()
            // canvas.add(image)
            canvas.add(image)

            canvas.renderAll();

            // canvas.discardActiveObject(image);
            image._element.alt = '1'

        }

    }


})


$('.garbage').click(function () {
    canvas.clear()
    $('.count').val('')
    redlittlemove = 0
    bluelittlemove = 0
    yellowlittlemove = 0
    greenlittlemove = 0
    redcount = -1
    bluecount = 0
    yellowcount = 1
    greencount = 2
    clickappend = 0
    clickrow = 0
})
$('.close').click(function () {

    window.location.href = 'about:blank ';
    window.opener = null;
    window.open('', '_self');
    window.close();

})


canvas.on('object:moving', function (e) {
    var obj = e.target;
    console.log(e)
    // if object is too big ignore
    if (obj.currentHeight > obj.canvas.height || obj.currentWidth > obj.canvas.width) {
        return;
    }
    obj.setCoords();

    // top-left  corner
    if (obj.getBoundingRect().top || obj.getBoundingRect().left) {
        obj.top = Math.max(obj.top, obj.top + (20 * sRout) - obj.getBoundingRect().top);
        obj.left = Math.max(obj.left, obj.left + (20 * sRout) - obj.getBoundingRect().left);
    }
    // bot-right corner
    if (obj.getBoundingRect().left + obj.getBoundingRect().width > obj.canvas.width) {
        obj.top = Math.min(obj.top, obj.canvas.height - (20 * sRout) - obj.getBoundingRect().height + obj.top - obj.getBoundingRect().top);
        obj.left = Math.min(obj.left, obj.canvas.width - (20 * sRout) - obj.getBoundingRect().width + obj.left - obj.getBoundingRect().left);
    }

    obj.setCoords();

});

var left1 = 0;
var top1 = 0;
var scale1x = 0;
var scale1y = 0;
var width1 = 0;
var height1 = 0;
var angle = 0
canvas.on('object:scaling', function (e) {

    var obj = e.target;
    // obj.set('strokeWidth', 50)

    obj.setCoords();
    var brNew = obj.getBoundingRect();
    // console.log(e.target.cacheKey)
    // console.log(objseleted)

    if (((brNew.width + brNew.left) >= obj.canvas.width - (20 * sRout)) || ((brNew.height + brNew.top) >= obj.canvas.height - (20 * sRout)) || ((brNew.left < (20 * sRout)) || (brNew.top < (20 * sRout)))) {
        obj.left = left1;
        obj.top = top1;
        obj.scaleX = scale1x;
        obj.scaleY = scale1y;
        obj.width = width1;
        obj.height = height1;
    }
    else {
        left1 = obj.left;
        top1 = obj.top;
        scale1x = obj.scaleX;
        scale1y = obj.scaleY;
        width1 = obj.width;
        height1 = obj.height;
    }
});
canvas.on('object:rotating', function (e) {
    var obj = e.target;
    obj.setCoords();
    var brNew = obj.getBoundingRect();

    if (((brNew.width + brNew.left) >= obj.canvas.width - (20 * sRout)) || ((brNew.height + brNew.top) >= obj.canvas.height - (20 * sRout)) || ((brNew.left < (20 * sRout)) || (brNew.top < (20 * sRout)))) {
        obj.left = left1;
        obj.top = top1;
        obj.scaleX = scale1x;
        obj.scaleY = scale1y;
        obj.width = width1;
        obj.height = height1;
        obj.angle = angle1;
    }
    else {
        left1 = obj.left;
        top1 = obj.top;
        scale1x = obj.scaleX;
        scale1y = obj.scaleY;
        width1 = obj.width;
        height1 = obj.height;
        angle1 = obj.angle;

    }
});


canvas.on('object:moved', function (e) {
    var obj = e.target;

    if (obj.getBoundingRect().top + obj.getBoundingRect().height > $('.canvas-container').height() + $('.canvas-container').offset().top + 30 * sRout ) {

        var obj = e.target;
        var obkkk = obj._objects ? obj._objects : e.target
        obj.setCoords();


        if (obkkk == e.target) {
            canvas.remove(obkkk)
        }

        if (obkkk == obj._objects) {
            obkkk.forEach(function (object, key) {
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
            countRemove()

        }, 500)
    }
})