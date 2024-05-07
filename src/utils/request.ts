import axios from 'axios'

const request = axios.create({
    baseURL: 'https://api-music-player.vercel.app'
})

export const get = async (path: string) => {
    const response = await request.get(path)
    return response.data
}
