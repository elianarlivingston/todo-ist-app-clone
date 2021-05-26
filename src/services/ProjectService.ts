import { http } from '../utils/fetch'
import { Project, ProjectCreate } from '../types/Project'

const API_URL = process.env.REACT_APP_BASE_URL as string
const PROJECTS = `${API_URL}/projects`

export default class ProjectService {
    getAll(): Promise<Project[]> {
        return http.get({ url: PROJECTS })
    }
    getOne(id: string): Promise<Project> {
        return http.get({ url: `${PROJECTS}/${id}` })
    }
    create(object: ProjectCreate) {
        http.post({
            url: PROJECTS,
            data: object
        })
    }
    update(id: number, object: ProjectCreate) {
        http.post({
            url: `${PROJECTS}/${id}`,
            data: object
        })
    }
    delete(id: number) {
        http.delete({ url: `${PROJECTS}/${id}` })
    }
}