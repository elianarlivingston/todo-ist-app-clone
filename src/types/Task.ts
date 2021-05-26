interface Due {
    date: string;
    datetime: string;
    recurring: boolean,
    string: string;
    timezone: string;
}

export interface Task {
    assignee?: number;
    assigner?: number;
    comment_count?: number;
    completed?: true,
    content?: string;
    description?: string,
    due?: Due | null;
    id?: number,
    label_ids?: number[];
    order?: number;
    priority?: number;
    project_id?: number;
    section_id?: number;
    parent_id?: number;
    url?: string;
}

export interface TaskCreate {
    content: string;
    assignee?: number;
    assigner?: number;
    comment_count?: number;
    completed?: true,
    description?: string,
    due?: Due | null;
    id?: number,
    label_ids?: number[];
    order?: number;
    priority?: number;
    project_id?: number;
    section_id?: number;
    parent_id?: number;
    url?: string;
}