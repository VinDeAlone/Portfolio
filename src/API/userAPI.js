import axios from 'axios'

export const getUserInformation = (id) => axios.get("http://localhost:8482/profile/"+id)