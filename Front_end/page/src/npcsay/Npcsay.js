import React,{ useState,useEffect } from 'react';
import './Npcsay.css';

export default function Npcsay() {
    let [isok,setIsok] = useState(false);
    let [data,setData] = useState();
    useEffect(()=>{
        var npcsay_root = document.getElementById('npcsay_root');
        var time = setTimeout(()=>{
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
    },[isok]);

    return (
        <div id="npcsay_root" style={{display:'none'}}>
            {data}
        </div>
    )
}
