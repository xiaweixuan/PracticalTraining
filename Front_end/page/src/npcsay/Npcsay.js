import React,{ useState,useEffect } from 'react';
import './Npcsay.css';

export default function Npcsay() {
    let [isok,setIsok] = useState(false);
    let [data,setData] = useState('hello！欢迎来到童话世界~');
    // let [time,settime] = useState();

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
        },10000);//调节每次出现的间隔时间
        // settime(mytime);
    },[isok]);

    function closesay(){
        var npcsay_root = document.getElementById('npcsay_root');
        npcsay_root.style.display = 'none';
        // clearTimeout(time);
    }

    return (
        <div id="npcsay_root" style={{display:'block'}}>
            <button onClick={closesay}>×</button>
            <div id="npcsay_div1">
                <p>
                    {data}
                </p>
            </div>
            <div id="npcsay_div2"></div>
            <div id="npcsay_div3"></div>
        </div>
    )
}