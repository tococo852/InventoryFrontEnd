import api from "./axios"

export const itemsFamilyApi = {
  async getAll() {
    const res = await api.get('/itemFamilies')
    return res.data
  },
  async getOne(id) {
    const res = await api.get(`/itemFamilies/${id}`)
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
    const res = await api.delete(`/itemFamilies/${id}`)
    return res.data
  },
  async deleteCategory(id, category_id) {
    const res = await api.delete(`/itemFamilies/categories/${id}`, {category_id})
    return res.data
  }

}