import { useEffect } from "react";
import "./App.css";
import AlertBanner from "./components/AlertBanner";
import PagingInfo from "./components/PagingInfo";
import PostList from "./components/PostList";
import Spinner from "./components/Spinner";
import { useAlert } from "./hooks/useAlert";
import { useInfiniteScroll } from "./hooks/useInfiniteScroll";
import { usePostStore } from "./store/postStore";

function App() {
  const { list, loading, bottomRef, hasMore } = useInfiniteScroll();
  const {alert, showAlert,hideAlert} = useAlert();
  const {error, setError} = usePostStore();

  useEffect(() => {
    if (error) {
      showAlert(error, "error");
      setError(null); // 다시 alert가 중복되지 않도록 상태 초기화
    }
  }, [error]);

  return (
    <div className="w-full h-[90dvh] flex flex-col">
      {alert && (
        <AlertBanner
          message={alert.message}
          type={alert.type}
          onClose={hideAlert}
        />
      )}
      {/* 상단 고정 페이징 영역 */}
      <div className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 shadow z-10">
        <div className="mx-auto w-full max-w-[480px] h-full flex justify-center items-center">
          <PagingInfo />
        </div>
      </div>

      {/* 스크롤 가능한 메인 리스트 영역 (상단 64px 높이만큼 아래로 밀기) */}
      <div className="flex-1 overflow-y-auto mt-16">
        <div className="mx-auto w-full max-w-[480px]">
          <PostList list={list} />

          {!hasMore && list.length > 0 && (
            <div className="text-center py-8 text-gray-500">
              더 이상 불러올 데이터가 없습니다
            </div>
          )}

          <div ref={bottomRef} className="h-px" />
        </div>
      </div>
      {loading && (
        <div className="flex justify-center items-center py-8">
          <Spinner />
        </div>
      )}
    </div>
  );
}

export default App;
