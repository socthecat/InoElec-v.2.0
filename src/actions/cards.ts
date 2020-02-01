import { cards } from '../constants'
import starships from '../services/services'

interface IState {
    title: string
    text: string
    id: number
}

function fetchItems() {
    return function (dispatch: any) {
        return starships.get('').then((sh: { data: { results: string | any[] } }) => {
            const arr = []
            for (let i = 0; i < sh.data.results.length; i++) {
                arr.push(
                    {
                        title: sh.data.results[i].name,
                        text: sh.data.results[i].model + ', ' + sh.data.results[i].manufacturer,
                        id: i
                    }
                )
            }
            return dispatch(getItems(arr))
        })
    }
}
const getItems = (payload: any) => {
    return{
        type: cards.GET_ITEMS,
        payload
    }
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
    getItems,
    deleteItem,
    fetchItems
}