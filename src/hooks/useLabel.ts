import { useState } from 'react'
import LabelService from '../services/LabelService'
import { Label, LabelCreate } from '../types/Label'

const labelService = new LabelService()

const useLabel = () => {
    const [labels, setLabels] = useState<Label[]>([])
    const [label, setLabel] = useState<Label | {}>({})

    return {
        getAllLabel: async () => {
            const data: any = await labelService.getAll()
            setLabels(data)
        },
        getOneLabel: async (id: string) => {
            const data: any = await labelService.getOne(id)
            setLabel(data)
        },
        createLabel: (object: LabelCreate) => {
            labelService.create(object)
        },
        updateLabel: (id: number, object: LabelCreate) => {
            labelService.update(id, object)
        },
        deleteLabel: (id: number) => {
            labelService.delete(id)
        },
        labels,
        label
    }
}

export default useLabel