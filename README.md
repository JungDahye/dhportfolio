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
26포트폴리오/
└── html/
    ├── index.html          # 메인 페이지 (전체 마크업)
    ├── favicon.ico
    ├── css/
    │   └── style.css       # 전체 스타일 (CSS 변수 기반 토큰 시스템)
    ├── js/
    │   └── main.js         # 포트폴리오 렌더링·필터·인터랙션 로직
    └── images/
        └── main/           # 로고, 스킬 아이콘, 포트폴리오 썸네일 등
```

---

## 🛠 사용 기술

| 구분     | 내용                                                                   |
| -------- | ---------------------------------------------------------------------- |
| 마크업   | HTML5 (시맨틱 태그, 웹접근성)                                          |
| 스타일   | CSS3 (CSS Variables, Flexbox / Grid, 미디어 쿼리, 애니메이션)          |
| 스크립트 | Vanilla JavaScript (ES5 스타일, IIFE 모듈 패턴)                        |
| 웹폰트   | [Pretendard](https://github.com/orioncactus/pretendard) (jsDelivr CDN) |

포트폴리오에서 소개하는 보유 기술: **HTML5 · CSS3 · JavaScript · jQuery · React**

---

## 🚀 실행 방법

빌드 과정이 필요 없는 정적 사이트입니다.

**1. 브라우저에서 바로 열기**

```
html/index.html 파일을 브라우저로 실행
```

**2. 로컬 서버로 실행 (권장)**

썸네일 이미지가 상대 경로로 로드되므로 로컬 서버 사용을 권장합니다.

```bash
# Python 3
cd html
python -m http.server 8000
# → http://localhost:8000

# 또는 Node.js
npx serve html
```

---

## 📌 포트폴리오 데이터 관리

포트폴리오 목록은 `html/js/main.js`의 `WORKS` 배열에서 관리합니다.
항목을 추가·수정하려면 아래 형식으로 배열에 객체를 추가하면 됩니다.

```js
{
  name: '사이트명',        // 카드에 표시되는 이름
  cat:  'a11y',           // 카테고리: a11y | team | intra | solo
  img:  '01.png',         // images/main/ 내 썸네일 파일명
  url:  'https://...'     // 링크 (빈 문자열이면 링크 없는 카드로 렌더링)
}
```

| 카테고리 값 | 표시 라벨   |
| ----------- | ----------- |
| `a11y`      | 웹접근성    |
| `team`      | 팀 프로젝트 |
| `intra`     | 내부망      |
| `solo`      | 개인 작업   |

> 썸네일 로드에 실패하면 사이트명이 들어간 브랜드 플레이스홀더로 자동 대체됩니다.

---

## 📄 소개

대학·공공기관·기업 등 다양한 사이트를 웹표준·웹접근성 기준으로 제작해 온 웹 퍼블리셔의 경력과 작업물을 담고 있습니다.

© Jeong Dahye. All rights reserved.
