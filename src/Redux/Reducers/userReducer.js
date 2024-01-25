import { GET_USER_INFO } from '../Constants'

const initioalState = {
    id: -1,
    fname: "default-name",
    lname: "default-lastname",
    designations: "",
    profileUrls: [
        { url: "#", logoName: "gitHub" },
        { url: "#", logoName: "linkedIn" },
        { url: "#", logoName: "instagram" }
    ],
    mobile : "+91",
    emails : ["email-here"],
    place : "place-here",
    about : "ABOUT ==>",
    skills : ["skill"]
}

export const userReducer = (state = initioalState, action) => {
    switch(action.type){
        case GET_USER_INFO :
            return action.data
        default :
            return state
    }
}