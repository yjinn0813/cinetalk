# cinetalk 🎬

<br>
<p align=center><img src="https://github.com/yjinn0813/cinetalk/blob/main/src/assets/logo.png" width="300"></p>
<br>
리뷰 중심의 영화 기록·공유 웹 애플리케이션 'cinetalk'입니다.
<br> 사용자가 영화에 대한 감상을 기록하고, 개인의 감상 이력을 아카이빙할 수 있도록 구현했습니다.  
<br> 또한 공유하기 기능을 통해 작성한 리뷰를 간편하게 공유할 수 있습니다.
<br>

## 1. 배포 주소

https://cinetalk.vercel.app/

https://github.com/yjinn0813/cinetalk
<br>
<br>

## 2. 프로젝트 소개

### 1차 개발 (Initial Release)

- **기간**: 2024.07.01 ~ 08.08

- **주요 작업**
  - Swiper를 활용한 메인 페이지 카드 슬라이드 및 박스오피스/광고 자동 슬라이드 구현
  - Redux를 이용한 로그인/로그아웃 및 전역 사용자 상태 관리
  - 회원가입 시 실시간 입력값 기반 유효성 검사 및 이용약관 동의 로직 구현
  - 리뷰 조회/삭제 기능 및 라이브러리(개인 기록) 페이지 연동
  - 영화진흥위원회 API를 활용한 영화 검색 기능 구현
  - 모바일 환경 대응 (리뷰 리스트 Swiper 슬라이드 적용)
  - Vercel 배포

### 2차 개선 (Migration & Enhancement)

- **기간**: 2026.03 ~ (진행 중)

- **주요 작업**
  - CRA → Vite 마이그레이션 (빌드 환경 개선 및 성능 향상)
  - Redux → Zustand 전환 (전역 상태 관리 단순화)
  - 작성된 리뷰 데이터 저장 및 상세/라이브러리 페이지 연동 기능 구현
  - JavaScript → TypeScript 전환 (타입 안정성 및 유지보수성 향상)
  - React Query 도입을 통한 API 로직 리팩토링 (데이터 fetching 및 캐싱 최적화)
  - Mui를 활용한 UI 디자인 개선 및 컴포넌트 리팩토링

<br>

## 3. 사용 기술

