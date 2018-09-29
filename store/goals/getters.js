export default {
  getGoals: state => state.goals,
  getCurrentGoalId: state => state.currentGoalId,
  getTargetGoal: state => id => state.goals.filter(goal => goal.id === id)[0],
  getPresentResult: state => (goalId, resultId) => {
    let goal = state.goals.filter(goal => goal.id === goalId)[0];
    let result = goal.results.filter(result => result.id === resultId)[0];
    if (result) return result.status;
    else return "";
  },
  getPresentScore: state => id => state.goals.filter(goal => goal.id === id)[0].presentScore,
  getTargetNote: state => (goalId, resultId) => {
    let goal = state.goals.filter(goal => goal.id === goalId)[0];
    let result = goal.results.filter(result => result.id === resultId)[0];
    if (result && result.note) return result.note;
    else return null;
  }
}
