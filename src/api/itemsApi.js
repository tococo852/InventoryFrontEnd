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
    const formData = new FormData()
    Object.entries(item).forEach(([key, value]) => {
      if (value !== null && value !== undefined) formData.append(key, value)
    })
    const res = await api.post('/items', formData)
    return res.data
  },
  async update(id, item) {

    const formData = new FormData()
    Object.entries(item).forEach(([key, value]) => {
      if (value !== null && value !== undefined) formData.append(key, value)
    })
    const res = await api.put(`/items/${id}`, formData)
    return res.data
  },
  async delete(id) {
    const res = await api.delete(`/items/${id}`)
    return res.data
  }
}