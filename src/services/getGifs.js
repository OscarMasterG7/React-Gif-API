import {API_KEY, API_URL} from './settings'

const fromApiResponseToGifs = apiResponse => {
  const {data = []} = apiResponse
  if (Array.isArray(data)) {
    const gifs = data.map(image => image.images.downsized_medium.url)
  return gifs  
}}

export default async function getGifs({
  limit = 10,
  rating = "g",
  keyword = "rickroll",
  page = 0,
} = {}) {
  const apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${
    page * limit
  }&rating=${rating}&lang=en`

  return await fetch(apiURL)
    .then((res) => res.json())
    .then(fromApiResponseToGifs)
}