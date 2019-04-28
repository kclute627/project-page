
import * as actionTypes from './actions';


export const setProject = (name)=>{
    console.log(name)
    return{
        type: actionTypes.SET_PROJECT,
        value: name,
        loading: true,
    }
}