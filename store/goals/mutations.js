import Vue from 'vue';
export default {
  setCurrentGoalId(state, id) {
    Vue.set(state, "currentGoalId", id)
  }
}
