/**
 * 
 * 一个Picture实例对应着一个canvas对象
 * 
 * 必须条件：
 * 1、实例化输入option{col:col,row:row,width:width,height:height,context:context}
 * 2、如需拖动，画布必有属性position: absolute;
 * 3、如需画图，必须有的初始化：initcanvas initdata
 * 
 * 
 * 
 * 
 * 
*/



// 三种方法 操作动画即对象 操作图片 操作数据

/*新增功能
    *吸取颜色
    *撤销
    *回放
    *生成灰色
    *提示给定颜色有哪些
*/


function Picture(option) {
    //记录canvas属性
    this.col = option.col || 0;//多少列
    this.row = option.row || 0;//多少排
    this.width = option.width || 0;
    this.height = option.height || 0;
    this.context = option.context || {};
    this.cellW = option.width / option.col || 0;
    this.cellH = option.height / option.row || 0;
    //图像此刻属性,!!即唯一可以直接操作的属性
    this.drawDataMatrix = [];
    this.strData = "";
    this.color = '#ffffff';
    this.colorList = ["#ffffff"];
    this.numberDataMatrix = [];
    this.history = [];

    //图像长时存储属性
    this.col_abiding = 0;//必备
    this.row_abiding = 0;//必备
    this.drawDataMatrix_abiding = [];
    this.colorList_abiding = [];
    this.numberDataMatrix_abiding = [];
    this.history_abiding = [];
    this.strHistory_abiding = ""//必备
    this.strData_abiding = "";//必备

    // //属性状态
    // this.drawEventTimer = {}//定时器of画图事件
    // this.ismove = false;//判断滑动事件是要移动
    // this.afterMoveX = 0;//移动时距离屏幕的位置
    // this.afterMoveY = 0;//移动时距离屏幕的位置


    //拖放、缩放的属性设置
    this.top = this.context.canvas.offsetTop;
    this.left = this.context.canvas.offsetLeft;
    this.originTop = this.context.canvas.offsetTop;
    this.originLeft = this.context.canvas.offsetLeft;
    this.scale = 1;
    this.lastSapce = 0;
    this.touchState = 0;
    this.lastPoint = null;
    this.originW = this.context.canvas.width;
    this.originH = this.context.canvas.height;
    this.maxScale = 5;
    this.minScale = 0.5;
    this.drawTime = true;



}
//初始化方法
Picture.prototype.initcanvas = function (option) {
    this.col = option.col || this.col;//多少列
    this.row = option.row || this.row;//多少排
    this.width = option.width || this.width;
    this.height = option.height || this.height;
    this.context = option.context || this.context;
    this.cellW = option.width / option.col || this.cellW;
    this.cellH = option.height / option.row || this.cellH;

}
Picture.prototype.inittable = function (context) {
    //绘制表格
    // console.log(this.col,this.row)
    for (var i = 0; i <= this.col; i++) {
        context.beginPath();
        context.moveTo(this.cellW * i, 0);
        context.lineTo(this.cellW * i, this.height);
        context.strokeStyle = 'grey';
        context.stroke();
        context.closePath();
    }
    for (var i = 0; i <= this.row; i++) {
        context.beginPath();
        context.moveTo(0, this.cellH * i);
        context.lineTo(this.width, this.cellH * i);
        context.strokeStyle = 'grey';
        context.stroke();
        context.closePath();
    }
}
Picture.prototype.initdata = function () {
    //初始化对象数据全部为白色
    this.drawDataMatrix = [];
    for (var i = 0; i < this.col * this.row; i++) {
        this.drawDataMatrix.push("#ffffff");
    }
    this.addToHistory()
}
Picture.prototype.initbackground = function (context) {
    //将背景绘制为白色
    for (let i = 0; i < this.row; i++) {
        for (let j = 0; j < this.col; j++) {
            context.beginPath();
            // context.fillStyle = "#ffffff";
            // context.fillRect(j * this.cellW, i * this.cellH, this.cellW, this.cellH)
            context.clearRect(j * this.cellW, i * this.cellH, this.cellW, this.cellH)
            context.closePath();
        }
    }
}
Picture.prototype.init = function (option) {
    //option={context,col,row}
    this.initcanvas(option);
    this.initdata();
    this.initbackground(option.context);
    this.inittable(option.context);
}
Picture.prototype.initAbiding = function (abidingObj) {
    //初始化一个对象，是他永久存储为一幅画
    this.drawDataMatrix_abiding = abidingObj.drawDataMatrix_abiding || [];
    this.colorList_abiding = abidingObj.colorList_abiding || [];
    this.numberDataMatrix_abiding = abidingObj.numberDataMatrix_abiding || [];
    this.history_abiding = abidingObj.history_abiding || [];
    this.strData_abiding = abidingObj.strData_abiding || "";

}
Picture.prototype.inittableOl = function (context) {
    // console.log(1)
    // console.log(this.col,this.cellW,this.row,this.cellH)
    // context.strokeRect(this.col*this.cellW,this.row*this.cellH,this.cellW,this.cellH);
    var n = 0;
    for (let i = 0; i < this.col; i++) {
        for (let j = 0; j < this.row; j++) {
            n = i * this.row + j;
            // console.log(this.drawDataMatrix[n])
            if (this.drawDataMatrix_abiding[n] == '#ffffff') continue
            context.beginPath();
            context.strokeStyle = 'grey';
            context.strokeRect(j * this.cellW, i * this.cellH, this.cellW, this.cellH);
            context.closePath();
        }
    }
}


