import * as MUTATIONS from '../mutationTypes';
import axios from 'axios';
export default {
  setCurrentGoalId({ commit }, id) {
    commit(MUTATIONS.SET_CURRENT_GOAL_ID, id);
  },
  addGoal({ commit }, goal) {
    commit(MUTATIONS.ADD_GOAL, goal);
  },
  editGoal({ commit }, editedGoal) {
    commit(MUTATIONS.EDIT_GOAL, editedGoal);
  },
  setStatus({ commit }, payload) {
    commit(MUTATIONS.SET_STATUS, payload);
  },
  setNote({ commit }, payload) {
    commit(MUTATIONS.SET_NOTE, payload);
  },
  setPresentScore({ commit }, payload) {
    commit(MUTATIONS.SET_PRESENT_SCORE, payload);
  },
  async fetchGoals({ commit }, userId) {
    let goals;
    await axios
      .get(`http://localhost:8080/user/${userId}/goals`)
      .then(data => goals = data.data);
    console.log(goals)
    commit(MUTATIONS.FETCH_GOALS, goals);
  }
}
