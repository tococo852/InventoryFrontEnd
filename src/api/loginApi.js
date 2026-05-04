const BASE_URL = import.meta.env.VITE_API_URL

export const loginApi={
    //post request to get the token
    async getToken(userData){
        const res = await fetch(`${BASE_URL}/login`,{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
        })

        return res.status==401?null:res.json()
    }

}