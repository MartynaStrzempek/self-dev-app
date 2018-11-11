import * as MUTATIONS from '../mutationTypes';
import axios from 'axios';
export default {
  setLoginState({ commit }, payload) {
    commit(MUTATIONS.SET_LOGIN_STATE, payload);
  },
  registerUser({ commit }, payload) {
    axios
      .post(`http://localhost:8080/user`, { ...payload })
      .then(response => commit(MUTATIONS.SET_USER_ID, response.data.id))
      .catch(error => console.log(error))
  },
  login({ commit }, payload) {
    axios
      .post("http://localhost:8080/login", { ...payload })
      .then(response => {
        console.log("login", response.data);
        // commit(MUTATIONS.SET_TOKEN, response.data.token);
        localStorage.setItem('token', response.data.token);
        // console.log("local", localStorage.getItem('token'))
        commit(MUTATIONS.SET_USER_ID, response.data.userId);
      })
      .then(() => {
        commit(MUTATIONS.SET_LOGIN_STATE, true);
        commit(MUTATIONS.SET_LOGIN_STATUS, false);
        setTimeout(() => this.$router.push('goals'), 500);
      })
      .catch(error => {
        console.log("err", error);
        commit(MUTATIONS.SET_LOGIN_STATUS, true);
      });
  }
}
