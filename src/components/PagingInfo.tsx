import { usePostStore } from "../store/postStore";

const PagingInfo = () => {
  const { page, totalCount } = usePostStore();

  return (
    <div className="px-4 py-3">
      <div className="flex items-center text-sm gap-3">
        <div className="flex items-center">
          <span className="font-semibold text-gray-700">현재 페이지:</span>
          <span className="text-blue-700 px-3 font-medium">{page}</span>
        </div>
        <div className="flex items-center">
          <span className="font-semibold text-gray-700">총 데이터:</span>
          <span className="text-green-700 px-3 font-medium">
            {totalCount}개
          </span>
        </div>
      </div>
    </div>
  );
};

export default PagingInfo;
