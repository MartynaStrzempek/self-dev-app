import * as MUTATIONS from '../mutationTypes';
import axios from 'axios';
import { setGoalIdsArray } from "../../api/setGoalIdsArray/setGoalIdsArray";

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
      .then(data => {
        goals = data.data;
        commit(MUTATIONS.SET_CURRENT_GOAL_ID, goals[0].id);
        commit(MUTATIONS.SET_GOAL_IDS_ARRAY, setGoalIdsArray(goals));
      });
    commit(MUTATIONS.FETCH_GOALS, goals);
  },
  fetchPrise({ commit }, goals) {
    goals.map(goal => {
      let priseId = goal.PriseId;
      axios
        .get(`http://localhost:8080/prises/${priseId}`)
        .then (data => commit(MUTATIONS.FETCH_PRISE, { ...data.data, goalId: goal.id }))
    });
  }
}
