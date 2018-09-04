import * as MUTATIONS from '../mutationTypes';
export default {
  setCurrentGoalId({ commit }, id) {
    commit(MUTATIONS.SET_CURRENT_GOAL_ID, id);
  },
  addGoal({ commit }, goal) {
    commit(MUTATIONS.ADD_GOAL, goal);
  },
  editGoal({ commit }, editedGoal) {
    commit(MUTATIONS.EDIT_GOAL, editedGoal);
  }
}
