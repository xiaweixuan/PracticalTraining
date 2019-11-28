/**
         * 
         * 注意点
         * 1、canvas要被一个单独的div嵌套，canvas作为唯一元素，且宽高相等
         * 2、为图画设置颜色时格式必须为‘#ffffff’的格式
         * 
         * 准备
         * var a = new Picture(arr);
         * a.init(context);
         * 
         * 初始化一个白色图片
         * a.initdata()
         * 
         * 初始化栅格
         * a.inittable()
         * 
         * 展示图画
         * a.draw(context); //context为canvas的2d环境
         * 
         * 去画
         * a.todraw(context);
         * 
         * 停止绘画
         * a.enddraw(context);
         * 
         * 撤回上一步
         * a.drawRecall(context) 
         * 
         * 将图片转化为字符串用于存储于数据库
         * a.toString()
         * 
         * 图片用的颜色存于数组（白色永远为首位）
         * a.produceColorList
         * 
         * 生成颜色矩阵（矩阵中为数字，数字与a.produceColorList中颜色的下标相对应）
         * a.createNumberData
         * 
         * 绘制数字（白色即0除外）
         * a.drawNumber
         * 
         * 按照绘图路径自动绘制自动绘制
         * a.automaticPainting
         */


        function Picture(drawDataMatrix) {
            this.drawDataMatrix = drawDataMatrix || [];//画的存储矩阵
            this.history = [];
            this.color = '#ffffff';
            this.numberDataMatrix = [];
            this.colorList = ["#ffffff"];
        }
        Picture.prototype.initdata = function () {
            for (var i = 0; i < 400; i++) {
                // arr.push('#' + Math.random().toString(16).slice(-6));
                this.drawDataMatrix.push("#ffffff");
            }
            this.history.push([...this.drawDataMatrix]);
        }
        Picture.prototype.inittable = function (context) {
            //绘制网格
            for (var i = 0; i <= context.canvas.width / 20; i++) {
                context.beginPath();
                context.moveTo(20 * i, 0);
                context.lineTo(20 * i, context.canvas.height);
                context.strokeStyle = 'red';
                context.stroke();
                context.closePath();
            }
            for (var i = 0; i <= context.canvas.width / 20; i++) {
                context.beginPath();
                context.moveTo(0, 20 * i);
                context.lineTo(context.canvas.width, 20 * i);
                context.strokeStyle = 'red';
                context.stroke();
                context.closePath();
            }
        }
        Picture.prototype.draw = function (context) {
            var n = 0;
            // console.log(this.drawDataMatrix);
            // console.log(context);
            for (let i = 0; i < 20; i++) {
                for (let j = 0; j < 20; j++) {
                    context.beginPath();
                    // console.log(n)
                    // console.log(this.drawDataMatrix);
                    context.fillStyle = this.drawDataMatrix[n];
                    context.fillRect(j * 20, i * 20, 20, 20)
                    context.closePath();
                    n++;
                }
            }



        }
        Picture.prototype.todraw = function (context) {
            context.canvas.addEventListener("click", this.event = (e) => {
                
                console.log("click");
                var row = Math.floor((e.offsetX) / 20);//列
                var col = Math.floor((e.offsetY) / 20);//排
                var n = col * 20 + row;
                this.drawDataMatrix[n] = this.color;
                context.fillStyle = this.color;
                context.fillRect(row * 20, col * 20, 20, 20);


            }, false)
            context.canvas.addEventListener("mousedown", this.mousedownEvent=(e) => {
                context.canvas.removeEventListener("click", this.event, false);
                console.log("mousedown");
                var row = Math.floor((e.offsetX) / 20);//列
                var col = Math.floor((e.offsetY) / 20);//排
                var n = col * 20 + row;
                this.drawDataMatrix[n] = this.color;
                context.fillStyle = this.color;
                context.fillRect(row * 20, col * 20, 20, 20);
                this.timer = setTimeout(() => {
                    console.log("1s到");
                    context.canvas.addEventListener("mousemove", this.mousemoveEvent = (e) => {
                        console.log("mousemove");
                        var row = Math.floor((e.offsetX) / 20);//列
                        var col = Math.floor((e.offsetY) / 20);//排
                        var n = col * 20 + row;
                        this.drawDataMatrix[n] = this.color;
                        context.fillStyle = this.color;
                        context.fillRect(row * 20, col * 20, 20, 20)
                    })

                }, 1000)
            })
            context.canvas.addEventListener("mouseup", (e) => {
                console.log("mouseup");
                clearTimeout(this.timer);
                context.canvas.removeEventListener("mousemove", this.mousemoveEvent, false);


                var arr=[...this.drawDataMatrix];
                this.history.push([...this.drawDataMatrix]);
                // console.log(this.drawDataMatrix);
                console.log(this.history)
            })
            context.canvas.addEventListener("touchstart", this.touchstartEvent=(e) => {
                this.timer = setTimeout(() => {
                    context.canvas.addEventListener("touchmove", this.touchmoveEvent = (e) => {
                        console.log("touchmove");
                        e.offsetX = e.touches[0].clientX - e.srcElement.offsetLeft;
                        e.offsetY = e.touches[0].clientY - e.srcElement.offsetTop;
                        var row = Math.floor((e.offsetX) / 20);//列
                        var col = Math.floor((e.offsetY) / 20);//排
                        var n = col * 20 + row;
                        this.drawDataMatrix[n] = this.color;
                        context.fillStyle = this.color;
                        context.fillRect(row * 20, col * 20, 20, 20)
                    })

                }, 1000)
            })
            context.canvas.addEventListener("touchend", () => {
                clearTimeout(this.timer);
                context.canvas.removeEventListener("touchmove", this.touchmoveEvent, false)
                // console.log(this.history);
                // var arr=[...this.drawDataMatrix];
                // this.history.push([...this.drawDataMatrix]);
                // console.log(this.history);
            })

        }
        Picture.prototype.enddraw = function (context) {
            context.canvas.removeEventListener("click", this.event, false)
        }
        Picture.prototype.drawRecall = function (context) {
            //删除尾部元素
            if(this.history.length==1){
                console.log("操作已经全部撤销");
                return 0;
            }
            this.history.pop();
            this.drawDataMatrix = [...this.history[this.history.length - 1]] ;
            this.draw(context);
            this.inittable(context);
            // console.log([...this.history[this.history.length - 1]]);
        }
        Picture.prototype.toString = function () {
            var str = '';
            for (var i = 0; i < this.drawDataMatrix.length; i++) {
                str += this.drawDataMatrix[i];
            }
            return str
        }
        //先具有颜色列表，在根据颜色列表对应数字填满数字矩阵，在根据数字矩阵绘出数字
        Picture.prototype.produceColorList = function () {
            let isExist = false;
            for (let i = 0; i < this.drawDataMatrix.length; i++) {
                isExist = false;
                for (let j = 0; j < this.colorList.length; j++) {
                    if (this.colorList[j] == this.drawDataMatrix[i]) {
                        isExist = true;
                        break;
                    }
                }
                if (!isExist) {
                    console.log("存储颜色" + this.drawDataMatrix[i]);
                    this.colorList.push(this.drawDataMatrix[i])
                }
            }
            return this.colorList;
        }
        Picture.prototype.createNumberData = function () {
            for (let i = 0; i < this.drawDataMatrix.length; i++) {
                for (let j = 0; j < this.colorList.length; j++) {
                    if (this.drawDataMatrix[i] == this.colorList[j]) {
                        this.numberDataMatrix[i] = j;
                        break;
                    }
                }
            }
            return this.numberDataMatrix;
        }
        Picture.prototype.drawNumber = function (context) {
            var n = 0;
            context.font = '14px Arial';
            context.fillStyle = "rgb(119, 110, 110)";
            for (let i = 0; i < 20; i++) {
                for (let j = 0; j < 20; j++) {
                    if(this.numberDataMatrix[n]==0){
                        n++;
                        continue;
                    }
                    context.beginPath();
                    context.fillText(this.numberDataMatrix[n], j * 20+5, i * 20+15);
                    context.closePath();
                    n++;
                }
            }
        }
        Picture.prototype.automaticPainting=function(context){
            var n=0;
            var timer=setInterval(()=>{
                // console.log("画了一次");
                if(n==this.history.length){
                    clearInterval(timer);
                }
                this.drawDataMatrix=[...this.history[n]];
                this.draw(context);
                n++;
            },400)
        }

