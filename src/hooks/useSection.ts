import { useState } from 'react'
import SectionService from '../services/SectionService'
import { Section, SectionCreate } from '../types/Sections'

const sectionService = new SectionService()

const useSection = () => {
    const [sections, setSections] = useState<Section[]>([])
    const [section, setSection] = useState<Section | {}>({})

    return {
        getAllSections: async (idProject: number) => {
            const data: any = await sectionService.getAll(idProject)
            setSections(data)
        },
        getOneSection: async (id: number) => {
            const data: any = await sectionService.getOne(id)
            setSection(data)
        },
        createSection: async (object: SectionCreate) => {
            sectionService.create(object)
        },
        updateSection: async (id: number, object: SectionCreate) => {
            sectionService.update(id, object)
        },
        deleteSection: async (id: number) => {
            sectionService.delete(id)
        },
        sections,
        section
    }
}

export default useSection