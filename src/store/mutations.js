import * as types from './mutation-types'

export const mutations = {
  [types.SIGN_IN] (state, user_payload) {
    state.user = user_payload
  },
  [types.SIGN_OUT] (state) {
    state.user = {}
  },
  [types.SET_SMELLS] (state, smells_payload) {
    state.smells = smells_payload
  }
}
