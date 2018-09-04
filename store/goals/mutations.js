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
  }
}
