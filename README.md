# 포커스특공대 랜딩 페이지

소수정예 퍼포먼스 광고대행사 **포커스특공대**의 원페이지 랜딩 사이트입니다.
React + Vite 정적 빌드로, `main` 푸시 시 GitHub Actions가 자동으로 GitHub Pages에 배포합니다.

- **라이브**: https://focus-agents.com/
- **스택**: React 18, Vite 5, react-router-dom(HashRouter)

## 개발

```bash
npm install
npm run dev        # 로컬 개발 서버
npm run build      # dist/ 정적 빌드
npm run preview    # 빌드 결과 미리보기 (http://localhost:4173/)
```

> 커스텀 도메인(`focus-agents.com`)의 루트에서 서빙되므로 `base`는 `/` 입니다.
> `public/CNAME`에 도메인이 지정되어 있어 재배포 시에도 커스텀 도메인이 유지됩니다.

## 배포

`main` 브랜치에 푸시하면 `.github/workflows/deploy.yml`이 빌드 후 Pages에 배포합니다.
별도 수동 작업은 필요 없습니다.

## SEO · 공유 미리보기

검색 노출과 링크 공유(카톡·SNS) 미리보기를 위한 설정이 `index.html`과 `public/`에 있습니다.

- `index.html`: `description`/`keywords`/`canonical`/`robots` 메타, Open Graph·Twitter 카드,
  `ProfessionalService` JSON-LD 구조화 데이터, 크롤러용 `noscript` 폴백 콘텐츠
- `public/robots.txt`, `public/sitemap.xml`: 검색엔진 색인 유도
- `public/og-image.png` (1200×630): 링크 공유 시 표시되는 썸네일 이미지

> 사이트 정보(문구·URL 등)를 바꾸면 위 메타태그와 JSON-LD도 함께 업데이트하세요.

## 로고 · 파비콘

- `public/logo.jpg`: 브랜드 로고. 파비콘/애플 터치 아이콘(`index.html`)과
  헤더 메뉴의 브랜드 아이콘(`src/components/Nav.jsx`)에 함께 사용됩니다.
- 로고를 교체하려면 `public/logo.jpg` 파일만 같은 이름으로 덮어쓰면 됩니다.

## 문의 폼 (이메일)

문의 폼은 EmailJS 환경변수가 있으면 자동 전송, 없으면 `mailto`로 폴백합니다.
로컬에서 테스트하려면 프로젝트 루트에 `.env`를 만들고 다음을 채웁니다:

```
VITE_EMAILJS_SERVICE_ID=...
VITE_EMAILJS_TEMPLATE_ID=...
VITE_EMAILJS_PUBLIC_KEY=...
VITE_CONTACT_EMAIL=...        # mailto 폴백 수신 주소
```

배포 환경에서는 위 값을 GitHub 저장소 **Secrets**로 등록하면 빌드 시 주입됩니다.

> ⚠️ 정적 사이트라 빌드에 주입된 값은 공개 번들에 노출됩니다. EmailJS Public Key는
> 공개용이므로 괜찮지만, 오남용 방지는 **EmailJS 대시보드의 도메인 화이트리스트
> (`focus-agents.com`)** 로 설정하세요.

## 회사소개서 PDF

`public/company-profile.pdf` 를 교체하면 "회사소개서 다운로드" 버튼의 파일이 바뀝니다.

### 원본은 `/#/profile` 입니다

소개서는 **랜딩을 인쇄해서 만들지 않습니다.** 랜딩은 끊김 없이 이어지는 흐름 문서라
인쇄 엔진이 297mm 마다 아무 데서나 잘라내고, 그걸 막으려 `break-inside:avoid` 를 걸면
이번엔 블록이 다음 장으로 밀리면서 페이지 하단에 큰 공백이 남습니다. 게다가 인쇄 시
레이아웃 폭이 210mm(≈794px)로 잡혀 데스크톱·모바일 미디어쿼리가 뒤섞입니다.

그래서 전용 라우트를 둡니다.

- **원본**: `/#/profile` → `src/pages/Profile.jsx`, `src/profile.css`
- **구조**: 210×297mm 고정 페이지 6장. 페이지 나눔 위치를 사람이 정하므로 결과가 항상 같고,
  남는 공간은 사고가 아니라 의도된 여백입니다.
- **콘텐츠**: `src/content.jsx` 를 랜딩과 함께 씁니다. 문구를 한 곳에서 고치면 양쪽에 반영됩니다.

### PDF 뽑는 방법

```
1. npm run dev  (또는 npm run preview)
2. Chrome 에서 /#/profile 열기
3. 인쇄(⌘P) → 대상: PDF로 저장
     용지        A4
     배율        100%      ← "맞추기"로 두면 결과가 창 크기에 따라 달라집니다
     여백        없음
     배경 그래픽  체크      ← 끄면 다크 페이지가 흰색으로 나옵니다
4. 저장한 파일을 public/company-profile.pdf 로 덮어쓰기
```

> 페이지를 6장 그대로 유지해야 하는 제약은 없습니다. 내용을 늘리려면
> `Profile.jsx` 에 `<Page>` 를 추가하고 `TOTAL` 값만 맞추면 됩니다.

### 편집 시 주의

`src/profile.css` 안에서는 **미디어쿼리 · `vw`/`vh` · `clamp()` 를 쓰지 않습니다.**
셋 다 인쇄 배율과 창 크기에 따라 값이 흔들려, 뽑을 때마다 레이아웃이 달라지는 원인입니다.
덱은 폭이 항상 210mm 라 분기가 필요 없으니 모든 치수를 고정값으로 둡니다.

페이지에 여백이 크게 남을 때는 아래 두 장치로 흡수시킵니다.

- `.pd-block.grow` — 그 블록이 남는 높이를 받아 늘어남 (p.2 비교표: 표 행들이 고르게 나눠 가짐)
- `.pd-block.push` — 남는 높이를 블록 위쪽 간격으로 밀어냄 (p.4 매체 섹션)
