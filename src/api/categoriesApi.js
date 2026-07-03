import api from "./axios"

export const categoriesApi = {
  async getAll() {
    const res = await api.get('/categories')
    return res.data
  },
  async getOne(id) {
    const res = await api.get(`/categories/${id}`)
    return res.data
  },
  async add(name) {
    const res = await api.post('/categories', { name })
    return res.data
  },
  async update(id, name) {
    const res = await api.put(`/categories/${id}`, { name })
    return res.data
  },
  async delete(id) {
    const res = await api.delete(`/categories/${id}`)
    return res.data
  }
}