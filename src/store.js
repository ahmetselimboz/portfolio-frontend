import { createApp } from "vue";
import Vuex from "vuex";

// Create a new store instance.
export default new Vuex.Store({
  state: {
    loading: true
  },
  mutations: {
    setLoading(state, status) {
      state.loading = status;
    }
   
  },
  actions: {
    setLoading({ commit }, status) {
      commit('setLoading', status);
    } 
  },
  getters: {
    isLoading: state => state.loading
  },
});
