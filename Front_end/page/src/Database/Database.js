import React, { Component ,useState,useEffect} from 'react'
import {HashRouter as Router,Link} from 'react-router-dom';
import { NavBar, Icon ,Tabs} from 'antd-mobile';
import './Database.css';
import Npc from '../npc/Npc'
import Npcsay from '../npcsay/Npcsay'
import store from '../store';
import {Search} from '../actions';
import Undertab from '../undertab/Undertab';
import DatabaseBuju from'./DatabaseBuju';
const tabs = [
    { title: '推荐'},
    { title: '植物' },
    { title: '动物' },
    { title: '其他' },
];

export default function Database(props){
    let [value,setValue]=useState(store.getState().Search);
    let [data_recommend, setData_recommend] = useState([]);
    let [data_botany, setData_botany] = useState([]);
    let [data_animal, setData_animal] = useState([]);
    let [data_other, setData_other] = useState([]);
    var data1 = 0,data2= 0,data3= 0;

    var recommend = [];
    var botany = [];
    var animal = [];
    var other = [];

    let userid = store.getState().LoginchangeValueName;
    let flag = store.getState().loginstateflag;
    // console.log(store.getState());
    useEffect(()=>{
        if(flag == false){
            fetch('http://xiawx.top:8080/offpaint')
            .then(res => res.json())
            .then(res => {
                for (var i = 0; i < res.content.length; i++) {
                    if (res.content[i].type == tabs[1].title) {
                        botany[data1] = res.content[i];
                        data1++;
                    }
                    else if (res.content[i].type == tabs[2].title) {
                        animal[data2] = res.content[i];
                        data2++;
                    }
                    else if (res.content[i].type == tabs[3].title) {
                        other[data3] = res.content[i];
                        data3++;
                    }
                }
                recommend = res.content;
                setData_recommend(recommend);
                setData_botany(botany);
                setData_animal(animal);
                setData_other(other);
            })
        }

        else{
            fetch('http://xiawx.top:8080/iscollect?userid='+userid)
            .then(res => res.json())
            .then(res => {
                for (var i = 0; i < res.content.length; i++) {
                    if (res.content[i].type == tabs[1].title) {
                        botany[data1] = res.content[i];
                        data1++;
                    }
                    else if (res.content[i].type == tabs[2].title) {
                        animal[data2] = res.content[i];
                        data2++;
                    }
                    else if (res.content[i].type == tabs[3].title) {
                        other[data3] = res.content[i];
                        data3++;
                    }
                }
                recommend = res.content;
                setData_recommend(recommend);
                setData_botany(botany);
                setData_animal(animal);
                setData_other(other);
            })
        }
    },[])

    function handleclick(tab, index){
        if(flag){
            fetch('http://xiawx.top:8080/iscollect?userid='+userid)
            .then(res => res.json())
            .then(res => {
                for (var i = 0; i < res.content.length; i++) {
                    if (res.content[i].type == tabs[1].title) {
                        botany[data1] = res.content[i];
                        data1++;
                    }
                    else if (res.content[i].type == tabs[2].title) {
                        animal[data2] = res.content[i];
                        data2++;
                    }
                    else if (res.content[i].type == tabs[3].title) {
                        other[data3] = res.content[i];
                        data3++;
                    }
                }
                recommend = res.content;
                setData_recommend(recommend);
                setData_botany(botany);
                setData_animal(animal);
                setData_other(other);
            })
        }
    }

    function handleChange(e){
        store.dispatch(Search(e.target.value));
    }
    function addItem(){
        props.history.push('/search');
    }
    
    return( 
        <div className="database">
            <div>
                <div className="database_header">
                    <div className="database_input_no1">
                        <img className="database_sousou" src="img/so.png"></img>
                        <input className="database_input_no2" 
                        onChange={handleChange}
                        type="text"
                        placeholder="搜索："
                        name="search"></input>
                        <input className="database_search"
                        type='submit'
                        value="搜索"
                        style={{border:0}}
                        onClick={addItem}></input> 
                    </div>
                </div>
            </div>
            
            <div className="database_font"></div>
            
            <div className='database_tab'>
                <Tabs tabs={tabs} initialPage={0}
                onChange={(tab, index) => {handleclick(tab, index)}}>
                    <div>
                        <DatabaseBuju data={data_recommend} type={tabs[0].title}/>
                    </div>
                    <div>
                        <DatabaseBuju data={data_botany} type={tabs[1].title}/>
                    </div>
                    <div>
                        <DatabaseBuju data={data_animal} type={tabs[2].title}/>
                    </div>
                    <div>
                        <DatabaseBuju data={data_other} type={tabs[3].title}/>
                    </div>
                </Tabs>
            </div>
            
            <div className="database_hight"></div>
            <Npcsay/>
            <Npc/>
            <Undertab flag="1"/>
        </div>
    )    
}