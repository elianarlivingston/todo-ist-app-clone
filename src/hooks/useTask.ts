import { useState } from 'react'
import TaskService from '../services/TaskService'
import { Task, TaskCreate } from '../types/Task'

const taskService = new TaskService()

const useTask = () => {
    const [tasks, setTasks] = useState<Task[]>([])
    const [task, setTask] = useState<Task>({})

    return {
        getAllTasks: async () => {
            const data: any = await taskService.getAll()
            setTasks(data)
        },
        getOneTask: async (id: number) => {
            const data: any = await taskService.getOne(id)
            setTask(data)
        },
        createTask: (object: TaskCreate) => {
            taskService.create(object)
        },
        updateTask: (id: number, object: TaskCreate) => {
            taskService.update(id, object)
        },
        deleteTask: (id: number) => {
            taskService.delete(id)
        },
        closeTask: (id: number) => {
            taskService.close(id)
        },
        reopenTask: (id: number) => {
            taskService.reopen(id)
        },
        tasks,
        task
    }
}

export default useTask