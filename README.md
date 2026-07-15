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
