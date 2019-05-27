import axios from 'axios'
import {getEventDistributor} from "../eventDistributor"

const config = {
    url: 'http://localhost/auth/realms',
    realm: 'MicroportalRealm',
    clientId: 'microportal-login',
    grant_type: 'password',
}

export const login = async form => {
    try {
        const formData = {
            username: form.username,
            password: form.password
        }
        const {data} = await axios.post("/login-service/login", formData)
        getEventDistributor().dispatch({type: 'USER_FETCHED', payload: data})
    } catch (e) {
        console.log(e)
    }
}
