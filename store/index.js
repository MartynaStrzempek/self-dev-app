import Vuex from 'vuex';
import exampleModule from "./exampleModule";

const createStore = () => {
  return new Vuex.Store({
    modules: {
      exampleModule
    }
  })
};

export default createStore
