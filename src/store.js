import {createStore} from 'redux'

const initialState = {
    message: undefined
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'USER_FETCHED':
            localStorage.setItem('microportal.access_token', action.payload.access_token)
            localStorage.setItem('microportal.refresh_token', action.payload.refresh_token)
            window.location.reload()
            return {...state, message: 'Sigin!'}
        default:
            return state
    }
}

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export const storeInstance = createStore(reducer, devTools)
