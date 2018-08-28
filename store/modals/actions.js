import * as MUTATIONS from "../../store/mutationTypes";
export default {
  openAddingModal({ commit }) {
    commit(MUTATIONS.OPEN_ADDING_MODAL);
  },
  closeAddingModal({ commit }) {
    commit(MUTATIONS.CLOSE_ADDING_MODAL);
  }
}
