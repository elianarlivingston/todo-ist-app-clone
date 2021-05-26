export interface Project {
    id: number,
    name: string,
    comment_count: number,
    order: number,
    color: number,
    shared: boolean,
    sync_id: number,
    favorite: boolean,
    inbox_project: boolean,
    url: string
}

export interface ProjectCreate {
    name: string,
    color?: number,
    favorite?: boolean,
}