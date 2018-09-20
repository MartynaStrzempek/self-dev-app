import Vue from 'vue';

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
      results: []
    });
    Vue.set(state, "currentGoalId", state.goals[state.goals.length - 1].id);
  },
  editGoal(state, payload) {
    const { editedGoalId, editedGoal } = payload;
    state.goals.splice(editedGoalId, 1, { ...editedGoal, id: editedGoalId, results: [] });
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
  }
}
