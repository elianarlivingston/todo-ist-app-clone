import { http } from '../utils/fetch'
import { Section, SectionCreate } from '../types/Sections'

const API_URL = process.env.REACT_APP_BASE_URL as string
const SECTIONS = `${API_URL}/sections`

export default class SectionService {
    getAll(idProject: number): Promise<Section[]> {
        return http.get({ url: SECTIONS, searchParams: { project_id: idProject } })
    }
    getOne(id: number): Promise<Section> {
        return http.get({ url: `${SECTIONS}/${id}` })
    }
    create(object: SectionCreate) {
        http.post({
            url: SECTIONS,
            data: object
        })
    }
    update(id: number, object: SectionCreate) {
        http.post({
            url: `${SECTIONS}/${id}`,
            data: object
        })
    }
    delete(id: number) {
        http.delete({ url: `${SECTIONS}/${id}` })
    }
}