//绘图操作方法
Picture.prototype.drawCell = function (ex, ey, context) {
    //对指定点进行格子归属并进行上色
    var row = Math.floor((ex) / this.cellW);//列
    var col = Math.floor((ey) / this.cellH);//排
    var n = col * this.row + row;
    if (this.drawDataMatrix_abiding[n] === '#ffffff') return;
    if (this.color === '#ffffff') {
        this.drawDataMatrix[n] = this.color;
        context.fillStyle = this.color;
        context.fillRect(row * this.cellW, col * this.cellH, this.cellW, this.cellH);
        //已知n，求出j和i
        var i = Math.floor(n / this.col);
        var j = n - i * this.col;
        console.log(i, j, this.numberDataMatrix_abiding[n])
        context.fillStyle = "rgb(119, 110, 110)";
        context.fillText(this.numberDataMatrix_abiding[n], j * this.cellW + 1 / 4 * this.cellW, i * this.cellH + 3 / 4 * this.cellH);
        this.addToHistory();
        return;
    }
    this.drawDataMatrix[n] = this.color;
    context.fillStyle = this.color;
    context.fillRect(row * this.cellW, col * this.cellH, this.cellW, this.cellH);
    this.addToHistory();
}
Picture.prototype.allowDraw = function (context) {
    el = context.canvas;
    console.log(el);
    el.style.position = 'absolute';
    // el.addEventListener("touchstart", this.drageAnimate)
    el.addEventListener("touchmove", this.drageAnimate)
    el.addEventListener("touchmove", this.zoomAnimate)
    el.addEventListener("touchstart", this.zoomAnimate)
    el.addEventListener("touchend", this.overAnimate)
    el.addEventListener("touchstart", this.drawEvent)
    // el.addEventListener("touchmove", this.moveToDraw)
    el.addEventListener("touchstart", (e) => {
        if (e.touches.length !== 1) return;
        this.timer = setTimeout(() => {
            el.removeEventListener("touchmove", this.drageAnimate)
            el.addEventListener("touchmove", this.moveToDraw)
        }, 500)
    })
    el.addEventListener("touchmove", () => { clearTimeout(this.timer) })
    el.addEventListener("touchend", () => {
        el.addEventListener("touchmove", this.drageAnimate)
        el.removeEventListener("touchmove", this.moveToDraw)
        clearTimeout(this.timer)

    })

    el.picture = this;
}
Picture.prototype.unallowdraw = function (context) {
    context.canvas.removeEventListener("touchmove", this.drageAnimate)
    context.canvas.removeEventListener("touchmove", this.zoomAnimate)
    context.canvas.removeEventListener("touchstart", this.zoomAnimate)
    context.canvas.removeEventListener("touchend", this.overAnimate)
    context.canvas.removeEventListener("touchstart", this.drawEvent)
}
Picture.prototype.draw = function (context) {
    //根据this.drawDataMatrix进行绘制
    console.log("绘制");
    var n = 0;
    for (let i = 0; i < this.row; i++) {
        for (let j = 0; j < this.col; j++) {
            if (this.drawDataMatrix[n] == "#ffffff") {
                n++;
                continue;
            }
            context.beginPath();
            context.fillStyle = this.drawDataMatrix[n];
            context.fillRect(j * this.cellW, i * this.cellH, this.cellW, this.cellH)
            context.closePath();
            n++;
        }
    }
}
Picture.prototype.drawNumber = function (context) {
    var n = 0;
    context.font = 3 / 4 * this.cellW + 'px Arial';
    context.fillStyle = "rgb(119, 110, 110)";
    for (let i = 0; i < this.row; i++) {
        for (let j = 0; j < this.col; j++) {
            if (this.numberDataMatrix[n] == 0) {
                n++;
                continue;
            }
            context.beginPath();
            context.fillText(this.numberDataMatrix[n], j * this.cellW + 1 / 4 * this.cellW, i * this.cellH + 3 / 4 * this.cellH);
            context.closePath();
            n++;
        }
    }
}
Picture.prototype.clearCanvas = function (context) {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height)
}
Picture.prototype.drawRecall = function (context) {
    //删除尾部元素
    if (this.history.length == 1) {
        console.log("操作已经全部撤销");
        return 0;
    }
    this.history.pop();
    this.drawDataMatrix = [...this.history[this.history.length - 1]];
    console.log(this.drawDataMatrix)
    this.draw(context);
}
Picture.prototype.automaticPainting = function (context) {
    //回放
    var n = 0;
    var timer = setInterval(() => {
        // console.log("画了一次");
        if (n == this.history.length) {
            clearInterval(timer);
        }
        this.drawDataMatrix = [...this.history[n]];
        this.draw(context);
        n++;
    }, 50)
}
Picture.prototype.correctColor = function (context) {
    for (let i = 0; i < this.drawDataMatrix_abiding.length; i++) {
        if (this.drawDataMatrix[i] === this.drawDataMatrix_abiding[i]) continue
        this.drawDataMatrix[i] = "#ffffff";
    }
    this.initbackground(context)
    this.drawNumber(context)
    this.inittableOl(context);
    this.draw(context)
}




