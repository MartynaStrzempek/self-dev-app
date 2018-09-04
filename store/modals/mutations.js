import Vue from 'vue';
export default {
  openModal(state) {
    Vue.set(state, "isModalOpen", true);
  },
  closeModal(state) {
    Vue.set(state, "isModalOpen", false);
  }
}
