export type productsCoreType = {
    _id: string,
    title: string,
    description?: string,
    price: number,
    discountPercentage: number,
    rating?: number,
    stock?: number,
    brand?: string,
    category?:{
        _id: string,
        name: string
    },
    thumbnail?: string,
    images?: string[]
}
