import { create } from "zustand";

// 게시물 타입 정의
interface PostType {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PostDataState {
  loading: boolean; // 데이터 로딩 중 여부
  hasMore: boolean; // 추가로 불러올 데이터가 있는지 여부
  page: number; // 현재 페이지 번호
  totalCount: number; // 불러온 데이터 수
  list: PostType[]; // 게시물 목록


  error: string | null;          
  setError: (msg: string | null) => void;

  setLoading: (loading: boolean) => void; // 로딩 상태 변경
  setHasMore: (hasMore: boolean) => void; // 더보기 가능 여부 변경
  setPage: (page: number) => void; // 페이지 번호 변경
  setList: (list: PostType[]) => void; // 게시물 목록 변경
  resetPostData: () => void; // 모든 상태 초기화
  loadPosts: (getPosts: (page: number) => Promise<PostType[]>) => Promise<void>; // 게시물 로드 액션
}

export const usePostStore = create<PostDataState>()((set, get) => ({
  // 초기 상태 정의
  loading: false,
  hasMore: true,
  page: 0,
  totalCount: 0,
  list: [],

  error: null,

  setError: (msg) => set({ error: msg }),

  // 개별 상태 업데이트 함수들
  setLoading: (loading) => set({ loading }),
  setHasMore: (hasMore) => set({ hasMore }),
  setPage: (page) => set({ page }),
  setList: (list) => set({ list }),

  // 전체 상태 초기화 함수
  resetPostData: () =>
    set({
      loading: false,
      hasMore: true,
      page: 0,
      totalCount: 0,
      list: [],
    }),

  // 게시물 로드
  loadPosts: async (getPosts) => {
    const { loading, hasMore, page, list, setError } = get();

    // 이미 로딩 중이거나 더 이상 불러올 데이터가 없으면 종료
    if (loading || !hasMore) return;

    set({ loading: true });

    try {
      const data = await getPosts(page);

      // 데이터가 없으면 더 이상 페이지 없음
      if (data.length === 0) {
        set({ hasMore: false });
      } else {
        // 새 데이터 추가
        set({
          list: [...list, ...data],
          page: page + 1,
          totalCount: list.length + data.length,
        });

        if (data.length < 10) {
          set({ hasMore: false });
        }
      }
    } catch (error) {
      console.error("데이터 로드 실패:", error);
      setError("데이터를 불러오던 중 오류가 발생했습니다.");
    } finally {
      // 로딩 완료
      set({ loading: false });
    }
  },
}));
