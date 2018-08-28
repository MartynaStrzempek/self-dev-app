import * as MUTATIONS from '../mutationTypes';
export default {
  setCurrentGoalId({ commit }, id) {
    commit(MUTATIONS.SET_CURRENT_GOAL_ID, id)
    console.log("mut")
  }
}
