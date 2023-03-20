import axios from "axios";
import { Post } from "interfaces";
import { axiosRequest } from "utils/axiosRequest";
const url = process.env.REACT_APP_BACKEND_URL;
const factories = {
  getPost: (data: Post) => {
    return axios({
      method: "get",
      url: `${url}posts?page=1&limit=20`,
      data: data,
    });
  },
  addPost: (data: Post) => {
    return axiosRequest({
      method: "post",
      url: `/posts/Create`,
      data: data,
    });
  },
  editPost: (id: string) => {
    return axiosRequest({
      method: "put",
      url: `/posts/${id}`,
    });
  },
  removePost: (id: string) => {
    return axiosRequest({
      method: "delete",
      url: `/posts/${id}`,
    });
  },
};
export default factories;