### Frontend
| 기술 | 사용 목적 |
| ----- | ----- |
| ![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black) | 컴포넌트 기반 SPA 구조 설계 |
| ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white) | 타입 안정성 확보 및 유지보수성 개선 |
| ![Zustand](https://img.shields.io/badge/Zustand-433E38?style=flat-square&logo=zustand&logoColor=white) | 간결한 전역 상태 관리 |
| ![React Query](https://img.shields.io/badge/React_Query-FF4154?style=flat-square&logo=reactquery&logoColor=white) | 서버 상태 관리 및 API 데이터 캐싱 |
| ![SASS](https://img.shields.io/badge/SASS-CC6699?style=flat-square&logo=Sass&logoColor=white) | 스타일링 및 CSS 확장 문법 사용 |
| ![Swiper](https://img.shields.io/badge/swiper-6332F6?style=flat-square&logo=swiper&logoColor=white) | 슬라이드 UI (배너, 카드 등) 구현 |
| ![MUI](https://img.shields.io/badge/MUI-007FFF?style=flat-square&logo=MUI&logoColor=white) | 일관된 UI 컴포넌트 및 아이콘 활용 |

### Tooling
| 기술 | 사용 목적 |
| ----- | -------------- |
| ![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white) | 브랜치 전략 기반 버전 관리 (`main / develop`) |
| ![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white) | 원격 저장소 및 배포 소스 관리 |
| ![VScode](https://img.shields.io/badge/VS_Code-007ACC?style=flat-square&logo=visual-studio-code&logoColor=white) | 코드 작성 및 개발 환경  |
| ![vite](https://img.shields.io/badge/vite-646CFF?style=flat-square&logo=vite&logoColor=white) | 빠른 개발 서버 및 빌드 환경 구성 |

### Deployment
| 플랫폼 | 사용 목적 |
| ----- | ----- |
| ![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white) | 애플리케이션 자동 빌드 및 배포 |

### Design
| 도구 | 사용 목적 |
| ----- | -------------- |
| ![Figma](https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=figma&logoColor=white) | UI 목업 및 디자인 설계 |

<br>

## [4. 페이지별 주요 기능 (click to check)](https://github.com/yjinn0813/cinetalk/wiki/%ED%8E%98%EC%9D%B4%EC%A7%80%EB%B3%84-%EC%A3%BC%EC%9A%94-%EA%B8%B0%EB%8A%A5)

<br>

## 5. API

- **영화진흥위원회 - 영화목록 조회 OPEN API**

  - 영화명, 감독명 등 키워드로 검색 가능

<br>

## [6. Trouble-shooting History (click to check)](https://github.com/yjinn0813/cinetalk/wiki/%F0%9F%9A%80-Trouble%E2%80%90shooting-History)

<br>

## 7. User Flow

<p align=center><img src="https://github.com/yjinn0813/cinetalk/blob/main/public/userflow.png" width="800"></p>

<br>

## 8. 디렉토리 구조

```bash
📦cinetalk
 ┣ 📂public
 ┃ ┣ 📂favicon
 ┃ ┃ ┣ 📜apple-touch-icon.png
 ┃ ┃ ┗ 📜favicon.png
 ┃ ┣ 📂fonts
 ┃ ┃ ┗ 📜PretendardVariable.woff2
 ┃ ┣ 📂images
 ┃ ┃ ┣ 📂Main
 ┃ ┃ ┃ ┣ 📂AD
 ┃ ┃ ┃ ┣ 📂event
 ┃ ┃ ┃ ┣ 📂rank
 ┃ ┃ ┣ 📂Poster
 ┃ ┃ ┣ 📂Review
 ┃ ┗ 📜userflow.png
 ┣ 📂src
 ┃ ┣ 📂assets
 ┃ ┃ ┗ 📜logo.png
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📂Main
 ┃ ┃ ┃ ┣ 📜Boxoffice.json
 ┃ ┃ ┃ ┣ 📜EventBox.tsx
 ┃ ┃ ┃ ┣ 📜Events.json
 ┃ ┃ ┃ ┣ 📜RankBox.tsx
 ┃ ┃ ┃ ┣ 📜ReviewBox.tsx
 ┃ ┃ ┃ ┗ 📜Reviews.json
 ┃ ┃ ┣ 📂Profile
 ┃ ┃ ┃ ┣ 📜ContentBadge.tsx
 ┃ ┃ ┃ ┣ 📜LogoutButton.tsx
 ┃ ┃ ┃ ┣ 📜MenuButtons.tsx
 ┃ ┃ ┃ ┣ 📜UserInfo.tsx
 ┃ ┃ ┃ ┗ 📜UserStats.tsx
 ┃ ┃ ┣ 📂Review
 ┃ ┃ ┃ ┣ 📜Posts.json
 ┃ ┃ ┃ ┣ 📜ReadPosts.tsx
 ┃ ┃ ┃ ┗ 📜WatchedPoster.tsx
 ┃ ┃ ┣ 📂Write
 ┃ ┃ ┃ ┗ 📜Toggles.tsx
 ┃ ┃ ┗ 📂common
 ┃ ┃ ┃ ┣ 📜Footer.tsx
 ┃ ┃ ┃ ┗ 📜Header.tsx
 ┃ ┣ 📂pages
 ┃ ┃ ┣ 📜Login.tsx
 ┃ ┃ ┣ 📜Main.tsx
 ┃ ┃ ┣ 📜NotFound.tsx
 ┃ ┃ ┣ 📜Profile.tsx
 ┃ ┃ ┣ 📜Register.tsx
 ┃ ┃ ┣ 📜Review.tsx
 ┃ ┃ ┣ 📜ReviewLists.tsx
 ┃ ┃ ┣ 📜Search.tsx
 ┃ ┃ ┗ 📜Write.tsx
 ┃ ┣ 📂store
 ┃ ┃ ┣ 📜useAuthStore.ts
 ┃ ┃ ┣ 📜usePostStore.ts
 ┃ ┃ ┗ 📜useUserStore.ts
 ┃ ┣ 📂styles
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┣ 📜EventBox.scss
 ┃ ┃ ┃ ┣ 📜Header.scss
 ┃ ┃ ┃ ┣ 📜ReviewBox.scss
 ┃ ┃ ┃ ┗ 📜WatchedPoster.scss
 ┃ ┃ ┣ 📂pages
 ┃ ┃ ┃ ┣ 📜Login.scss
 ┃ ┃ ┃ ┣ 📜Main.scss
 ┃ ┃ ┃ ┣ 📜Register.scss
 ┃ ┃ ┃ ┣ 📜Review.scss
 ┃ ┃ ┃ ┣ 📜ReviewLists.scss
 ┃ ┃ ┃ ┣ 📜Search.scss
 ┃ ┃ ┃ ┗ 📜Write.scss
 ┃ ┃ ┗ 📜root.scss
 ┃ ┣ 📂utils
 ┃ ┃ ┣ 📜auth.ts
 ┃ ┃ ┣ 📜clipboard.ts
 ┃ ┃ ┗ 📜validation.ts
 ┃ ┣ 📜App.tsx
 ┃ ┗ 📜main.tsx
 ┣ 📜.env
 ┣ 📜.gitignore
 ┣ 📜README.md
 ┣ 📜index.html
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┣ 📜tsconfig.json
 ┣ 📜vercel.json
 ┗ 📜vite.config.js
```

---

### 📢 해당 사이트 제작에 사용한 모든 이미지의 저작권은 소유자에게 있으며, 학습용으로 사용했음을 알립니다.
