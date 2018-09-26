import * as MUTATIONS from '../mutationTypes';
export default {
  setLoginState({ commit }, payload) {
    commit(MUTATIONS.SET_LOGIN_STATE, payload);
  }
}
