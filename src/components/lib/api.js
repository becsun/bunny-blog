import axios from 'axios'

// const baseUrl = 'http://localhost:3000'

export const registerUser = formData => {
  return axios.post('http://localhost:3000/register', formData)
}