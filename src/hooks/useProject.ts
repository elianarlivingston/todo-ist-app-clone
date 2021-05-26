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
        createProject: (object: ProjectCreate) => {
            projectService.create(object)
        },
        updateProject: (id: number, object: ProjectCreate) => {
            projectService.update(id, object)
        },
        deleteProject: (id: number) => {
            projectService.delete(id)
        },
        projects,
        project
    }
}

export default useProject