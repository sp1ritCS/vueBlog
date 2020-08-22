import Vue from "vue";
import Vuex from "vuex";

import { StoredPost } from "@/props/Blog";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: Array<StoredPost>()
  },
  getters: {
    getPostById: state => (id: string) => {
      return state.posts.find(post => post.id === id);
    }
  },
  mutations: {},
  actions: {
    async addPost({ state }, post: StoredPost) {
      state.posts.push(post);
    }
  },
  modules: {}
});
