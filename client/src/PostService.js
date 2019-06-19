import axios from "axios";

const url = "http://localhost:5000/api/posts/";

class PostService {
  static getPosts() {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await axios.get(url);
        resolve(
          data.map(post => ({
            ...post
          }))
        );
      } catch (err) {
        reject(err);
      }
    });
  }

  static insertPost(text) {
    return axios.post(url, { text });
  }

  static deletePost(id) {
    return axios.delete(`${url}${id}`);
  }
}

export default PostService;
