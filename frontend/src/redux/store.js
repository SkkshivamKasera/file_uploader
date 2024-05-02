import { configureStore } from "@reduxjs/toolkit"
import { userReducer } from "./reducer"

export const store = configureStore({
    reducer: {
        user: userReducer
    }
})

export const BACKEND_URL = "http://localhost:5000/api/v1"
// export const BACKEND_URL = "http://192.168.1.6:5000/api/v1"

export const POST_CONFIG = {
    headers: {
        "Content-Type": "application/json"
    },
    withCredentials: true
}

export const GET_CONFIG = {
    withCredentials: true
}