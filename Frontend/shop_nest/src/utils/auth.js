import { ACCESS_TOKEN } from "hooks/useAdmin"

export const getToken = ()=>{
    return localStorage.getItem(ACCESS_TOKEN)
}

export const authHeader = ()=>{
    return { headers: { Authorization: "Bearer " + getToken() } }
}