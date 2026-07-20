# 정다혜 | Web Publisher Portfolio

웹표준·웹접근성 기반 웹 퍼블리셔 **정다혜**의 개인 포트폴리오 웹사이트입니다.
프레임워크나 빌드 도구 없이 **순수 HTML5 · CSS3 · JavaScript**로 제작한 반응형 원페이지 사이트입니다.

---

## ✨ 주요 특징

- **원페이지 스크롤 구성** — Hero → Career → Skills → Portfolio 4개 섹션
- **반응형 레이아웃** — 데스크톱 / 태블릿 / 모바일 대응
- **웹접근성 고려** — 본문 바로가기 링크, `aria-*` 속성, 시맨틱 마크업, `prefers-reduced-motion` 대응
- **포트폴리오 필터** — 전체 / 웹접근성 / 팀 프로젝트 / 내부망 / 개인 작업 카테고리별 필터링
- **인터랙션** — 스크롤 리빌(IntersectionObserver), Hero 마우스 패럴랙스, SVG 웨이브, 헤더 스크롤 상태 전환
- **의존성 최소화** — 외부 라이브러리 없이 바닐라 JS로 구현 (웹폰트 Pretendard만 CDN 사용)

---

## 📁 프로젝트 구조

```
html/
└───┬── index.html          # 메인 페이지
    ├── favicon.ico
    ├── css/
    │   ├── reset.css       # 기본 스타일 reset
    │   ├── style.css       # 전체 스타일
    ├── js/
    │   └── main.js         # 포트폴리오 렌더링·인터랙션 로직
    └── images/
        └── main/           # 메인 페이지 이미지
```

---

## 🛠 사용 기술

| 구분     | 내용                                                          |
| -------- | ------------------------------------------------------------- |
| 마크업   | HTML5 (시맨틱 태그, 웹접근성)                                 |
| 스타일   | CSS3 (CSS Variables, Flexbox / Grid, 미디어 쿼리, 애니메이션) |
| 스크립트 | Vanilla JavaScript (ES5 스타일, IIFE 모듈 패턴)               |

---

## 📌 포트폴리오 데이터 관리

포트폴리오 목록은 `html/js/main.js`의 `WORKS` 배열에서 관리합니다.

```js
{
  name: '사이트명',        // 카드에 표시되는 이름
  cat:  'a11y',           // 카테고리: react |  a11y | team | intra | solo
  img:  '01.png',         // images/main/ 내 썸네일 파일명
  url:  'https://...'     // 링크
}
```

| 카테고리 값 | 표시 라벨   |
| ----------- | ----------- |
| `a11y`      | 웹접근성    |
| `team`      | 팀 프로젝트 |
| `intra`     | 내부망      |
| `solo`      | 개인 작업   |

---

## 📄 소개

경력, 사용기술, 개인 및 팀으로 제작해 온 프로젝트를 기록하였습니다.

© Jeong Dahye. All rights reserved.
