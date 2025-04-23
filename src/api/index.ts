import axios from 'axios'

const serverUrl = 'https://api.diveevskiy-museum.itlabs.top'

const api = axios.create({
  baseURL: serverUrl + '/api/',
  headers: {
    Accept: 'application/json',
  },
})

export const getHistory = async () => {
  const { data } = await api.get('history-content/1')
  data.image = serverUrl + data.image
  return data
}

export const getMasters = async () => {
  const { data } = await api.get('masters')
  data.forEach((master: any) => {
    master.image = serverUrl + master.image
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
    toy.image = serverUrl + toy.image
  })
  return data
}

export default api
