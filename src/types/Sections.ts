export interface Section {
    id: number;
    project_id: number;
    order: number;
    name: string;
}

export interface SectionCreate {
    project_id?: number;
    order?: number;
    name: string;
}