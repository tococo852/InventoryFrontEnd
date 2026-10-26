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
    if (value !== null && value !== undefined) {
      // If the value is a File object, append it directly
      if (value instanceof File) {
        formData.append(key, value)
      } 
      // If it's an object or array (like Category or variant_list), convert to JSON string
      else if (typeof value === 'object') {
        formData.append(key, JSON.stringify(value))
      } 
      // Primitive values (strings, numbers, booleans)
      else {
        formData.append(key, value)
      }
    }
  })

  const res = await api.post('/items', formData)
  return res.data
},
  async update(id, item) {

    const formData = new FormData()
    
  Object.entries(item).forEach(([key, value]) => {
    if (value !== null && value !== undefined) {
      // If the value is a File object, append it directly
      if (value instanceof File) {
        formData.append(key, value)
      } 
      // If it's an object or array (like Category or variant_list), convert to JSON string
      else if (typeof value === 'object') {
        formData.append(key, JSON.stringify(value))
      } 
      // Primitive values (strings, numbers, booleans)
      else {
        formData.append(key, value)
      }
    }
  })
    const res = await api.put(`/items/${id}`, formData)
    return res.data
  },
  async delete(id) {
    const res = await api.delete(`/items/${id}`)
    return res.data
  }
}