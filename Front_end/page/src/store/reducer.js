import {combineReducers} from 'redux';
import {CHANGE_INPUT_VALUE,
    CHANGE_INPUT_VALUEE,
    CHANGE_INPUT_VALUEEE,
    CHANGE_INPUT_VALUEEEE} from '../actions/actionTypes';
import {LOGIN_INPUT,
    CHANGE_LOGINNAME_INPUT_VALUE,
    CHANGE_LOGINPASSWORD_INPUT_VALUE,
    LOGIN_FLAG,CHANGE_PHONE_VALUE,
    CHANGE_SEARCH,
    CHANGE_MOTTO,
    CHANGE_USERID,
    } from '../actions/actionTypes'
    
    let logininput = {"useid":"zhangsan","pwd":"123"};
    function login(state=logininput,action){
        switch (action.type) {
            case LOGIN_INPUT:
                state.useid = action.name;
                state.pwd = action.password;
                return state;
            default:
                return state;
        }
    }
    let loginname = 'name';
    function LoginchangeValueName(state=loginname,action){
        switch (action.type) {
            case CHANGE_LOGINNAME_INPUT_VALUE:
                return action.value;
            default:
                return state;
        }
    }
    function ChangeUserid(state=loginname,action){
        switch (action.type) {
            case CHANGE_USERID:
                return action.value;
            default:
                return state;
        }
    }
    let loginpassword = 'password';
    function LoginchangeValuePassword(state=loginpassword,action){
        switch (action.type) {
            case CHANGE_LOGINPASSWORD_INPUT_VALUE:
                return action.value;
            default:
                return state;
        }
    }
    let inputValue = '';
    let inputValuee = '';
    let inputValueee = '';
    let inputValueeee = '';
    function changeValue(state=inputValue,action){
        switch(action.type){
            case CHANGE_INPUT_VALUE :
                return action.value;
            default :
                return state;
        }
    }
    function changeValuee(state=inputValuee,action){
        switch(action.type){
            case CHANGE_INPUT_VALUEE :
                return action.value;
            default :
                return state;
        }
    }
    function changeValueee(state=inputValueee,action){
        switch(action.type){
            case CHANGE_INPUT_VALUEEE :
                return action.value;
            default :
                return state;
        }
    }
    function changeValueeee(state=inputValueeee,action){
        switch(action.type){
            case CHANGE_INPUT_VALUEEEE :
                return action.value;
            default :
                return state;
        }
    }
    function Search(state=inputValue,action){
        switch(action.type){
            case CHANGE_SEARCH :
                return action.value;
            default :
                return state;
        }
    }
    function Motto(state=inputValue,action){
        switch(action.type){
            case CHANGE_MOTTO :
                return action.value;
            default :
                return state;
        }
    }
// 登录状态 已登录：true 未登录：false
    var loginflag = false;
    function loginstateflag(state=loginflag,action){
        switch (action.type) {
            case LOGIN_FLAG:
                return action.value;
            default:
                return state;
        }
    }
let reducer = combineReducers({
    changeValue,login,changeValuee,changeValueee,changeValueeee,
    LoginchangeValueName,
    LoginchangeValuePassword,
    loginstateflag,
    Search,
    Motto,
    ChangeUserid,
})
export default reducer;