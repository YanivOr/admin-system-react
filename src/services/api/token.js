import axios from 'axios'
import { api } from '../../config'
import { authHeader } from '../auth'

const headers = {
  headers: { Authorization: authHeader() } 
}

export const  verifyToken = () => new Promise((resolve, reject) => {
  const req = axios.get(api.verifyToken, headers)

  req.then(({data}) => {
    resolve(data)
  })
  .catch(({message}) => {
    reject(message)
  })
})
