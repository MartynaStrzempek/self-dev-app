import Vue from 'vue';

export default {
  setLoginState(state, payload) {
    Vue.set(state, "isLogedIn", payload);
  },
  setUserId(state, userId) {
    Vue.set(state, "userId", userId);
  },
  fetchUsers(state, users) {
    Vue.set(state, "users", users);
  }
}
