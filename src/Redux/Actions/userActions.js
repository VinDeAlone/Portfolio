import {GET_USER_INFO} from '../Constants'
import {getUserInformation} from '../../API/userAPI'

export const getUserInfo = (id) => async (dispatch) => {
    try {
        const {data} = await getUserInformation(id)
        console.log(data)
        dispatch({
            type : GET_USER_INFO,
            data : data
        })
    } catch (error) {
        console.log(error)
    }
}