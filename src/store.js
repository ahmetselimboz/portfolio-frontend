
import Vuex from "vuex";
import VuexPersister from "vuex-persister";
import SecureLS from "secure-ls";
const SecureLocalStorage = new SecureLS({ isCompression: false });

const vuexPersister = new VuexPersister({
  storage: {
    getItem: (key) => SecureLocalStorage.get(key),
    setItem: (key, value) => SecureLocalStorage.set(key, value),
    removeItem: (key) => SecureLocalStorage.remove(key),
    length: SecureLocalStorage.getAllKeys().length,
    clear: () => SecureLocalStorage.clear(),
    key: (key) => null,
  },
});

// Create a new store instance.
export default new Vuex.Store({
  state: {
    loading: true,
    lang: "en"
  },
  mutations: {
    setLoading(state, status) {
      state.loading = status;
    },
    setLang(state, lang){
      state.lang = lang
      SecureLocalStorage.set('lang', lang);
    }
  },
  actions: {
    setLoading({ commit }, status) {
      commit("setLoading", status);
    },
    updateLang({ commit }, lang) {
      commit("setLang", lang);
    }
  },
  getters: {
    isLoading: (state) => state.loading,
    Lang: (state)=> state.lang
  },
  plugins: [vuexPersister.persist],
});
