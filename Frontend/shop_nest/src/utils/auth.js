import { ACCESS_TOKEN as adminToken} from "hooks/useAdmin"
import { ACCESS_TOKEN as userToken} from "hooks/useUser"

export const getToken = ()=>{
    return localStorage.getItem(adminToken)
}

export const authHeader = ()=>{
    return { headers: { Authorization: "Bearer " + getToken() } }
}


export const getUserToken = ()=>{
    return localStorage.getItem(userToken)
}

export const authUserHeader = ()=>{
    return { headers: { Authorization: "Bearer " + getUserToken() } }
}