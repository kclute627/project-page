import * as actionTypes from './actions';

let initialState = {
    projectName: null,
}

const reducer = (state = initialState, action)=>{
    switch(action.type){
        case actionTypes.SET_PROJECT:
        return{
            ...state,
            projectName: action.value,
            loading: false,
        }
        default: 
        return state;

    }
}

console.log(initialState)


export default reducer