import Vue from 'vue';
export default {
  openModal(state) {
    Vue.set(state, "isModalOpen", true);
  },
  closeModal(state) {
    Vue.set(state, "isModalOpen", false);
  },
  openSetResultModal(state) {
    Vue.set(state, "isSetResultModalOpen", true);
  },
  closeSetResultModal(state) {
    Vue.set(state, "isSetResultModalOpen", false);
  },
  openNoteModal(state) {
    Vue.set(state, "isNoteModalOpen", true);
  },
  closeNoteModal(state) {
    Vue.set(state, "isNoteModalOpen", false);
  },
}
