import {SET_URL_PATH} from '../Constants'

const initialState = "/"

export const urlPathReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_URL_PATH : 
            return action.data 
        default :
            return state
    }
} 