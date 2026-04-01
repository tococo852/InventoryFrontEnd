// itemsApi.js
const BASE_URL = import.meta.env.VITE_API_URL
export const itemsApi = {
  async getAll() {
    const res = await fetch(`${BASE_URL}/items`)
    return res.json()
  },
  async getOne(id) {
    const res = await fetch(`${BASE_URL}/items/${id}`)
    return res.json()
  },
  async add(item) {
    const res = await fetch(`${BASE_URL}/items`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item)
    })
    return res.json()
  },
  async update(id, item) {
    console.log(`${BASE_URL}/items/${id}`)
    const res = await fetch(`${BASE_URL}/items/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item)
    })
    return res.json()
  },
  async delete(id) {
    const res = await fetch(`${BASE_URL}/items/${id}`, {
      method: 'DELETE'
    })
    return res.json()
  }
}