import "./App.css";
import { useInfiniteScroll } from "./hooks/useInfiniteScroll";

function App() {
  const { list, loading, bottomRef, hasMore } = useInfiniteScroll();

  return (
    <div className="scroll-container relative mx-auto w-full max-w-[480px] h-dvh overflow-y-auto">
      scroll area
      {list?.map((item) => (
        <div key={item.id}>
          <div className="">{item.title}</div>
          <div>{item.body}</div>
        </div>
      ))}
      {loading && <p>로딩중</p>}
      {!hasMore && <p>더 불러올 데이터 없음</p>}
      {/* 관찰 대상 */}
      <div ref={bottomRef} style={{ height: "1px" }} />
    </div>
  );
}

export default App;
