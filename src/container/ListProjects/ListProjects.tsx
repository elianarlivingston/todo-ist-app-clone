import { FC, useState } from 'react'
import { ListProjectProps } from './types'
import { List, ListItem, ListItemDecoration } from '../../styles/Menu'
import { useProject } from '../../hooks'
import { NavLink } from 'react-router-dom'
import { Project } from '../../types/Project'
import { Menu } from '../../components'
import { colors } from '../../config/colors'

const ListProjects: FC<ListProjectProps> = (props) => {
    const [on, toggle] = useState(false)
    const { projects, getAllProjects } = props
    const { deleteProject } = useProject()

    const removeProject = async (id: number) => {
        await deleteProject(id)
        toggle(false)
        await getAllProjects()
    }

    const editProject = (id: number) => {
        console.log('Editar', id)
        toggle(false)
    }

    return (
        <List>
            {
                (projects && projects.length > 0) && 
                projects.map((project: Project) => (
                        <ListItem key={project.id}>
                            <NavLink to={`/project/${project.id}`}>
                                <ListItemDecoration style={{
                                    backgroundColor: Object.values(colors).find(color => color.code === project.color)?.color || 'gray'
                                }}></ListItemDecoration>
                                <span>{ project.name }</span>
                            </NavLink>
                            <Menu
                                activator={<i className="fas fa-ellipsis-h"></i>}
                                on={on}
                                toggle={toggle}
                            >
                                <ListItem  onClick={() => removeProject(project.id)}
                                >
                                    <span className="far fa-trash-alt"></span>
                                    <span>Eliminar</span>
                                </ListItem>
                                <ListItem onClick={() => editProject(project.id)}
                                >
                                    <span className="fas fa-pen"></span>
                                    <span>Editar</span>
                                </ListItem>
                            </Menu>
                        </ListItem>
                ))
            }
        </List>
    )
}

export default ListProjects