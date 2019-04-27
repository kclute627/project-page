
import * as actionTypes from './actions';


export const setProject = (name)=>{
    return{
        type: actionTypes.SET_PROJECT,
        value: name
    }
}