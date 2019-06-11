import * as types from '../utils/actionTypes';

let xhr = new Promise((resolve,reject) => {
    setTimeout(() => {
       resolve('ok') 
    },3000)
})
export function login (userInfo) {
    return async dispatch => {
       const result = await xhr;
       const data = Object.assign({},userInfo,{loginstatus:'ok'})
       if(result == 'ok') {
           dispatch(loginSuccess(data))
       }
    }
}

export function loginSuccess (data) {
   return {
       type: types.LOGIN_SUCCESS,
       payload:data
   }
}