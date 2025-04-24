import axios from 'axios'

const api = axios.create({
  baseURL: window.API + '/api/',
  headers: {
    Accept: 'application/json',
  },
})

export const getHistory = async () => {
  const { data } = await api.get('history-content/1')
  data.image = window.API + data.image
  return data
}

export const getMasters = async () => {
  const { data } = await api.get('masters')
  data.forEach((master: any) => {
    master.image = window.API + master.image
  })
  return data
}

export const getFeatures = async () => {
  const { data } = await api.get('features-content/1')
  return data
}

export const getToys = async () => {
  const { data } = await api.get('toys')
  data.forEach((toy: any) => {
    toy.image = window.API + toy.image
  })
  return data
}

export default api
