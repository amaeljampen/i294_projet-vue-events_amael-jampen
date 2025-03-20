/* eslint-disable */

import axios from 'axios'
const apiClient = axios.create({
  baseURL:
    'http://localhost:3000/',
  withCredentials: false,
  headers: {
    accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getEvents() {
    return apiClient.get('/events')
  },
  delEvents(id) {
    return apiClient.delete('events/' + id)
  },
  addEvents(event) {
    return apiClient.post('events/', event)
  },
  updateEvents() {

  }
}
