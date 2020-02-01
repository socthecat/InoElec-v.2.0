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
    case cards.GET_ITEMS:
      return update(state, { $set: action.payload })
    case cards.ADD_ITEM:
      return update(state, { $push: [{
        title: action.payload.title,
        text: action.payload.text,
        id: action.payload.id
      }]
      })
    case cards.EDIT_ITEM:
      const getIndex = state.map(function(e: IState) { return e.id; }).indexOf(action.payload.id)
      return update(state, { [getIndex]: {$set: {
        title: action.payload.title,
        text: action.payload.text,
        id: action.payload.id
      }}})
    case cards.DELETE_ITEM:
      const getIndex2 = state.map(function(e: IState) { return e.id; }).indexOf(action.payload.id)
      console.log('index', getIndex2)
      return update(state, {$splice: [[getIndex2, 1]] })
    default:
      return state
    }
}