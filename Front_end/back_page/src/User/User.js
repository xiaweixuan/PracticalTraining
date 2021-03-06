import React ,{useState,useEffect} from 'react';
import './User.css';


export default function User (){
    let [data,setData] = useState([]);
    let [chage,setChage] = useState(true);//chage改变，useEffect重新渲染
    useEffect(() => {
        fetch('http://xiawx.top:8080/showuser',{method:'GET'})
        .then((res) => {return res.json();})
        .then((res)=>{
            // console.log(res);
            setData(res);
            setChage(true);
        });
    },[chage]);
    function addhover(){
        var user_hover = document.getElementsByClassName('user_hover');
        // console.log(user_hover[0].style.display);
        user_hover[0].style.display = 'block';
    }
    function addUser(){
        var user_adduser = document.getElementsByClassName('user_adduser');
        var user_addhover = document.getElementsByClassName('user_addhover');
        // console.log(user_adduser);
        // console.log(user_adduser[0]);
        // console.log(user_adduser[0].value);

        fetch('http://xiawx.top:8080/adduser',{
            method:'POST',
            body:JSON.stringify({
                userid:user_adduser[0].value,
                pwd:user_adduser[1].value,
                email:user_adduser[2].value,
                avatarurl:user_adduser[3].value,
                motto:user_adduser[4].value
            })
        })
        .then((res) => {return res.json();})
        .then((res)=>{
            console.log(res);
            var user_addhover_p = document.getElementById('user_addhover_p');
            user_addhover_p.innerHTML = res.message;
        })
        user_addhover[0].style.display = 'block';
        setChage(false);
    }
    function unaddUser(){
        var user_hover = document.getElementsByClassName('user_hover');
        user_hover[0].style.display = 'none';
    }
    function addUserok(){
        var user_hover = document.getElementsByClassName('user_hover');
        user_hover[0].style.display = 'none';
        var user_addhover = document.getElementsByClassName('user_addhover');
        user_addhover[0].style.display = 'none';
    }
    function deleteUser(id){
        fetch('http://xiawx.top:8080/deleteuser?userid='+id,{method:'GET'})
        .then((res) => {return res.json();})
        .then((res)=>{
            console.log(res);
        })
        setChage(false);
    }
    function updateUser(idx,user){
        var user_updateuser = document.getElementsByClassName('user_updateuser');
        var user_updatehover = document.getElementsByClassName('user_updatehover');

        user_updateuser[0].value = user.userid;
        user_updateuser[1].value = user.pwd;
        user_updateuser[2].value = user.email;
        user_updateuser[3].value = user.avatarurl;
        user_updateuser[4].value = user.motto;

        // console.log(idx,user);
        // console.log(data[idx]);
        user_updatehover[0].style.display = 'block';
        setChage(false);
    }
    function updataUser(){
        var user_updateuser = document.getElementsByClassName('user_updateuser');
        var user_updatehover = document.getElementsByClassName('user_updatehover');
        
        fetch('http://xiawx.top:8080/updateuser',{
            method:'POST',
            body:JSON.stringify({
                olduserid:user_updateuser[0].value,
                userid:user_updateuser[0].value,
                pwd:user_updateuser[1].value,
                email:user_updateuser[2].value,
                avatarurl:user_updateuser[3].value,
                motto:user_updateuser[4].value
            })
        })
        .then((res) => {return res.json();})
        .then((res)=>{
            console.log(res);
        })
        user_updatehover[0].style.display = 'none';
        setChage(false);
    }
    function unupdataUser(){
        var user_updatehover = document.getElementsByClassName('user_updatehover');
        user_updatehover[0].style.display = 'none';
    }
    return (
        <div className='userMain'>
            <div className='userImg'></div>
            <div  className='user_root'>
                <div className="user_button">
                    <button onClick={addhover}>添加用户</button>
                </div>
                <div id = 'user_table' className="user_table">
                    <table>
                        <tbody>
                            <tr>
                                <th>用户名</th>
                                <th>密码</th>
                                <th>邮箱</th>
                                <th>头像</th>
                                <th>个性签名</th>
                                <th>设置</th>
                            </tr>
                        </tbody>
                    </table>
                    {
                        data.map((item,idx)=>(
                        <div className="user_div" key={idx}>
                            <p><input type="text" value={item.userid} disabled/></p>
                            <p><input type="text" value={item.pwd} disabled/></p>
                            <p><input type="text" value={item.email} disabled/></p>
                            <p><input type="text" value={item.avatarurl} disabled/></p>
                            <p><input type="text" value={item.motto} disabled/></p>
                            <p>
                                <button onClick={()=>{updateUser(idx,item)}}>修改</button>
                                <button onClick={()=>{deleteUser(item.userid)}}>删除</button>
                            </p>
                        </div>)) 
                    }
                </div>
            </div>
            <div className="user_hover" >
                <div>
                    <table>
                        <tbody>
                            <tr>
                                <th>用户名：</th>
                                <th><input type="text" className="user_adduser"/></th>
                            </tr>
                            <tr>
                                <th>密码：</th>
                                <th><input type="text" className="user_adduser"/></th>
                            </tr>
                            <tr>
                                <th>邮箱：</th>
                                <th><input type="text" className="user_adduser"/></th>
                            </tr>
                            <tr>
                                <th>头像：</th>
                                <th><input type="text" className="user_adduser"/></th>
                            </tr>
                            <tr>
                                <th>个性签名：</th>
                                <th><input type="text" className="user_adduser"/></th>
                            </tr>
                        </tbody>
                    </table>
                    <button onClick={addUser}>添加</button>    
                    <button onClick={unaddUser}>取消</button>
                </div>
            </div>
            <div className="user_addhover">
                <div>
                    <p id="user_addhover_p"></p>
                    <button onClick={addUserok}>确定</button>
                </div>
            </div>
            <div className="user_updatehover" >
                <div>
                    <table>
                        <tbody>
                            <tr>
                                <th>用户名：</th>
                                <th><input type="text" className="user_updateuser" disabled/></th>
                            </tr>
                            <tr>
                                <th>密码：</th>
                                <th><input type="text" className="user_updateuser"/></th>
                            </tr>
                            <tr>
                                <th>邮箱：</th>
                                <th><input type="text" className="user_updateuser"/></th>
                            </tr>
                            <tr>
                                <th>头像：</th>
                                <th><input type="text" className="user_updateuser"/></th>
                            </tr>
                            <tr>
                                <th>个性签名：</th>
                                <th><input type="text" className="user_updateuser"/></th>
                            </tr>
                        </tbody>
                    </table>
                    <button onClick={updataUser}>修改</button>    
                    <button onClick={unupdataUser}>取消</button>
                </div>
            </div>
        </div>
    )
    
}
