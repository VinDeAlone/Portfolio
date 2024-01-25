import {SET_URL_PATH} from '../Constants'

export const setURLPath = (data) => (dispatch) => {
    try {
        dispatch({
            type : SET_URL_PATH,
            data : data
        })        
    } catch (error) {
        console.log(error) 
    }
}