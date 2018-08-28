import Vue from 'vue';
export default {
  openAddingModal(state) {
    Vue.set(state, "addingModalVisibility", true);
  },
  closeAddingModal(state) {
    Vue.set(state, "addingModalVisibility", false);
  }
}
