import Vue from 'vue';

export default {
  setLoginState(state, payload) {
    Vue.set(state, "isLogedIn", payload);
  },
  setUser(state, user) {
    Vue.set(state, "user", user);
  },
  setLoginStatus(state, status) {
    Vue.set(state, "loginFailure", status);
  }
}