/*操作长时属性，一幅已完成的画才可使用,即需要具有长时属性*/
Picture.prototype.showNowColor = function (context, now) {
    //展示现在选中的颜色有哪些图片
    if (now === 0) return
    var n = 0;
    for (let i = 0; i < this.row; i++) {
        for (let j = 0; j < this.col; j++) {
            if (this.numberDataMatrix_abiding[n] == now && this.drawDataMatrix[n] == "#ffffff") {
                console.log(1111)
                n++;
                context.beginPath();
                context.fillStyle = '#c0c0c0';
                context.fillRect(j * this.cellW, i * this.cellH, this.cellW, this.cellH);
                context.closePath();
                context.beginPath();
                context.fillStyle = "rgb(119, 110, 110)";
                context.fillText(now, j * this.cellW + 1 / 4 * this.cellW, i * this.cellH + 3 / 4 * this.cellH);
                context.closePath();
            } else {
                n++;
            }

        }
    }
}
Picture.prototype.drawGreyShadow = function (context) {
    //用不同深度的灰色描绘出大概轮廓
    var n = this.colorList_abiding.length;
    // var n=10;
    //灰色颜色范围50~bf 共128个颜色 即最大128种颜色
    var greyColorList = [];
    var interval = Math.floor(128 / n);
    var initialColor = 80;//0x50的十进制为80

    for (let i = 0; i < n; i++) {
        greyColorList.push(initialColor.toString(16))
        initialColor += interval
    }

    for (let i = 0; i < greyColorList.length; i++) {
        var x = greyColorList[i];
        greyColorList[i] = '#' + x + x + x;
    }
    //已经完成颜色列表greyColorList，根据不同列表颜色进行上色
    // console.log(greyColorList)
    var n = 0;
    for (let i = 0; i < this.row; i++) {
        for (let j = 0; j < this.col; j++) {

            if (this.drawDataMatrix[n] !== "#ffffff") {
                n++;
                continue;
            } else {
                if (this.numberDataMatrix_abiding[n] == 0) {
                    n++;
                } else {
                    context.beginPath();
                    context.fillStyle = greyColorList[this.numberDataMatrix_abiding[n]];
                    context.fillRect(j * this.cellW, i * this.cellH, this.cellW, this.cellH)
                    context.closePath();
                    n++;
                }
            }
        }
    }
    return greyColorList;

    // a.colorList_abiding


}

