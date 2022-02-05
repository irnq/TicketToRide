import Vue from 'vue';
import Vuex from 'vuex';
import user from './user/user';
import railway from './railway/railway';
import game from './game/game';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    user,
    railway,
    game,
  },
});
