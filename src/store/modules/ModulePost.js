/* eslint-disable no-debugger */
import { PostsService } from "../../services/PostApi";

export const modulePost = {
  state: () => ({
    posts: [],
  }),
  actions: {
    async GET_POSTS(context) {
      const response = await PostsService.getPosts();
      const posts = response.data.slice(0, 20);
      context.commit("SET_POSTS", posts);
    },
    async CREATE_POST(context, payload) {
      const { data } = await PostsService.createPost(payload);
      context.commit("ADD_POST", data);
    },
    async EDIT_POST(context, payload) {
      const { data } = await PostsService.updatePost(payload);
      context.commit("UPDATE_POST", data);
    },
    async DELETE_POST(context, id) {
      await PostsService.removePost(id);
      context.commit("REMOVE_POST", id);
    },
  },
  mutations: {
    SET_POSTS(state, payload) {
      state.posts = payload;
    },
    ADD_POST(state, payload) {
      state.posts.unshift(payload);
    },
    REMOVE_POST(state, id) {
      state.posts = state.posts.filter((p) => p.id !== id);
    },
    UPDATE_POST(state, data) {
      const postIndex = state.posts.findIndex(
        (p) => p.id === parseInt(data.id)
      );
      state.posts[postIndex] = data;
    },
  },
  getters: {
    getAllPosts(state) {
      return state.posts;
    },
  },
};