//改变属性值
Picture.prototype.toColorList = function (arr) {
    //如没有指定颜色列，则按照drawDataMatrix生成
    this.colorList = arr || this.createColorList();
}
Picture.prototype.toNumberDataMatrix = function (arr) {
    //如没有指定数字列，则按照drawDataMatrix与this.colorList生成
    this.numberDataMatrix = arr || this.createNumberDataMatrix();
}
Picture.prototype.addToHistory = function (arr) {
    // console.log(this.history.length?(this.history[this.history.length-1].toString()!==this.drawDataMatrix.toString()):true)

    if (this.history.length ? (this.history[this.history.length - 1].toString() !== this.drawDataMatrix.toString()) : true) {
        var hty = arr || [...this.drawDataMatrix];
        this.history.push(hty)
    }
}



//外部数据操作（只产生数据，不对实例对象自身属性造成改变）
Picture.prototype.prase = function (str) {
    var str0 = str.split("#")
    str0.shift();
    for (let i = 0; i < str0.length; i++) {
        str0[i] = '#' + str0[i];
    }
    return str0;
}
Picture.prototype.toString = function (str0) {
    var str = '';
    if (str0) {
        for (var i = 0; i < str0.length; i++) {
            str += str0[i];
        }
    } else {
        for (var i = 0; i < this.drawDataMatrix.length; i++) {
            str += this.drawDataMatrix[i];
        }
    }

    return str
}
Picture.prototype.createColorList = function () {
    //返回颜色列表
    let isExist = false;
    let arr = [];
    for (let i = 0; i < this.drawDataMatrix.length; i++) {
        isExist = false;
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] == this.drawDataMatrix[i]) {
                isExist = true;
                break;
            }
        }
        if (!isExist) {
            // console.log("存储颜色" + this.drawDataMatrix[i]);
            arr.push(this.drawDataMatrix[i])
        }
    }
    // console.log(arr)
    return arr;
}
Picture.prototype.createNumberDataMatrix = function () {
    //返回颜色矩阵
    let arr = []
    for (let i = 0; i < this.drawDataMatrix.length; i++) {
        for (let j = 0; j < this.colorList.length; j++) {
            if (this.drawDataMatrix[i] == this.colorList[j]) {
                arr[i] = j;
                break;
            }
        }
    }
    return arr;
}
Picture.prototype.absorbColors = function (ex, ey) {
    //判断该位置在一个格内的颜色并返回
    var row = Math.floor(ex / this.cellW)
    var col = Math.floor(ey / this.cellH)
    var n = col * this.row + row;
    var color = this.drawDataMatrix[n];
    return color;
}
Picture.prototype.convertCanvasToImage = function (context) {
    var image = new Image();
    image.src = context.canvas.toDataURL("image/png");
    return image;
    // return context.canvas.toDataURL("image/png");
}






