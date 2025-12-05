import PostItem from "./PostItem";

interface Post {
  id: number;
  title: string;
  body: string;
}

interface PostListProps {
  list: Post[];
}

const PostList = ({ list }: PostListProps) => {
  return (
    <div className="space-y-4">
      {list.map((item, idx) => (
        <PostItem key={`${item.id}-${idx}`} item={item} />
      ))}
    </div>
  );
};

export default PostList;
