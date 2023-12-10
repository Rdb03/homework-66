export interface INotes {
    id: string,
    time: string,
    dish: string,
    kcal: number,
}

export interface INotesMutation {
    time: string,
    dish: string,
    kcal: string,
}