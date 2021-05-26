const get = (url: string): any => {
    try {
        const searchs: any = new URL(url).searchParams
        const params: any = {}

        for (const [key, value] of searchs) {
            params[key] = value
        }

        return params
    } catch (error) {
        console.error(error)
        return {}
    }
}

const set = (url: string, params: any) => {
    try {
        const newUrl = new URL(url)

        for (const key in params) {
            newUrl.searchParams.append(key, params[key])
        }

        return newUrl.toString()
    } catch (error) {
        console.error(error)
        return ''
    }
}

const _delete = (url: string, key: string) => {
    const newUrl = new URL(url)

    newUrl.searchParams.delete(key)

    return newUrl.toString()
}

export const params = {
    get,
    set,
    delete: _delete
}