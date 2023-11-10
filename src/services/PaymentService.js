import axios from "axios"

export const getConfig = async () => {
  const res = await axios.get(`http://192.168.163.1:3000/api/payment/config`)
  return res.data
}