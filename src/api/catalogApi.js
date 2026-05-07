import api from "./axios"
export const catalogApi={

    async get(){
        const res = await api(`/catalog`)
        return res.data
    }

}