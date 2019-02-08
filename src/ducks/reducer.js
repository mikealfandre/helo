
const initialState = {
    username: '',
    id: '',
    profile_pic: ''
}

const UPDATE_AUTH = 'UPDATE_AUTH'

export default function reducer(state = initialState, action){
    const {type, payload} = action
    switch(type){
        case UPDATE_AUTH:
            return Object.assign({}, state, payload)
        default:
            return state
    }

} 

export function updateAuth(userObj){
    console.log('userObj', userObj)
    return{
        type: UPDATE_AUTH,
        payload: userObj
    }
}