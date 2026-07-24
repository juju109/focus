export default function Media() {
  return (
    <section className="media-section" id="media">
      <div className="wrap">
        <div data-reveal>
          <div className="eyebrow-line">MEDIA COVERAGE</div>
          <h2 className="section-title" style={{ fontSize: '24px' }}>다루는 광고 매체</h2>
        </div>
        <div className="media-grid" data-stagger>
          <div className="media-card">
            <div className="micon"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7" /><line x1="21" y1="21" x2="16.5" y2="16.5" /></svg></div>
            <div className="mname">네이버 SA</div>
            <div className="mdesc">검색광고</div>
          </div>
          <div className="media-card">
            <div className="micon"><svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /></svg></div>
            <div className="mname">Meta</div>
            <div className="mdesc">Facebook · Instagram</div>
          </div>
          <div className="media-card">
            <div className="micon"><svg viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M10 9l5 3-5 3V9z" /></svg></div>
            <div className="mname">GFA</div>
            <div className="mdesc">네이버 성과형 디스플레이</div>
          </div>
          <div className="media-card">
            <div className="micon"><svg viewBox="0 0 24 24"><path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /><circle cx="11" cy="11" r="2" /></svg></div>
            <div className="mname">Google Ads</div>
            <div className="mdesc">검색 · 디스플레이 · 유튜브</div>
          </div>
          <div className="media-card">
            <div className="micon"><svg viewBox="0 0 24 24"><path d="M3 17l6-6 4 4 8-8" /><path d="M15 7h6v6" /></svg></div>
            <div className="mname">Kakao</div>
            <div className="mdesc">카카오톡 · 다음</div>
          </div>
        </div>
      </div>
    </section>
  )
}
