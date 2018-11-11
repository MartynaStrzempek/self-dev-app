import Vue from 'vue';
import { countPoints } from "../../api/countPoints/countPoints";

export default {
  setCurrentGoalId(state, id) {
    Vue.set(state, "currentGoalId", id)
  },
  setPresentScore(state, goalId) {
   setTimeout(() => {
     let prise = state.prises.find(prise => prise.goalId === goalId);
     let goal = state.goals.find(goal => goal.id === goalId);
     // console.log("state", state.goals, goalId, goal)
     Vue.set(prise, "presentScore", countPoints(goal.Results));
   }, 100)
  },
  fetchGoals(state, goals) {
    Vue.set(state, "goals", goals);
  },
  setGoalIdsArray(state, goalIdsArray) {
    Vue.set(state, "goalIdsArray", goalIdsArray);
  },
  fetchPrise(state, prise) {
    state.prises.push(prise);
  },
  clearState(state) {
    Vue.set(state, "currentGoalId", null);
    Vue.set(state, "goalIdsArray", []);
    Vue.set(state, "prises", []);
    Vue.set(state, "goals", []);
  }
}
