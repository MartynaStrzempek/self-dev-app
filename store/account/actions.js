import * as MUTATIONS from '../mutationTypes';
export default {
  setLoginState({ commit }, payload) {
    commit(MUTATIONS.SET_LOGIN_STATE, payload);
  },
  addUser({ commit }, payload) {
    commit(MUTATIONS.ADD_USER, payload);
  }
}
