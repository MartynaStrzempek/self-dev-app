import Vuex from 'vuex';
import goals from "./goals";
import modals from './modals';
import account from './account';
import VuexPersist from 'vuex-persist';

const vuexLocalStorage = new VuexPersist({
  key: 'vuex',
  storage: window.localStorage
});

const createStore = () => {
  return new Vuex.Store({
    modules: {
      goals,
      modals,
      account
    },
    plugins: [vuexLocalStorage.plugin]
  })
};

export default createStore
