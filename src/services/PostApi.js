import axios from "axios";

export class PostsService {
  static async getPosts() {
    return await axios.get("https://jsonplaceholder.typicode.com/posts");
  }
  static async createPost(data) {
    return await axios.post(`https://jsonplaceholder.typicode.com/posts`, data);
  }
  static async updatePost(data) {
    return await axios.put(`https://jsonplaceholder.typicode.com/posts/${data.id}`, data);
  }
  static async removePost(id) {
    return await axios.delete(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
  }
}
