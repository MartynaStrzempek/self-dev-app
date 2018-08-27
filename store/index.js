import Vuex from 'vuex';
import goals from "./goals";

const createStore = () => {
  return new Vuex.Store({
    modules: {
      goals
    }
  })
};

export default createStore
