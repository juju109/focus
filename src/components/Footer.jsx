import PrivacyPolicy from './PrivacyPolicy.jsx'
import Terms from './Terms.jsx'
import EmailRefusal from './EmailRefusal.jsx'

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-tag">FOCUS AGENTS</div>
        <div className="foot-sub">앞서는 특공대, 끝까지 함께하는 광고 파트너</div>
        <div className="foot-mail">문의 : sales.focusagents@gmail.com</div>
        <div className="foot-biz">
          포커스특공대 &nbsp;|&nbsp; 대표 오유주 &nbsp;|&nbsp; 사업자등록번호 498-48-01116
        </div>
        <div className="foot-legal">
          <PrivacyPolicy className="privacy-link" />
          <span className="foot-legal-sep">|</span>
          <Terms className="privacy-link" />
          <span className="foot-legal-sep">|</span>
          <EmailRefusal className="privacy-link" />
        </div>
        <div className="foot-copy">© 2026 포커스특공대. All rights reserved.</div>
      </div>
    </footer>
  )
}
