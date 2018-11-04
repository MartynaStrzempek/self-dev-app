export default {
  getGoals: state => state.goals,
  getCurrentGoalId: state => state.currentGoalId,
  getTargetGoal: state => id => state.goals.find(goal => goal.id === id),
  getPresentResult: state => (goalId, resultId) => {
    let goal = state.goals.find(goal => goal.id === goalId);
    let result = goal.results.find(result => result.id === resultId);
    if (result) return result.status;
    else return "";
  },
  getPresentScore: state => id => state.goals.find(goal => goal.id === id).presentScore,
  getTargetNote: state => (goalId, resultId) => {
    let goal = state.goals.find(goal => goal.id === goalId);
    let result = goal.Results.find(result => result.id === resultId);
    if (result && result.note) return result.note;
    else return null;
  },
  getGoalIdsArray: state => state.goalIdsArray
}
