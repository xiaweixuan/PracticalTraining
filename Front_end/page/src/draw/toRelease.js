import React, { useEffect ,useState} from 'react'
import Palette from './palette'

export default function ToRelease() {
    var [obj, setObj] = useState(pic)
    var pic = new window.Picture();
    useEffect(() => {
        var canvas = document.getElementById("canvas");
        var context = canvas.getContext("2d");
        // setContext(ct)
        pic.context=context;
        pic.initdata();
        pic.initWH(canvas.width, canvas.height);
        pic.initdata();
        pic.inittable(context);
        pic.todraw(context)
        console.log(pic)
        setObj(pic);
    }, [])
    function changeColorFree(color) {
        console.log("自由改颜色");
        obj.color = color;
    }
    return (
        <div className="drawing">
            <div className="" style={{ width: "95%", margin: "auto" }}>
                <div className="drawing_canvas_div">
                    <canvas id="canvas" width="300px" height="300px">您的浏览器版本过低</canvas>
                </div>
                <div className="drawing_body">
                    <div className="drawing_title">
                        <p className="drawing_word">自由选色</p>
                    </div>
                    <div className="drawing_main">
                        <div className="drawing_color">
                            <Palette change={changeColorFree} />
                        </div>
                    </div>
                </div>


            </div>
            <div className="drawing_show" id="show" style={{ float: 'left', marginTop: "10vw" }}>
                <p className="drawing_word">生成图片保存</p>
            </div>
        </div>
    )
}
