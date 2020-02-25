import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas'
import reducers from '../reducers'
import { cards } from '../actions'
const { fetchItems } = cards

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
  )

sagaMiddleware.run(rootSaga)

if (store.getState().cards.length === 0) {
  store.dispatch<any>(fetchItems())
}
//store.dispatch<any>(fetchItems())
export default store