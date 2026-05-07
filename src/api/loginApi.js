import api from "./axios"

export const loginApi = {
  async getToken(userData) {
    try {
      const res = await api.post('/login', userData)
      return res.data
    } catch (err) {
      if (err.response?.status === 401) return null
      throw err
    }
  }
}