import { axiosInstance } from '../config/axiosinstence'

export const getMaelsRequest = () => {
    return axiosInstance.get('foods')
}

export const getBasketRequest = () => {
    return axiosInstance.get('basket')
}
export const addToBasketRequest = (newItem) => {
    return axiosInstance.post(`foods/${newItem.id}/addToBasket`)
}

export const updateBasketItemRequest = (id, amount) => {
    return axiosInstance.put(`basketitem/${id}/update`, { amount })
}

export const deleteBasketItemRequest = (id) => {
    return axiosInstance.delete(`basketitem/${id}/delete`)
}

export const submitOrderRequest = (orderData) => {
    return axiosInstance.post(
        `https://jsonplaceholder.typicode.com/posts`,
        orderData
    )
}
