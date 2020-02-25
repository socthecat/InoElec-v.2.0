import { cards } from '../constants'

interface IState {
    title: string
    text: string
    id: number
}

const fetchItems = () => {
     return { type: cards.FETCH_ITEMS }
}
const addItem = (payload: IState) => {
    return{
        type: cards.ADD_ITEM,
        payload
    }
}
const deleteItem = (payload: IState[]) => {
    return{
        type: cards.DELETE_ITEM,
        payload
    }
}
const editItem = (payload: IState[]) => {
    return{
        type: cards.EDIT_ITEM,
        payload
    }
}
export default {
    addItem,
    editItem,
    deleteItem,
    fetchItems
}