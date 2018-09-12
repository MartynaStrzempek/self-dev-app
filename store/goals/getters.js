export default {
  getGoals: state => state.goals,
  getCurrentGoalId: state => state.currentGoalId,
  getTargetGoal: state => id => state.goals.filter(goal => goal.id === id),
}
