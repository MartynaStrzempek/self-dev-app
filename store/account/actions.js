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
  fetchUsers({ commit }) {
    axios
      .get("http://localhost:8080/users")
      .then(response => {
        console.log(response.data)
        commit(MUTATIONS.FETCH_USERS, response.data)
      })
      .catch(error => console.log(error))
  }
}
