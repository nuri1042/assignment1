interface PostItemProps {
  item: {
    id: number;
    title: string;
    body: string;
  };
}

const PostItem = ({ item }: PostItemProps) => {
  return (
    <div className="p-4 border rounded-lg shadow-sm bg-white">
      <h3 className="font-semibold text-lg">{item.title}</h3>
      <p className="text-gray-600 mt-1">{item.body}</p>
    </div>
  );
};

export default PostItem;