//单个事件方法
//拖拽
Picture.prototype.drageAnimate = function (e) {
    e.stopPropagation();
    e.preventDefault();
    if (e.touches.length !== 1) return;
    this.removeEventListener("touchmove", this.moveToDraw)
    var touch = e.touches[0];
    var picture = this.picture;
    if (picture.lastPoint == null) {
        picture.lastPoint = {
            x: touch.pageX,
            y: touch.pageY,
        }
    } else {
        let dx = parseInt(touch.pageX - picture.lastPoint.x);
        let dy = parseInt(touch.pageY - picture.lastPoint.y);


        picture.lastPoint.x = touch.pageX;
        picture.lastPoint.y = touch.pageY;

        picture.left += dx;
        picture.top += dy;

        let distanceX = picture.left - picture.originLeft;
        let distanceY = picture.top - picture.originTop;
        this.style.transformOrigin = 'left top';
        this.style.transform = 'matrix(' + picture.scale + ',0,0,' + picture.scale + ',' + distanceX + ',' + distanceY + ')';
        this.style.transition = ''
    }
}
//缩放
Picture.prototype.zoomAnimate = function (e) {
    // if (!picture.zoomPower) return;

    e.stopPropagation();
    e.preventDefault();
    if (e.touches.length == 1) return;
    var picture = this.picture;
    picture.lastPoint = null;
    let t1 = e.touches[0];
    let t2 = e.touches[1];

    let x1 = t1.pageX;
    let x2 = t2.pageX;
    let y1 = t1.pageY;
    let y2 = t2.pageY;

    let dx = parseInt(t1.pageX - t2.pageX);
    let dy = parseInt(t1.pageY - t2.pageY);

    let d = (Math.pow((dx * dx + dy * dy), 0.5)).toFixed(5);

    if (picture.touchState == 0) {
        picture.lastSapce = d;
        picture.touchState = 1;
        //point为两手指的中心点
        picture.pointX = (x2 + (x1 - x2) / 2 - picture.left) / picture.scale;
        picture.pointY = (y2 + (y1 - y2) / 2 - picture.top) / picture.scale;

    } else if (picture.touchState == 1) {

        let scaleChange = ((d / picture.lastSapce) - 1) * 2;
        let scale = picture.scale + scaleChange / 2;
        // picture.setScale(scale, picture.pointX, picture.pointY);
        picture.lastSapce = d;

        picture.width = scale * picture.originW;
        picture.height = scale * picture.originH;
        picture.left = picture.left - picture.pointX * (scale - picture.scale);
        picture.top = picture.top - picture.pointY * (scale - picture.scale);
        picture.lastPointX = picture.pointX;
        picture.lastPointY = picture.pointY;
        picture.scale = scale;

        let distanceX = picture.left - picture.originLeft;
        let distanceY = picture.top - picture.originTop;
        this.style.transformOrigin = 'left top';
        this.style.transform = 'matrix(' + picture.scale + ',0,0,' + picture.scale + ',' + distanceX + ',' + distanceY + ')';
        this.style.transition = ''


    }
}
//移动的结束
Picture.prototype.overAnimate = function () {
    var picture = this.picture;
    picture.touchState = 0;
    picture.lastPoint = null;
    picture.lastSapce = 0;

    // let minSpace = 20;
    let minSpace = picture.minScale;
    let parentWidth = this.parentElement.offsetWidth;
    let parentHight = this.parentElement.offsetHeight;
    let scale = picture.scale;

    if (scale < picture.minScale) {
        scale = picture.minScale;
    }
    if (scale > picture.maxScale) {
        scale = picture.maxScale;
    }
    if (scale != picture.scale) {
        //
    }
    if ((picture.left + picture.width) < minSpace) {
        picture.left = - picture.width + minSpace;
    }
    if (picture.left >= (parentWidth - minSpace)) {
        picture.left = parentWidth - minSpace;
    }

    if ((picture.top + picture.height) < minSpace) {
        picture.top = - picture.height + minSpace;
    }
    if (picture.top >= (parentHight - minSpace)) {
        picture.top = parentHight - minSpace;
    }
}
//点击画
Picture.prototype.drawEvent = function (e) {
    // if (!picture.drawPower) return;
    var picture = this.picture;
    console.log("touchmove--画图");
    e.offsetX = e.touches[0].pageX - picture.left;
    e.offsetY = e.touches[0].pageY - picture.top;
    picture.drawCell(e.offsetX / picture.scale, e.offsetY / picture.scale, picture.context)

}
//移动着画
Picture.prototype.moveToDraw = function (e) {
    // if (!picture.drawmovePower) return;
    var picture = this.picture;
    console.log("touchmove--画图");
    e.offsetX = e.touches[0].pageX - picture.left;
    e.offsetY = e.touches[0].pageY - picture.top;
    picture.drawCell(e.offsetX / picture.scale, e.offsetY / picture.scale, picture.context)

}

