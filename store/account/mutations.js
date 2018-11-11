import Vue from 'vue';

export default {
  setLoginState(state, payload) {
    Vue.set(state, "isLogedIn", payload);
  },
  setUserId(state, userId) {
    Vue.set(state, "userId", userId);
  },
  setToken(state, token) {
    Vue.set(state, "token", token);
  },
  setLoginStatus(state, status) {
    Vue.set(state, "loginFailure", status);
  }
}
