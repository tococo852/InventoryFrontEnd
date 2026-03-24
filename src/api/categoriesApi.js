const BASE_URL = import.meta.env.VITE_API_URL
export const categoriesApi = {
  async getAll() {
    const res = await fetch(`${BASE_URL}/categories`)
    return res.json()
  },
  async getOne(id) {
    const res = await fetch(`${BASE_URL}/categories/${id}`)
    return res.json()
  },
  async add(name) {
    const res = await fetch(`${BASE_URL}/categories`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name })
    })
    return res.json()
  },
  async update(id, name) {
    const res = await fetch(`${BASE_URL}/categories/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name })
    })
    return res.json()
  },
  async delete(id) {
    const res = await fetch(`${BASE_URL}/categories/${id}`, {
      method: 'DELETE'
    })
    return res.json()
  }
}