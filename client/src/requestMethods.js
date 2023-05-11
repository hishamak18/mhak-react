import axios from  'axios';

const BASE_URL = "https://mhak.live/backend/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NTExODMxMzRmMWVlMjdlNzllNzNjMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MzQ0MzIwM30.XSBW4A-GWKf86tVkHiymDax5heog8ZctK7Xqlrf2Zj0"


export const publicRequest = axios.create({
    baseURL:BASE_URL,
})
export const userRequest = axios.create({
    baseURL:BASE_URL,
    header:{token: `Bearer ${TOKEN}`}
})