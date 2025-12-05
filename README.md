# Assignment 2 - Infinite Scroll Post List (React + Zustand + TypeScript)

스크롤을 내릴 때 자동으로 다음 페이지 데이터를 불러오는 **무한 스크롤 (Infinite Scroll)** 기능을 구현한 React 프로젝트

`Intersection Observer API`를 활용한 스크롤 경험을 제공

---

## 프로젝트 실행 방법

1. 압축 파일의 내용을 원하는 위치에 압축 해제합니다.

2. 터미널(명령 프롬프트 또는 PowerShell)을 열고,
   압축을 해제한 프로젝트 폴더로 이동합니다.

   cd assignment1

3. 아래 명령어를 입력하여 필요한 패키지를 설치합니다.

   npm install

4. 설치가 완료되면 아래 명령어로 개발 서버를 실행합니다.

   npm run dev

5. 실행 후 브라우저에서 다음 주소로 접속합니다.

   http://localhost:5173


주의사항
- Node.js가 설치되어 있어야 합니다. (버전 18 이상 권장)
- 터미널에서 오류가 발생하면 다시 npm install 을 시도해 주세요.
- 실행 후 서버가 자동으로 열리지 않으면 주소를 직접 입력해 주세요.
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
