import { http } from '../utils/fetch'
import { Label, LabelCreate } from '../types/Label'

const API_URL = process.env.REACT_APP_BASE_URL as string
const LABEL = `${API_URL}/labels`

export default class LabelService {
    getAll(): Promise<Label[]> {
        return http.get({ url: LABEL })
    }
    getOne(id: string): Promise<Label> {
        return http.get({ url: `${LABEL}/${id}` })
    }
    create(object: LabelCreate) {
        http.post({
            url: LABEL,
            data: object
        })
    }
    update(id: number, object: LabelCreate) {
        http.post({
            url: `${LABEL}/${id}`,
            data: object
        })
    }
    delete(id: number) {
        http.delete({ url: `${LABEL}/${id}` })
    }
}