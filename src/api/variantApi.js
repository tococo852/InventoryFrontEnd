import api from "./axios"

export const variantGroupApi = {
  async getAll() {
    const res = await api.get('/variantGroups')
    return res.data
  },

  async getOne(id) {
    const res = await api.get(`/variantGroups/${id}`)
    return res.data
  },
  async getFamilyVariants(id) {
    const res = await api.get(`/variantGroups/family/${id}`)
    return res.data
  },


  async add(variantGroup) {
    const res = await api.post('/variantGroups', { variantGroup })
    return res.data
  },

  async update(id, variantGroup) {
    const res = await api.put(`/variantGroups/${id}`, { variantGroup })
    return res.data
  },

  async delete(id) {
    const res = await api.delete(`/variantGroups/${id}`)
    return res.data
  }
}

export const variantApi = {
  async getAll() {
    const res = await api.get('/variants')
    return res.data
  },

  async getOne(id) {
    const res = await api.get(`/variants/${id}`)
    return res.data
  },

  async add(parentId, variant) {
    const res = await api.post(`/variants/${parentId}`, { variant })
    return res.data
  },

  async update(id, variant) {
    const res = await api.put(`/variants/${id}`, { variant })
    return res.data
  },

  async delete(id) {
    const res = await api.delete(`/variants/${id}`)
    return res.data
  }
}