import instance from ".";

export const getCategory = async () => {
    try {
        const {data } = await instance.get(`/category`)
        return data
    } catch (error) {
        console.log(error);
        
    }
}