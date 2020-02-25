import { call, put } from 'redux-saga/effects'

import services from '../services/index'

import { cards } from '../constants'

function * getStarships () {
    try {
      const response = yield call(services.getStarships)
      yield put({ type: cards.FETCH_ITEMS_SUCCESS, payload: response })
    } catch (error) {
      yield put({ type: cards.FETCH_ITEMS_ERROR, payload: error })
    }
  }

export default { getStarships }