import { request } from "./request";

export type Post = {
  id: number;
  title: string;
};

export const fetchPosts = async () => {
  const req = await request<Post[]>({
    method: "GET",
    url: "https://jsonplaceholder.typicode.com/posts",
  });
  return req;
};

export const addPost = async (payload: Post) => {
  const req = await request<Post[]>({
    method: "POST",
    url: "https://jsonplaceholder.typicode.com/postss",
    data: JSON.stringify(payload)
  });
  return req;
};