import { useEffect, useRef } from "react";
import { getPosts } from "../apis/scrollApi";
import { usePostStore } from "../store/postStore";

export const useInfiniteScroll = () => {
  const { loading, hasMore, list, loadPosts } = usePostStore();

  // 하단 감지용 요소 ref
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const target = bottomRef.current;
    if (!target) return;

    // 더 불러올 데이터가 없거나 OR 현재 로딩 중이면 Observer 등록 안 함
    if (!hasMore || loading) return;

    // IntersectionObserver 생성
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        // 화면에 보이고 + 로딩 중이 아니고 + 다음 데이터가 있을 때
        if (entry.isIntersecting && !loading && hasMore) {
          // API 호출 실행
          loadPosts(getPosts);

          // API를 한 번 호출한 직후 바로 관찰 해제 (중복 호출 방지)
          observer.unobserve(target);
        }
      },
      {
        // rootMargin으로 미리 감지
        rootMargin: "150px",
        threshold: 0,
      }
    );

    // 감지 시작
    observer.observe(target);

    // cleanup: Observer 해제
    return () => observer.disconnect();
  }, [
    hasMore,
    list.length, // 새 데이터가 들어왔을 때만 Observer를 재등록하기 위해 필요
  ]);

  return { list, loading, bottomRef, hasMore };
};
