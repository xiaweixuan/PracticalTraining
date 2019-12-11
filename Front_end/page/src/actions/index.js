import * as types from './actionTypes';

export function loginInput(name,password){
    return {
        type: types.LOGIN_INPUT,
        name,
        password
    }
}

export const LoginchangeValueName = value=>(
    {
        type: types.CHANGE_LOGINNAME_INPUT_VALUE,
        value
    }
)

export const LoginchangeValuePassword = value=>(
    {
        type: types.CHANGE_LOGINPASSWORD_INPUT_VALUE,
        value
    }
)

export const loginstateflag = value=>(
    {
        type: types.LOGIN_FLAG,
        value
    }
)

export const changeValue = value=>(
    {
        type: types.CHANGE_INPUT_VALUE,
        value
    }
)

export const changeValuee = value=>(
    {
        type: types.CHANGE_INPUT_VALUEE,
        value
    }
)
export const Search = value=>(
    {
        type: types.CHANGE_INPUT_VALUE,
        value
    }
)
export const changeValueee = value=>(
    {
        type: types.CHANGE_PHONE_VALUE,
        value
    }
)
export const changeValueeee = value=>(
    {
        type: types.CHANGE_PHONE_VALUE,
        value
    }
)
export const log = (value)=>(
    {
        type: types.LOGIN_SUCCESS,
        value
    }
)
// 异步action
export const logFetch = (value)=>{
    return (dispatch)=>{
        fetch('https://cnodejs.org/api/v1/user/alsotang')
            .then(res=>res.json())
            .then(res=>{
                console.log(res)
                let userInfor = {
                    loginname: res.data.loginname,
                    score: res.data.score
                }
                // dispatch(log(userInfor))
                dispatch({
                    type: types.LOGIN_SUCCESS,
                    value:userInfor
                })
                // props.history.push('/');
        })
    }
}