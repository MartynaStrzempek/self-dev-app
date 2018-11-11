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
    // console.log("local", localStorage.getItem('token'))
    await axios
      .post(`http://localhost:8080/user/${userId}/goal`, {
        description: goal.reward,
        score: goal.scoreForReward,
        goalName: goal.goalName,
        subgoalName: goal.subGoalName
      }, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then(response => {
        let lastGoalId = response.data.id;
        dispatch(ACTIONS.FETCH_GOALS, { userId });
        return lastGoalId;
      })
      .then(lastGoalId => commit(MUTATIONS.SET_CURRENT_GOAL_ID, lastGoalId))
      .catch(error => console.log(error))
  },
  async editGoal({ commit }, payload) {
    // commit(MUTATIONS.EDIT_GOAL, editedGoal);
  },
  async setResult({ dispatch }, payload) {
    const userId = store().getters["getUserId"],
      goalId = payload.goalId;

    await axios
      .post(`http://localhost:8080/user/${userId}/goal/${goalId}/result`, {
        status: payload.status,
        date: payload.resultDate,
        note: payload.note
      }, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then(() => dispatch(ACTIONS.FETCH_GOALS, { userId: userId, isFirstFetch: false, goalId: goalId }))
      .catch(error => console.log(error))
  },
  setPresentScore({ commit }, payload) {
    commit(MUTATIONS.SET_PRESENT_SCORE, payload);
  },
  async fetchGoals({ commit, dispatch }, payload) {
    await axios
      .get(`http://localhost:8080/user/${payload.userId}/goals`, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then(data => {
        let goals = data.data;
        commit(MUTATIONS.FETCH_GOALS, goals);
        return goals;
      })
      .then(goals => {
        if (payload.isFirstFetch) commit(MUTATIONS.SET_CURRENT_GOAL_ID, goals[0].id);
        else dispatch(ACTIONS.SET_PRESENT_SCORE, payload.goalId);
        commit(MUTATIONS.SET_GOAL_IDS_ARRAY, setGoalIdsArray(goals));
        console.log(goals)
        return goals;
      })
      .then(goals => dispatch(ACTIONS.FETCH_PRISE, goals))
      .catch(error => console.log(error));
  },
  fetchPrise({ commit }, goals) {
    goals.map(goal => {
      let priseId = goal.PriseId;
      axios
        .get(`http://localhost:8080/prises/${priseId}`, {
          headers: {
            "Authorization": `Bearer ${localStorage.getItem('token')}`
          }
        })
        .then (data => {
          // console.log(data.data)
          commit(MUTATIONS.FETCH_PRISE, { ...data.data, goalId: goal.id })
        })
        .catch(error => console.log(error))
    });
  },
  updateResult({ dispatch }, payload) {
    // console.log("update", payload)
    const { resultId, goalId, updatedResult } = payload;
    const userId = store().getters["getUserId"];
    axios
      .put(`http://localhost:8080/result/${resultId}`, {
        ...updatedResult
      }, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then(() => dispatch(ACTIONS.FETCH_GOALS, { userId: userId, isFirstFetch: false, goalId: goalId }))
      .catch(error => console.log(error))
  },
  updateGoal({ dispatch }, payload) {
    const userId = store().getters["getUserId"];
    const { goalId, priseId, editedGoal } = payload;
    axios
      .put(`http://localhost:8080/user/${userId}/goal/${goalId}`, {
        ...editedGoal, priseId
      }, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then((response) => {
        // console.log(response);
        dispatch(ACTIONS.FETCH_GOALS, { userId: userId, isFirstFetch: false, goalId: goalId })
      })
      .catch(error => console.log(error))
  },
  deleteGoal({ commit, dispatch }, payload) {
    const userId = store().getters["getUserId"];
    axios
      .delete(`http://localhost:8080/goals/${payload.goalId}`, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then(() => {
        dispatch(ACTIONS.FETCH_GOALS, { userId: userId, isFirstFetch: false, goalId: payload.goalId })
        commit(MUTATIONS.SET_CURRENT_GOAL_ID, payload.goalIndex);
      })
      .catch(error => console.log(error))
  }
}
