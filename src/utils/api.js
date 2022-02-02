import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:7000/api/'
})

export const getApi = url => {
    return api.get(url).then(({data}) => data).catch(error => error.response)
}

export const postApi = (url, data) => {
    return api.post(url, data).then((response) => response).catch(error => error.response)
}

export const deleteApi = (username) => {
    return api.delete(username).then((response) => response).catch(error => error.response)
}

