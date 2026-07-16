import { useState } from 'react'
import emailjs from '@emailjs/browser'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL

// 세 값이 모두 있으면 EmailJS로 전송, 아니면 mailto 폴백.
const EMAILJS_ENABLED = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY)

const BUDGETS = ['300만원 미만', '300만원 ~ 1,000만원', '1,000만원 ~ 3,000만원', '3,000만원 이상']

const EMPTY = { company: '', manager: '', contactInfo: '', budget: BUDGETS[0], detail: '' }

export default function InquiryForm() {
  const [form, setForm] = useState(EMPTY)
  const [status, setStatus] = useState('idle') // idle | sending | ok | err

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const openMailto = () => {
    const destination = CONTACT_EMAIL || 'REPLACE_WITH_EMAIL@example.com'
    const subject = encodeURIComponent('[상담신청] ' + form.company)
    const body = encodeURIComponent(
      '회사명: ' + form.company + '\n' +
      '담당자명: ' + form.manager + '\n' +
      '이메일: ' + form.contactInfo + '\n' +
      '월 예산 범위: ' + form.budget + '\n\n' +
      '의뢰 내용:\n' + form.detail
    )
    window.location.href = 'mailto:' + destination + '?subject=' + subject + '&body=' + body
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!EMAILJS_ENABLED) {
      openMailto()
      return
    }

    setStatus('sending')
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          company: form.company,
          manager: form.manager,
          contact_info: form.contactInfo,
          budget: form.budget,
          detail: form.detail,
        },
        { publicKey: PUBLIC_KEY }
      )
      setStatus('ok')
      setForm(EMPTY)
    } catch (err) {
      console.error('EmailJS 전송 실패:', err)
      setStatus('err')
    }
  }

  return (
    <form className="inquiry" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="company">회사명</label>
        <input type="text" id="company" name="company" placeholder="예: 포커스특공대" value={form.company} onChange={update} required />
      </div>
      <div className="field-row">
        <div className="field">
          <label htmlFor="manager">담당자명</label>
          <input type="text" id="manager" name="manager" value={form.manager} onChange={update} required />
        </div>
        <div className="field">
          <label htmlFor="contactInfo">이메일</label>
          <input type="email" id="contactInfo" name="contactInfo" placeholder="example@company.com" value={form.contactInfo} onChange={update} required />
        </div>
      </div>
      <div className="field">
        <label htmlFor="budget">월 예산 범위</label>
        <select id="budget" name="budget" value={form.budget} onChange={update}>
          {BUDGETS.map((b) => <option key={b}>{b}</option>)}
        </select>
      </div>
      <div className="field">
        <label htmlFor="detail">의뢰 내용</label>
        <textarea id="detail" name="detail" placeholder="브랜드 소개, 현재 광고 운영 현황, 원하시는 목표 등을 자유롭게 남겨주세요." value={form.detail} onChange={update}></textarea>
      </div>
      <button type="submit" className="submit-btn" disabled={status === 'sending'}>
        {status === 'sending' ? '전송 중…' : '무료 상담 신청하기'}
      </button>
      {status === 'ok' && <div className="form-status ok">상담 신청이 접수되었습니다. 빠르게 연락드리겠습니다.</div>}
      {status === 'err' && <div className="form-status err">전송에 실패했습니다. 잠시 후 다시 시도해 주세요.</div>}
      <div className="form-note">
        {EMAILJS_ENABLED ? '제출 시 상담 신청이 바로 접수됩니다' : '제출 시 입력하신 이메일 클라이언트가 열립니다'}
      </div>
    </form>
  )
}
