import Vuex from 'vuex';
import goals from "./goals";
import modals from './modals';
import account from './account';

const createStore = () => {
  return new Vuex.Store({
    modules: {
      goals,
      modals,
      account
    }
  })
};

export default createStore
