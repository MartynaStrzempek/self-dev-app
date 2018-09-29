import Vue from 'vue';

export default {
  setLoginState(state, payload) {
    Vue.set(state, "isLogedIn", payload);
  },
  addUser(state, payload) {
    const lastId = state.users[state.users.length - 1].id;
    state.users.push({
      id: lastId + 1,
      login: payload.login,
      password: payload.password
    })
  }
}
