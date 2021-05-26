// import { uuid } from 'uuidv4';
import { localStorage } from './localStorage'
import { params } from './searchParams'

// const TOKEN = localStorage.get('token')
const TOKEN = 'df1131571e4a32aabf7792fb331750cd0390ed00'
localStorage.set('token', TOKEN)

const headers = new Headers({
    "Content-Type": "application/json",
    "Accept": "application/json",
})

interface Fetch {
    url: string;
    searchParams?: any;
    data?: any;
}

const get = async (props: Fetch) => {
    const token = localStorage.get('token')
    headers.append('Authorization', token ? `Bearer ${token}` : '')

    const { url, searchParams } = props
    const newUrl = params.set(url, (searchParams ?? {}))

    try {
        const response = await fetch(newUrl, { method: 'GET', headers })
        const res: any = response.json() as Promise<any>
        if (!response?.ok) throw new Error('Hubo un error')

        return res
    } catch (error) {
        console.error(error)
        window.alert('Ocurrió un error :(')
    }
}

const post = async (props: Fetch) => {
    const token = localStorage.get('token')
    headers.append('Authorization', token ? `Bearer ${token}` : '')

    const { url, searchParams, data } = props
    const newUrl = params.set(url, (searchParams ?? {}))

    try {
        const response = await fetch(newUrl, {
            method: 'POST',
            headers,
            body: JSON.stringify(data)
        })

        if (!response.ok) throw new Error('Hubo un error');
    } catch (error) {
        console.error(error)
        window.alert('Ocurrió un error :(')
    }
}

const _delete = async (props: Fetch) => {
    const token = localStorage.get('token')
    headers.append('Authorization', token ? `Bearer ${token}` : '')

    const { url, searchParams } = props
    const newUrl = params.set(url, (searchParams ?? {}))

    try {
        const response = await fetch(newUrl, {
            method: 'DELETE',
            headers
        })

        if (!response.ok) throw new Error('Hubo un error');
    } catch (error) {
        console.error(error)
        window.alert('Ocurrió un error :(')
    }
}

export const http = {
    get,
    post,
    delete: _delete
}