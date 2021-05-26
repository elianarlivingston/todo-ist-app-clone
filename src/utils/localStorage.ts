// const get = (key: string) => window.JSON.parse(window.localStorage.getItem(key))

const set = (key: string, objs: any) => window.localStorage.setItem(key, window.JSON.stringify(objs))

export const localStorage = {
    // get,
    set
}