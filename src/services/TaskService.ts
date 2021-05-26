import { http } from '../utils/fetch'
import { Task, TaskCreate } from '../types/Task'

const API_URL = process.env.REACT_APP_BASE_URL as string
const TASKS = `${API_URL}/tasks`

export default class TaskService {
    getAll(): Promise<Task[]> {
        return http.get({ url: TASKS })
    }
    getOne(id: number): Promise<Task> {
        return http.get({ url: `${TASKS}/${id}` })
    }
    create(object: TaskCreate) {
        http.post({
            url: TASKS,
            data: object
        })
    }
    update(id: number, object: TaskCreate) {
        http.post({
            url: `${TASKS}/${id}`,
            data: object
        })
    }
    delete(id: number) {
        http.delete({ url: `${TASKS}/${id}` })
    }
    close(id: number) {
        http.post({
            url: `${TASKS}/${id}/close`
        })
    }
    reopen(id: number) {
        http.post({
            url: `${TASKS}/${id}/reopen`
        })
    }
}