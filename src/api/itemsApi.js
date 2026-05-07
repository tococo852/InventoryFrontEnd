import api from "./axios"

export const itemsApi = {
  async getAll() {
    const res = await api.get('/items')
    return res.data
  },
  async getOne(id) {
    const res = await api.get(`/items/${id}`)
    return res.data
  },
  async add(item) {
    const res = await api.post('/items', item)
    return res.data
  },
  async update(id, item) {
    const res = await api.put(`/items/${id}`, item)
    return res.data
  },
  async delete(id) {
    const res = await api.delete(`/items/${id}`)
    return res.data
  }
}