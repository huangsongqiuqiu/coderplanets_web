// import R from 'ramda'

import { makeDebugger, $solver, asyncErr, ERR } from '../../utils'
import SR71 from '../../utils/network/sr71'

// import S from './schema'

const sr71$ = new SR71()
let sub$ = null

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:AvatarAdder')
/* eslint-enable no-unused-vars */

let store = null

export function onSearch(e) {
  if (e.key === 'Enter') {
    debug('store.searchValue: ', store.searchValue)
    store.markState({ searching: true, searchValue: e.target.value })

    setTimeout(() => {
      store.markState({ searching: false })
    }, 4000)
  }
}

export function onConfirm() {
  debug('onConfirm: ', store.searchValue)
}

export const inputOnChange = e =>
  store.markState({ searchValue: e.target.value })

export const onPopoverVisible = visable => {
  if (!visable) {
    store.markState({
      searchValue: '',
      searching: false,
    })
  }
  store.markState({ popoverVisiable: visable })
}
// ###############################
// Data & Error handlers
// ###############################

const DataSolver = []
const ErrSolver = [
  {
    match: asyncErr(ERR.CRAPHQL),
    action: ({ details }) => {
      debug('ERR.CRAPHQL -->', details)
    },
  },
  {
    match: asyncErr(ERR.TIMEOUT),
    action: ({ details }) => {
      debug('ERR.TIMEOUT -->', details)
    },
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: ({ details }) => {
      debug('ERR.NETWORK -->', details)
    },
  },
]

export function init(_store) {
  if (store) return false
  store = _store

  debug(store)
  if (sub$) sub$.unsubscribe()
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
}
