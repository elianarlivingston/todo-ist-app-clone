
export interface Label {
    id: number;
    name: string;
    color: number;
    order: number;
    favorite: boolean;
}

export interface LabelCreate {
    name: string;
    color?: number;
    order?: number;
    favorite?: boolean;
}