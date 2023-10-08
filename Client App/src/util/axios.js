import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://asm3-nodejs-f00e5645d891.herokuapp.com/'
})

export default instance