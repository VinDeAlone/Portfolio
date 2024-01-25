import {urlPathReducer} from './URLPathReducer'
import {userReducer} from './userReducer'

import {combineReducers} from 'redux'

export const rootReducer = combineReducers({
    urlPathReducer,
    userReducer
})