/**
 * 랜딩(`pages/Landing.jsx`)과 회사소개서 PDF(`pages/Profile.jsx`)가 함께 쓰는 콘텐츠 원본.
 * 문구·수치를 여기서 한 번 고치면 두 곳에 동시 반영된다.
 * (아이콘은 JSX 엘리먼트로 담아두고 양쪽에서 그대로 재사용한다)
 */

/* ---------- 아이콘 ---------- */
const Ico = {
  building: <svg viewBox="0 0 24 24"><path d="M3 21h18" /><path d="M5 21V8l7-4 7 4v13" /><path d="M9 21v-6h6v6" /></svg>,
  video: <svg viewBox="0 0 24 24"><rect x="3" y="6" width="14" height="12" rx="1" /><path d="M17 10l4-2v8l-4-2" /></svg>,
  won: <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><path d="M9 8h4a2.5 2.5 0 0 1 0 5H9m0 0h6m-6 0v3m0-8v-2" /></svg>,
  search: <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7" /><line x1="21" y1="21" x2="16.5" y2="16.5" /></svg>,
  grid: <svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /></svg>,
  play: <svg viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M10 9l5 3-5 3V9z" /></svg>,
  rocket: <svg viewBox="0 0 24 24"><path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /><circle cx="11" cy="11" r="2" /></svg>,
  trend: <svg viewBox="0 0 24 24"><path d="M3 17l6-6 4 4 8-8" /><path d="M15 7h6v6" /></svg>,
  target: <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" /><path d="M12 2v4M12 18v4M2 12h4M18 12h4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8" /></svg>,
  squares: <svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /></svg>,
  chat: <svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>,
  download: <svg viewBox="0 0 24 24"><path d="M12 3v12" /><path d="M7 10l5 5 5-5" /><path d="M4 20h16" /></svg>,
}

/* ---------- 히어로 지표 ---------- */
export const STATS = [
  { icon: Ico.building, num: '300개+', cap: ['브랜드 업체', '운영 경험'] },
  { icon: Ico.video, num: '주 5개+', cap: ['신규 소재 제작', '(요청 시 영상 1편)'] },
  { icon: Ico.won, num: '0원', cap: ['이미지 · 영상', '제작비'], hi: true },
]

/* ---------- 다루는 광고 매체 ---------- */
export const MEDIA = [
  { icon: Ico.search, name: '네이버 SA', desc: '검색광고' },
  { icon: Ico.grid, name: 'Meta', desc: 'Facebook · Instagram' },
  { icon: Ico.play, name: 'GFA', desc: '네이버 성과형 디스플레이' },
  { icon: Ico.rocket, name: 'Google Ads', desc: '검색 · 디스플레이 · 유튜브' },
  { icon: Ico.trend, name: 'Kakao', desc: '카카오톡 · 다음' },
]

/* ---------- 일반 대행사와의 차이 ---------- */
export const DIFF_ROWS = [
  { label: '소재 제작', normal: '이미지 · 영상 건당 추가비', ours: '영상 포함 무제한 무료' },
  { label: '제작 속도', normal: '기획 · 디자인 · 운영 간 지연', ours: '1~2일 내 투입' },
  { label: '운영', normal: '다수 업체 기계적 관리', ours: '소수 브랜드 밀착 케어' },
  { label: '모니터링', normal: '업무 시간 외 대응 부재', ours: '365일 대표 직접 모니터링' },
  { label: '리포트', normal: '월간 PPT 요약, 사후 확인만 가능', ours: '주간 실시간 대시보드로 투명 공유' },
]

/* ---------- 핵심 포인트 2개 ---------- */
export const POINTS = [
  {
    title: '소재 제작 비용 ', em: '0원',
    desc: '저희는 자신 있는 업체만 운영해드리고 있으며, 소재 무료 제작은 그 선택에 대한 자신 있는 투자입니다.',
  },
  {
    title: '압도적 ', em: '소수 정예',
    desc: '소수의 업체만 핸들링하기 때문에, 계정 관리에서도 즉각적인 대응과 빠른 실행이 가능합니다.',
  },
]

/* ---------- 일하는 4가지 기준 ---------- */
export const VALUES = [
  { n: '01', h: '근거', p: '소재를 기획하고 세팅하는 전 과정에는 데이터가 있습니다. 이유 없는 세팅과 운영은 저희와 맞지 않습니다.' },
  { n: '02', h: '속도', p: '이슈를 발견하면 1~2일 내 새 소재를 투입합니다.' },
  { n: '03', h: '투명성', p: '주간 보고로 소통하고, 평일에는 데일리로 성과를 공유합니다. 현재 상황을 솔직하게 전달하고 다음 방향성을 지속적으로 제안드립니다.' },
  { n: '04', h: '책임', p: '마케터가 자주 바뀌는 공장형 대행사의 방식이 아닙니다. 모든 업체는 대표 마케터가 처음부터 끝까지 주도하여 관리합니다.' },
]

/* ---------- 대표 1인이 맡는 업무 ---------- */
export const DUTIES = [
  { n: '01', title: ['시장상황 및', '경쟁사 분석'], desc: ['데이터 기반 시장 진단으로', '정확한 전략 수립'] },
  { n: '02', title: ['광고소재', '기획'], desc: ['타겟 반응을 이끄는', '크리에이티브 설계'] },
  { n: '03', title: ['광고계정', '최적화'], desc: ['실시간 모니터링으로', '효율 극대화'] },
  { n: '04', title: ['광고 타겟', '설정'], desc: ['핵심 고객군을 정밀하게', '겨냥한 세팅'] },
  { n: '05', title: ['성과 분석 및', '방향성 제시'], desc: ['숫자 너머의 인사이트로', '다음 액션 제안'] },
]

