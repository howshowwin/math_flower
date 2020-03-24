var PickColor
var oncolorpickmode = 0
$('.color').click(function () {
    canvas.discardActiveObject();
    canvas.requestRenderAll();
    oncolorpickmode = 1
    PickColor = $(this).data("color")
    console.log(PickColor)
    $('*').addClass("cursor2")
    canvas.selection = false;

})
$('.cursor').click(function () {
    oncolorpickmode = 0
    $('*').removeClass("cursor2")
    canvas.selection = true;

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

canvas.on('object:selected', e => {
    if (e.target) {
        e.target.bringToFront()

    }
    // canvas.moveTo(e.target, 0);
})


$('.garbage').click(function () {
    canvas.clear()
    $('.count').val('')
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
    if (obj.getBoundingRect().top + obj.getBoundingRect().height > obj.canvas.height || obj.getBoundingRect().left + obj.getBoundingRect().width > obj.canvas.width) {
        obj.top = Math.min(obj.top, obj.canvas.height - (20 * sRout) - obj.getBoundingRect().height + obj.top - obj.getBoundingRect().top);
        obj.left = Math.min(obj.left, obj.canvas.width - (20 * sRout) - obj.getBoundingRect().width + obj.left - obj.getBoundingRect().left);
    }


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