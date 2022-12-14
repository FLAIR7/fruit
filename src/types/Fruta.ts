export type Frutas = {
    id: number,
    name: string,
    family: string,
    genus: string,
    order: string,
    nutritions: {
        carbohydrates: number,
        protein: number,
        fat: number,
        calories: number,
        sugar: number
    }
}