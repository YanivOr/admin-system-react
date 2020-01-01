import axios from 'axios'
import { api } from '../config'
import { authHeader } from './auth'

const headers = {
  headers: { Authorization: authHeader() } 
}

export const apiRequest = (entity, data) => {
  return new Promise((resolve, reject) => {
    const req = !data ? 
                  axios.get(api[entity], headers) 
                      :
                data.hasOwnProperty('id') 
                      ?
                  axios.put(`${api[entity]}/${data.id}`, data, headers) 
                      :
                  axios.post(api[entity], data, headers)

    req.then(({data}) => {
      resolve(data)
    })
    .catch(({message}) => {
      reject(message)
    })
  })
}
