import axios from 'axios'
import { getToken } from './auth'

const baseUrl = '/api'

const withHeaders = () => {
  return {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  }
}

export const registerUser = formData => {
  return axios.post(`${baseUrl}/register`, formData)
}

export const loginUser = formData => {
  return axios.post(`${baseUrl}/login`, formData)
}

export const getAllBunnies = () => {
  return axios.get(`${baseUrl}/bunnies`)
} 

export const getSingleBunny = id => {
  return axios.get(`${baseUrl}/bunnies/${id}`)
}

export const createBunnyPic = formData => {
  return axios.post(`${baseUrl}/bunnycommunity`, formData, withHeaders())
}

export const getAllBunnyPics = () => {
  return axios.get(`${baseUrl}/bunnycommunity`)
}

export const getSingleBunnyPic = id => {
  return axios.get(`${baseUrl}/bunnycommunity/${id}`)
}

export const deleteBunnyPic = id => {
  return axios.get(`${baseUrl}/bunnycommunity/${id}`)
}