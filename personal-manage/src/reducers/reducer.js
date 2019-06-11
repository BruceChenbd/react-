import * as types from '../utils/actionTypes';

const initState = {
    username: '',
    loginstatus:''
}

const getData = (state = initState, action) => {
    console.log(action)

    switch (action.type) {
        case types.LOGIN_SUCCESS:
            return Object.assign({},state,action.payload)
        break;
        default:
            return {
                ...state
            }
    }
}

export default getData;