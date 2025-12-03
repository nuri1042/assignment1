import { useCallback, useEffect, useRef, useState } from "react";
import { getPosts, type PostType } from "../apis/scrollApi";

export const useInfiniteScroll = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const [list, setList] = useState<PostType[]>([]);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  const loadData = useCallback(async () => {
    if (loading || !hasMore) return;

    setLoading(true);

    try {
      const data = await getPosts(page);

      if (data.length === 0) {
        setHasMore(false);
      } else {
        setList((prev) => [...prev, ...data]);
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.error("데이터 로드 실패:", error);
    } finally {
      setLoading(false);
    }
  }, [loading, page, hasMore]);

  // IntersectionObserver
  useEffect(() => {
    if (!bottomRef.current || !hasMore || loading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading && hasMore) {
          loadData();
        }
      },
      {
        threshold: 0,
        rootMargin: "100px",
      }
    );

    observer.observe(bottomRef.current);

    return () => observer.disconnect();
  }, [hasMore, loading]);

  return { list, loading, bottomRef, hasMore };
};
