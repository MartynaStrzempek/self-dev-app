import Vuex from 'vuex';
import goals from "./goals";
import modals from './modals';

const createStore = () => {
  return new Vuex.Store({
    modules: {
      goals,
      modals
    }
  })
};

export default createStore
