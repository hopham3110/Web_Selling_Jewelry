import axios from "axios"
export const axiosJWT = axios.create()

export const loginUser = async (data) => {
    const res = await axios.post(`http://192.168.163.1:3000/api/user/sign-in`, data)
    return res.data
}

export const signupUser = async (data) => {
    const res = await axios.post(`http://192.168.163.1:3000/api/user/sign-up`, data)
    return res.data
}

export const getDetailsUser = async (id, access_token) => {
    const res = await axiosJWT.get(`http://192.168.163.1:3000/api/user/get-details/${id}`, {
        headers: {
            token: `Bearer ${access_token}`,
        }
    },)
    return res.data
}

export const deleteUser = async (id, access_token, data) => {
    const res = await axiosJWT.delete(`http://192.168.163.1:3000/api/user/delete-user/${id}`, data, {
        headers: {
            token: `Bearer ${access_token}`,
        }
    },)
    return res.data
}

export const getAllUser = async (access_token) => {
    const res = await axiosJWT.get(`http://192.168.163.1:3000/api/user/getAll`, {
        headers: {
            token: `Bearer ${access_token}`,
        }
    },)
    return res.data
}

export const refreshToken = async (refreshToken) => {
    console.log('refreshToken', refreshToken)
    const res = await axios.post(`http://192.168.163.1:3000/user/refresh-token`, {} , {
        headers: {
            token: `Bearer ${refreshToken}`,
        }
    })
    return res.data
}

export const logoutUser = async () => {
    const res = await axios.post(`http://192.168.163.1:3000/api/user/log-out`)
    return res.data
}

export const updateUser = async (id, data, access_token) => {
    const res = await axiosJWT.put(`http://192.168.163.1:3000/api/user/update-user/${id}`, data, {
        headers: {
            token: `Bearer ${access_token}`,
        }
    },)
    return res.data
}

export const deleteManyUser = async (data, access_token) => {
    const res = await axiosJWT.post(`http://192.168.163.1:3000/api/user/delete-many`, data, {
        headers: {
            token: `Bearer ${access_token}`,
        }
    })
    return res.data
}


