export const localStorage = {
    get: (key: string): any => key ? window.localStorage.getItem(key) : undefined,
    set: (key: string, objs: any) => window.localStorage.setItem(key, window.JSON.stringify(objs)),
    remove: (key: string) => window.localStorage.removeItem(key),
    clear: () => window.localStorage.clear()
}