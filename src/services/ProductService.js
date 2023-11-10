import axios from "axios"
export const axiosJWT = axios.create()

export const getAllProduct = async (limit) => {
    const res = await axios.get(`http://192.168.163.1:3000/api/product/get-all?limit=${limit}`)
    return res.data
}

export const getProductType = async (type, page, limit) => {
    if (type) {
        const res = await axios.get(`http://192.168.163.1:3000/api/product/get-all?filter=type&filter=${type}&limit=${limit}&page=${page}`)
        return res.data
    }
}

export const createProduct = async (data) => {
    const res = await axios.post(`http://192.168.163.1:3000/api/product/create`, data)
    return res.data
}

export const getDetailsProduct = async (id) => {
    const res = await axios.get(`http://192.168.163.1:3000/api/product/get-details/${id}`)
    return res.data
}

export const updateProduct = async (id, access_token, data) => {
    const res = await axiosJWT.put(`http://192.168.163.1:3000/api/product/update/${id}`, data, {
        headers: {
            token: `Bearer ${access_token}`,
        }
    })
    return res.data
}

export const deleteProduct = async (id, access_token) => {
    const res = await axiosJWT.delete(`http://192.168.163.1:3000/api/product/delete/${id}`, {
        headers: {
            token: `Bearer ${access_token}`,
        }
    })
    return res.data
}
export const deleteMany = async (data, access_token,) => {
    const res = await axiosJWT.post(`http://192.168.163.1:3000/api/product/delete-many`, data, {
        headers: {
            token: `Bearer ${access_token}`,
        }
    })
    return res.data
}

export const getAllTypeProduct = async () => {
    const res = await axios.get(`http://192.168.163.1:3000/api/product/get-all-type`)
    return res.data
}