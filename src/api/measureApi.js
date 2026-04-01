// measuresApi.js
const BASE_URL = import.meta.env.VITE_API_URL
export const measureApi = {
  async getAll() {
    const res = await fetch(`${BASE_URL}/measures`)
    return res.json()
  },
  async getOne(id) {
    const res = await fetch(`${BASE_URL}/measures/${id}`)
    return res.json()
  },
  async add(measure) {
    const res = await fetch(`${BASE_URL}/measures`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ measure })
    })
    return res.json()
  },
  async update(id, measure) {
    const res = await fetch(`${BASE_URL}/measures/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ measure })
    })
    return res.json()
  },
  async delete(id) {
    const res = await fetch(`${BASE_URL}/measures/${id}`, {
      method: 'DELETE'
    })
    return res.json()
  }
}