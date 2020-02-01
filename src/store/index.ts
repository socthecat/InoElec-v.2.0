import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from '../reducers'
import { cards } from '../actions'
const { fetchItems } = cards

const store = createStore(
    reducers,
    applyMiddleware(thunk)
  )
if (store.getState().cards.length === 0) {
  store.dispatch<any>(fetchItems())
}
//store.dispatch<any>(fetchItems())
export default store