import Vue from 'vue';
import { countPoints } from "../../api/countPoints/countPoints";

export default {
  setCurrentGoalId(state, id) {
    Vue.set(state, "currentGoalId", id)
  },
  editGoal(state, payload) {
    const { editedGoalId, editedGoal } = payload;
    const goal = state.goals.filter(goal => goal.id === editedGoalId)[0];
    state.goals.splice(editedGoalId, 1, { ...editedGoal, id: editedGoalId, results: goal.results, presentScore: goal.presentScore });
    // let goal = state.goals.filter(goal => goal.id === editedGoalId)[0];
    // goal = { ...goal, ...editedGoal };
  },
  setStatus(state, payload) {
    const { goalId, resultId, status } = payload;
    let goal = state.goals.filter(goal => goal.id === goalId)[0];
    let result = goal.results.filter(result => result.id === resultId)[0];
    if (result) {
      result.status = status;
    } else {
      goal.results.push({
        id: resultId,
        status: status
      })
    }
  },
  setPresentScore(state, goalId) {
   setTimeout(() => {
     let prise = state.prises.find(prise => prise.goalId === goalId);
     let goal = state.goals.find(goal => goal.id === goalId);
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
  }
}