/* ---------- 제공하는 서비스 ---------- */
export const SERVICES = [
  {
    icon: Ico.target, h: '브랜딩 · 전략 기획',
    p: '시장과 경쟁 상황을 분석해 브랜드 단계와 시즌성에 맞는 캠페인 방향을 처음부터 함께 설계합니다.',
  },
  {
    icon: Ico.squares, h: '퍼포먼스 마케팅',
    p: '네이버 SA · Meta · GFA · Google Ads · Kakao까지, 브랜드에 맞는 매체를 상담 후 직접 집행하고 운영합니다.',
  },
  {
    icon: Ico.play, h: '영상 · 이미지 소재 제작',
    p: '성과 난 이미지는 곧바로 영상으로 확장합니다.',
  },
]

/* ---------- 진행 프로세스 ---------- */
export const FLOW = [
  { n: '01', icon: Ico.chat, text: '상담 · 의뢰', desc: '브랜드 현황과 목표를 먼저 듣습니다' },
  { n: '02', icon: Ico.search, text: '전략 기획', desc: '매체 믹스와 소구점, 예산 구조를 설계합니다' },
  { n: '03', icon: Ico.rocket, text: '소재 제작 · 매체 운영', desc: '1~2일 내 새 소재 투입, 실시간 계정 관리' },
  { n: '04', icon: Ico.trend, text: '성과 리포팅', desc: '주간 대시보드로 성과와 다음 방향을 공유합니다' },
]

/* ---------- 특화 업종 ---------- */
export const INDUSTRIES = ['뷰티', '다이어트', '생활가전', '의류 잡화', '식품', '여성 특화 제품']

/* ---------- 케이스 스터디 ---------- */
export const CASES = [
  {
    tag: '뷰티 · 스마트스토어',
    steps: [
      ['문제', '타 대행사 운영에도 ROAS 미달 지속'],
      ['전략', '소구점 재설계로 핵심 타겟 재정의'],
      ['성과', '1주일 만에 ROAS 정상화'],
    ],
    from: '3만원', to: '600만원', period: '× 200',
    before: '3%',
  },
  {
    tag: '소형 가전 · 스마트스토어 · ', strategy: '영상 확장 전략',
    steps: [
      ['문제', '이미지 소재만으로는 확장 한계'],
      ['전략', '성과 이미지를 영상화, 네이버 클립 지면 확장'],
      ['성과', '1달 만에 매출 80배 폭발 성장'],
    ],
    from: '30만원', to: '2,400만원', period: '× 80 · 1달',
    before: '5%',
  },
  {
    tag: '다이어트 식품 · 자사몰',
    steps: [
      ['문제', '까다로운 검수 카테고리로 매출 0원'],
      ['전략', '검수 기준 내 고효율 소재 즉시 발굴'],
      ['성과', '1주일 만에 일 매출 2,400만원'],
    ],
    from: '무매출', to: '일 매출 2,400만원', period: '1주일',
    before: '2%',
  },
  {
    tag: '잡화 · 스마트스토어',
    steps: [
      ['문제', '낮은 소구력으로 정체된 실매출'],
      ['전략', '소구점 전환과 타겟 정밀화'],
      ['성과', '1주일 만에 매출 6배 증대'],
    ],
    from: '20만원', to: '120만원', period: '× 6 · 1주일',
    before: '18%',
  },
]

/* ---------- 실제 운영 성과 (구매완료 ROAS 기준) ---------- */
export const RESULTS = [
  { date: '2025.11.10', cost: '518,801', roas: '417.79' },
  { date: '2025.12.13', cost: '872,225', roas: '485.68' },
  { date: '2025.12.26', cost: '237,496', roas: '492.37' },
  { date: '2025.09.06', cost: '940,693', roas: '312.54' },
  { date: '2026.01.31', cost: '124,946', roas: '475.41' },
  { date: '2025.08.30', cost: '556,482', roas: '305.31' },
  { date: '2026.02.07', cost: '102,378', roas: '767.16' },
  { date: '2026.01.24', cost: '148,575', roas: '420.09' },
  { date: '2025.12.20', cost: '365,453', roas: '628.74' },
  { date: '2025.12.19', cost: '758,258', roas: '259.94' },
  { date: '2025.11.10', cost: '121,465', roas: '944.30' },
  { date: '2025.12.19', cost: '283,996', roas: '514.73' },
  { date: '2026.02.20', cost: '270,099', roas: '481.53' },
  { date: '2025.12.19', cost: '400,576', roas: '422.31' },
  { date: '2026.01.09', cost: '279,114', roas: '370.64' },
  { date: '2025.08.30', cost: '240,743', roas: '445.29' },
]

/* ---------- 회사 정보 ---------- */
export const COMPANY = {
  name: '포커스특공대',
  latin: 'FOCUS AGENTS',
  tagline: '앞서는 특공대, 끝까지 함께하는 광고 파트너',
  ceo: '오유주',
  bizNo: '498-48-01116',
  email: 'sales.focusagents@gmail.com',
  site: 'focus-agents.com',
}

export { Ico }
