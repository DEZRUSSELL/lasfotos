import Vue from "vue";
const state = {
  searchParam: "",
  searchResults: [],
};
const getters = {
  getSearchResults: (state) => state.searchResults,
  getSearchParam: (state) => state.searchParam,
};
const actions = {
  async fetchSearchResult({ commit }, searchItem) {
    const res = await Vue.axios.get(
      `https://api.unsplash.com/search/photos?per_page=30&query=${searchItem}&client_id=L6Sokfj1K6c5cC2ajG61b1dnBrt4BTC45PK4fiT0d6I`
    );
    const results = res.data.results;
    commit("updateSearchResults", results);
  },
  async fetchSearchItem({ commit }, item) {
    commit("updateSearchItem", item);
  },
};
const mutations = {
  updateSearchResults: (state, results) => {
    state.searchResults = results;
  },
  updateSearchItem: (state, item) => {
    state.searchParam = item;
  },
};
export default {
  state,
  getters,
  actions,
  mutations,
};
