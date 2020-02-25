import { takeLatest, all } from 'redux-saga/effects'

import starshipsSaga from './starshipsSaga'

import { cards } from '../constants'

function * watchStarships () {
  yield all([
    takeLatest(cards.FETCH_ITEMS, starshipsSaga.getStarships)
  ])
}

export {
  watchStarships
}