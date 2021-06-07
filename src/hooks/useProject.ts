import { useState } from 'react'
import ProjectService from '../services/ProjectService'
import { Project, ProjectCreate } from '../types/Project'

const projectService = new ProjectService()

const useProject = () => {
    const [projects, setProjects] = useState<Project[]>([])
    const [project, setProject] = useState<Project | {}>({})

    return {
        getAllProjects: async () => {
            const data: any = await projectService.getAll()
            setProjects(data)
        },
        getOneProject: async (id: string) => {
            const data: any = await projectService.getOne(id)
            setProject(data)
        },
        createProject: async (object: ProjectCreate) => {
            await projectService.create(object)
        },
        updateProject: async (id: number, object: ProjectCreate) => {
            await projectService.update(id, object)
        },
        deleteProject: async (id: number) => {
            await projectService.delete(id)
        },
        projects,
        project
    }
}

export default useProject