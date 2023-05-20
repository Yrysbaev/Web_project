import axios from "axios";

export const baseUrl = 'http://admin.sports.com.kg/api/'



export async function getFetcher(request) {
    try {
        const data = await axios.get(`${baseUrl}${request}`)
        return data.data
    } catch (err) {
        // console.log(err.response.data.error)
    }
}