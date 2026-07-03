import api from "./axios"

export const measureApi = {
  async getAll() {
    const res = await api.get('/measures')
    return res.data
  },
  async getOne(id) {
    const res = await api.get(`/measures/${id}`)
    return res.data
  },
  async add(measure) {
    const res = await api.post('/measures', { measure })
    return res.data
  },
  async update(id, measure) {
    const res = await api.put(`/measures/${id}`, { measure })
    return res.data
  },
  async delete(id) {
    const res = await api.delete(`/measures/${id}`)
    return res.data
  }
}