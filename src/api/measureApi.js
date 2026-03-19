const BASE_URL = import.meta.env.VITE_API_URL

export const measureApi={

    async getMeasures(){
        const res = await fetch(`${BASE_URL}/measures`)
        return res.json()
    }

}