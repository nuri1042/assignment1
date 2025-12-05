# Assignment 2 - Infinite Scroll Post List (React + Zustand + TypeScript)

스크롤을 내릴 때 자동으로 다음 페이지 데이터를 불러오는 **무한 스크롤 (Infinite Scroll)** 기능을 구현한 React 프로젝트

`Intersection Observer API`를 활용한 스크롤 경험을 제공

---

## 주요 기능

### 1. 최초 페이지 진입
- 첫 렌더링 시 포스트 10개 자동 로드

### 2. 무한 스크롤
- 사용자가 스크롤 하단에 도달하면 자동으로 다음 10개 로드  
- `Intersection Observer API` 사용  
- 모든 데이터를 가져오면 추가 로딩 중단

### 3. 상태 관리 (Zustand)
- `page`, `totalCount`, `list` 등의 페이징 정보 전역 관리  
- `isLoading` / `hasMore` 플래그로 중복 호출 방지  
- 로딩 상태에 따라 스피너 출력

### 4. 사용자 경험
- API 오류 시 `toast` 안내 제공  
- 반응형 레이아웃으로 모바일 및 데스크톱 모두 동작

---

## 사용 기술

| Category | Tool/Library |
|-----------|---------------|
| Language | TypeScript ~5.9.3 (strict mode) |
| Framework | React 19.2.0 |
| State Management | Zustand 4.x |
| Build Tool | Vite |
| HTTP Client | Axios |
| Styling | Tailwind CSS |
| Quality Tools | ESLint + Prettier |

---

## 프로젝트 구조 
```
src/
├── apis/
│ └── scrollApi.ts 
├── components/
│ ├── PostList.tsx 
├── hooks/
│ └── useInfiniteScroll.ts 
├── store/
│ └── postStore.ts 
├── App.tsx
└── main.tsx
```

---
## 실행 방법

### 1. 패키지 설치
npm install

### 2. 개발 서버 실행
npm run dev

---
## 반응형 디자인

### 모바일 | 데스크톱

- Tailwind 기반 뷰포트 기준 레이아웃 구성
- max-width + w-full 조합으로 중앙 정렬 및 세로 스크롤 활성화
