import update from 'immutability-helper'

import { cards } from '../constants'

interface IState {
  title: string
  text: string
  id: number
}

const initialState: any = []

export default (state = initialState, action: any) => {
  switch (action.type) {
    case cards.FETCH_ITEMS_SUCCESS:
      const arr = []
      for (let i = 0; i < action.payload.length; i++) {
        arr.push(
          {
            title: action.payload[i].name,
            text: action.payload[i].model + ', ' + action.payload[i].manufacturer,
            id: i
          }
        )
      }
      return update(state, { $push: arr })
    case cards.FETCH_ITEMS_ERROR:
      console.log('Failed to fetch items :(')
      return state
    case cards.ADD_ITEM:
      return update(state, { $push: [{
        title: action.payload.title,
        text: action.payload.text,
        id: action.payload.id
      }]
      })
    case cards.EDIT_ITEM:
      console.log('EDit Item')
      const getIndex = state.findIndex((card: IState) => card.id === action.payload.id)
      return update(state, { [getIndex]: {$set: {
        title: action.payload.title,
        text: action.payload.text,
        id: action.payload.id
      }}})
    case cards.DELETE_ITEM:
      const getIndex2 = state.findIndex((card: IState) => card.id === action.payload.id)
      console.log('index', getIndex2)
      return update(state, {$splice: [[getIndex2, 1]] })
    default:
      return state
    }
}