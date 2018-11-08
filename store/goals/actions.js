import * as MUTATIONS from '../mutationTypes';
import axios from 'axios';
import { setGoalIdsArray } from '../../api/setGoalIdsArray/setGoalIdsArray';
import store from '../../store';

export default {
  setCurrentGoalId({ commit }, id) {
    commit(MUTATIONS.SET_CURRENT_GOAL_ID, id);
  },
  async addGoal({ commit }, goal) {
    const userId = store().getters["getUserId"];
    await axios
      .post(`http://localhost:8080/user/${userId}/goal`, {
        description: goal.reward,
        score: goal.scoreForReward,
        goalName: goal.goalName,
        subgoalName: goal.subGoalName
      })
      .then(res => console.log(res))
      .catch(error => console.log(error))
  },
  async editGoal({ commit }, payload) {
    // commit(MUTATIONS.EDIT_GOAL, editedGoal);
  },
  async setStatus({ commit }, payload) {
    // commit(MUTATIONS.SET_STATUS, payload);
    const userId = store().getters["getUserId"];
    // console.log("st", payload)
    const goalId = payload.goalId;
    await axios
      .post(`http://localhost:8080/user/${userId}/goal/${goalId}/result`, {
        status: payload.status,
        date: payload.resultId
      })
      .then(res => {
        axios
          .get(`http://localhost:8080/user/${userId}/goals`)
          .then((res) => console.log(res))
          .catch(err => console.log(err))
        console.log(res)
      })
      .catch(error => console.log(error))
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
