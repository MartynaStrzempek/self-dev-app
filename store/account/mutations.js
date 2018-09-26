import Vue from 'vue';

export default {
  setLoginState(state, payload) {
    Vue.set(state, "isLogedIn", payload);
  }
}
