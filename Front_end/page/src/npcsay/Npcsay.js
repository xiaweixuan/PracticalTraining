import React,{ useState,useEffect } from 'react';
import './Npcsay.css';

export default function Npcsay() {
    let [isok,setIsok] = useState(false);
    let [data,setData] = useState('hello！欢迎来到童话世界~');
    let [time,settime] = useState();

    useEffect(()=>{
        var npcsay_root = document.getElementById('npcsay_root');
        var mytime = setTimeout(()=>{
            if(isok){
                npcsay_root.style.display = 'block';
                fetch('http://xiawx.top:8080/npcsay',{method:'GET'})
                .then((res) => {return res.json();})
                .then((res)=>{
                    console.log(res);
                    setData(res.content);
                });
                setIsok(false);
            }else{
                npcsay_root.style.display = 'none';
                setIsok(true);
            }
        },5000);//调节每次出现的间隔时间
        // settime(mytime);
    },[isok]);

    function closesay(){
        var npcsay_root = document.getElementById('npcsay_root');
        npcsay_root.style.display = 'none';
        // clearTimeout(time);
    }

    return (
        <div className="npcsay">
            <div id="npcsay_root" style={{display:'block'}}>
                <button onClick={closesay} className="npcsay_close">×</button>
                <div id="npcsay_div1" style={{background:'url(img/4.png)',backgroundRepeat:'no-repeat',backgroundSize: '100% 100%'}}>
                    <p>
                        {data}
                    </p>
                </div>
                <div id="npcsay_div2" style={{background:'url(img/5.png)',backgroundRepeat:'no-repeat',backgroundSize: '100% 100%'}}></div>
                <div id="npcsay_div3" style={{background:'url(img/6.png)',backgroundRepeat:'no-repeat',backgroundSize: '100% 100%'}}></div>
            </div>
        </div>
    )
}