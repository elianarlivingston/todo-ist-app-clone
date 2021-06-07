import { FC, useState, useEffect } from 'react'
import { SidebarProps } from './types'
import { SidebarWraper, SidebarStyle} from './styles'
import { Accordion, Modal } from '../index'
import { ListProjects, ListLabels } from '../../container'
import { FormProject } from '../../container'
import { useProject } from '../../hooks/index'

const Sidebar: FC<SidebarProps> = (props) => {
    const { open = false, toggle } = props
    const [modal, setModal ] = useState(false)
    const [modalLabels, setModalLabels ] = useState(false)
    // const [element, setElement] = useState(0)

    const [name, setName] = useState('')
    const [color, setColor] = useState(0)
    const [favorite, setFavorite] = useState(false)

    const { createProject, getAllProjects, projects } = useProject()

    const handlerSubmitProject = async (event: any) => {
        event.preventDefault()

        const newProject = { name, color, favorite }
        await createProject(newProject)
        await getAllProjects()

        setModal(false)

        setName('')
        setColor(0)
        setFavorite(false)
    }

    const handlerKeyDown = (event: any) => {
        const key: string = event?.key
        console.log(key)

        if(key === 'm') {
            toggle(true)
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', handlerKeyDown)
        return window.removeEventListener('keydown', handlerKeyDown)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        getAllProjects()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <SidebarWraper 
                open={open} 
                aria-labelledby="button-sidebar" 
                onClick={toggle}
                onKeyDown={handlerKeyDown}
            >
                <SidebarStyle onClick={e => e.stopPropagation()}>
                    <Accordion
                        title="Proyectos"
                        handlerClick={() => {
                            setModal(true) 
                        }}  
                    >
                        <ListProjects
                            projects={projects}
                            getAllProjects={getAllProjects}
                        ></ListProjects>
                    </Accordion>
                    <Accordion
                        title="Etiquetas"
                        handlerClick={setModalLabels}
                    >
                        <ListLabels></ListLabels>
                    </Accordion>
                </SidebarStyle>
            </SidebarWraper>

            <Modal
                on={modal}
                toggle={setModal}
            >
                <h3>Crear Proyecto</h3>
                <FormProject 
                    name={name}
                    setName={setName}
                    color={color}
                    setColor={setColor}
                    favorite={favorite}
                    setFavorite={setFavorite}
                    toggle={setModal}
                    handlerSubmit={handlerSubmitProject}
                />
            </Modal>
            <Modal
                on={modalLabels}
                toggle={setModalLabels}
            >
                Labels!
            </Modal>
        </>
    )
}

export default Sidebar