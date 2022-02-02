import axios from 'axios'

const api = axios.create({
    baseURL: 'https://jekalo-test.herokuapp.com/api/'
})

export const getApi = url => {
    return api.get(url).then(({data}) => data).catch(error => error.response)
}

export const postApi = (url, data) => {
    return api.post(url, data).then((response) => response).catch(error => error.response)
}

export const deleteApi = (username) => {
    return api.delete(username).then((response) => response).then(() => window.location.reload(false)).catch(error => error.response)
}