//两个移动事件
Picture.prototype.elAnimate = function (e) {
    e.stopPropagation();
    e.preventDefault();
    if (e.touches.length == 1) {
        //拖动
        var touch = e.touches[0];
        var picture = this.picture;
        if (picture.lastPoint == null) {
            picture.lastPoint = {
                x: touch.pageX,
                y: touch.pageY,
            }
        } else {
            let dx = parseInt(touch.pageX - picture.lastPoint.x);
            let dy = parseInt(touch.pageY - picture.lastPoint.y);


            picture.lastPoint.x = touch.pageX;
            picture.lastPoint.y = touch.pageY;

            picture.left += dx;
            picture.top += dy;

            let distanceX = picture.left - picture.originLeft;
            let distanceY = picture.top - picture.originTop;
            this.style.transformOrigin = 'left top';
            this.style.transform = 'matrix(' + picture.scale + ',0,0,' + picture.scale + ',' + distanceX + ',' + distanceY + ')';
            this.style.transition = ''
        }
    } else {
        // 缩放
        var picture = this.picture;
        picture.lastPoint = null;
        let t1 = e.touches[0];
        let t2 = e.touches[1];

        let x1 = t1.pageX;
        let x2 = t2.pageX;
        let y1 = t1.pageY;
        let y2 = t2.pageY;

        let dx = parseInt(t1.pageX - t2.pageX);
        let dy = parseInt(t1.pageY - t2.pageY);

        let d = (Math.pow((dx * dx + dy * dy), 0.5)).toFixed(5);

        if (picture.touchState == 0) {
            picture.lastSapce = d;
            picture.touchState = 1;
            //point为两手指的中心点
            picture.pointX = (x2 + (x1 - x2) / 2 - picture.left) / picture.scale;
            picture.pointY = (y2 + (y1 - y2) / 2 - picture.top) / picture.scale;

        } else if (picture.touchState == 1) {

            let scaleChange = ((d / picture.lastSapce) - 1) * 2;
            let scale = picture.scale + scaleChange / 2;
            // picture.setScale(scale, picture.pointX, picture.pointY);
            picture.lastSapce = d;

            picture.width = scale * picture.originW;
            picture.height = scale * picture.originH;
            picture.left = picture.left - picture.pointX * (scale - picture.scale);
            picture.top = picture.top - picture.pointY * (scale - picture.scale);
            picture.lastPointX = picture.pointX;
            picture.lastPointY = picture.pointY;
            picture.scale = scale;

            let distanceX = picture.left - picture.originLeft;
            let distanceY = picture.top - picture.originTop;
            this.style.transformOrigin = 'left top';
            this.style.transform = 'matrix(' + picture.scale + ',0,0,' + picture.scale + ',' + distanceX + ',' + distanceY + ')';
            this.style.transition = ''


        }

    }
}