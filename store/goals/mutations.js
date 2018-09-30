import Vue from 'vue';
import { countPoints } from "../../api/countPoints/countPoints";

export default {
  setCurrentGoalId(state, id) {
    Vue.set(state, "currentGoalId", id)
  },
  addGoal(state, goal) {
    state.goals.push({
      id: state.goals[state.goals.length - 1].id + 1,
      goalName: goal.goalName,
      subGoalName: goal.subGoalName,
      reward: goal.reward,
      scoreForReward: goal.scoreForReward,
      presentScore: 0,
      results: []
    });
    Vue.set(state, "currentGoalId", state.goals[state.goals.length - 1].id);
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
  setNote(state, payload) {
    const { goalId, resultId, note } = payload;
    let goal = state.goals.filter(goal => goal.id === goalId)[0];
    let result = goal.results.filter(result => result.id === resultId)[0];
    Vue.set(result, "note", note);
  },
  setPresentScore(state, goalId) {
    let goal = state.goals.filter(goal => goal.id === goalId)[0];
    Vue.set(goal, "presentScore", countPoints(goal.results));
  }
}
