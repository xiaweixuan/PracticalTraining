import {combineReducers} from 'redux';
import {CHANGE_INPUT_VALUE,
    CHANGE_INPUT_VALUEE} from '../actions/actionTypes';
import {LOGIN_INPUT,
    CHANGE_LOGINNAME_INPUT_VALUE,
    CHANGE_LOGINPASSWORD_INPUT_VALUE} from '../actions/actionTypes'
    
    let logininput = {"useid":"zhangsan","pwd":"123"};
    function login(state=logininput,action){
        switch (action.type) {
            case LOGIN_INPUT:
                state.name = action.name;
                state.password = action.password;
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
    let loginpassword = 'password';
    function LoginchangeValuePassword(state=loginpassword,action){
        switch (action.type) {
            case CHANGE_LOGINPASSWORD_INPUT_VALUE:
                return action.value;
            default:
                return state;
        }
    }
    let inputValue = 'todolist';
    let inputValuee = 'todolistt';
    
    function changeValuee(state=inputValuee,action){
        switch(action.type){
            case CHANGE_INPUT_VALUEE :
                return action.value;
            default :
                return state;
        }
    }
    
    function changeValue(state=inputValue,action){
        switch(action.type){
            case CHANGE_INPUT_VALUE :
                return action.value;
            default :
                return state;
        }
    }
let userInfor = {
    loginname: '',
    score: 0
}
// function login(state=userInfor,action){

//     switch (action.type) {
//         case LOGIN_SUCCESS:
//             console.log(action)
//             return action.value;
//         default:
//             return state;
//     }
// }
let reducer = combineReducers({
    changeValue,login,changeValuee,
    LoginchangeValueName,
    LoginchangeValuePassword
})
export default reducer;