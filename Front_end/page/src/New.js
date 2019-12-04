import React, { Component ,useState,useEffect} from 'react'
 
 
export default function New(){
    
    fetch('http://xiawx.top:8080/register', {
        method: 'POST',
        body:JSON.stringify({}),
         
    })
        .then(response => {
            if (response.ok){//判断请求是否成功
                return response.json()
            }
            throw new Error('请求发生错误')
        })
        .then(data=>{
            console.log(data)
        })
        .catch(error => {
            console.log(error)
        })
    
    return (
        <div>
            
        </div>
    )
}