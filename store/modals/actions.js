import * as MUTATIONS from "../../store/mutationTypes";
export default {
  openModal({ commit }) {
    commit(MUTATIONS.OPEN_MODAL);
  },
  closeModal({ commit }) {
    commit(MUTATIONS.CLOSE_MODAL);
  },
  openSetResultModal({ commit }) {
    commit(MUTATIONS.OPEN_SET_RESULT_MODAL);
  },
  closeSetResultModal({ commit }) {
    commit(MUTATIONS.CLOSE_SET_RESULT_MODAL);
  },
  openNoteModal({ commit }) {
      commit(MUTATIONS.OPEN_NOTE_MODAL);
    },
  closeNoteModal({ commit }) {
    commit(MUTATIONS.CLOSE_NOTE_MODAL);
  },
}
