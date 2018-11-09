import * as MUTATIONS from '../mutationTypes';
import * as ACTIONS from '../actionTypes';
import axios from 'axios';
import { setGoalIdsArray } from '../../api/setGoalIdsArray/setGoalIdsArray';
import store from '../../store';

export default {
  setCurrentGoalId({ commit }, id) {
    commit(MUTATIONS.SET_CURRENT_GOAL_ID, id);
  },
  async addGoal({ commit, dispatch }, goal) {
    const userId = store().getters["getUserId"];
    await axios
      .post(`http://localhost:8080/user/${userId}/goal`, {
        description: goal.reward,
        score: goal.scoreForReward,
        goalName: goal.goalName,
        subgoalName: goal.subGoalName
      })
      .then(response => {
        dispatch(ACTIONS.FETCH_GOALS, { userId });
        console.log("add goal", response.data);
        return response.data.id;
      })
      .then((lastGoalId) => {
        // const goals = store().getters["getGoals"];
        // const lastGoalId = goals[goal.length - 1].id;
        commit(MUTATIONS.SET_CURRENT_GOAL_ID, lastGoalId);
      })
      .catch(error => console.log(error))
  },
  async editGoal({ commit }, payload) {
    // commit(MUTATIONS.EDIT_GOAL, editedGoal);
  },
  async setStatus({ dispatch }, payload) {
    const userId = store().getters["getUserId"],
      goalId = payload.goalId;

    await axios
      .post(`http://localhost:8080/user/${userId}/goal/${goalId}/result`, {
        status: payload.status,
        date: payload.resultId
      })
      .then(response => {
        dispatch(ACTIONS.FETCH_GOALS, { userId });
        console.log("result", response.data);
      })
      .catch(error => console.log(error))
  },
  setNote({ commit }, payload) {
    commit(MUTATIONS.SET_NOTE, payload);
  },
  // setPresentScore({ commit }, payload) {
  //   commit(MUTATIONS.SET_PRESENT_SCORE, payload);
  // },
  async fetchGoals({ commit }, payload) {
    await axios
      .get(`http://localhost:8080/user/${payload.userId}/goals`)
      .then(data => {
        let goals = data.data;
        console.log("fetch goals", goals);
        if (payload.isFirstFetch) commit(MUTATIONS.SET_CURRENT_GOAL_ID, goals[0].id);
        commit(MUTATIONS.SET_GOAL_IDS_ARRAY, setGoalIdsArray(goals));
        commit(MUTATIONS.FETCH_GOALS, goals);
      })
      .catch(error => console.log(error));
  },
  fetchPrise({ commit }, goals) {
    goals.map(goal => {
      let priseId = goal.PriseId;
      axios
        .get(`http://localhost:8080/prises/${priseId}`)
        .then (data => commit(MUTATIONS.FETCH_PRISE, { ...data.data, goalId: goal.id }))
        .catch(error => console.log(error))
    });
  }
}
