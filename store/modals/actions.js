import * as MUTATIONS from "../../store/mutationTypes";
export default {
  openModal({ commit }) {
    commit(MUTATIONS.OPEN_MODAL);
  },
  closeModal({ commit }) {
    commit(MUTATIONS.CLOSE_MODAL);
  }
}
