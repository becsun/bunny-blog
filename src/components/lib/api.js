import axios from 'axios'

const baseUrl = '/api'

export const registerUser = formData => {
  return axios.post(`${baseUrl}/register`, formData)
}

export const loginUser = formData => {
  return axios.post('http://localhost:8000/login', formData)
}

export const getAllBunnies = () => {
  return axios.get(`${baseUrl}/bunnies`)
} 

export const getSingleBunny = id => {
  return axios.get(`${baseUrl}/bunnies/${id}`)
}

export const getAllBunnyPics = () => {
  return axios.get(`${baseUrl}/bunnycommunity`)
}

export const getSingleBunnyPic = id => {
  return axios.get(`${baseUrl}/bunnycommunity/${id}`)
}