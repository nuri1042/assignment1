import axios from "axios";

export interface PostType {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const getPosts = async (page: number): Promise<PostType[]> => {
  const LIMIT = 10;
  const { data } = await axios.get<PostType[]>(
    "https://jsonplaceholder.typicode.com/posts",
    {
      params: {
        _limit: LIMIT,
        _page: page,
      },
    }
  );
  return data;
};
