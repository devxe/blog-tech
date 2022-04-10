import { Posts } from "./../modules/posts/types";
import axios from "axios";

const getPosts = async () => {
  const response = await axios.get<Posts>("/api/posts");
  return response.data;
};

export default getPosts;
