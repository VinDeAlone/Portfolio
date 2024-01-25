import axios from 'axios'
import {BACKEND_URL} from '../Redux/Constants'

export const getUserInformation = (id) => axios.get(BACKEND_URL+"/profile/"+id)