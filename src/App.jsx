import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing.jsx'
import Profile from './pages/Profile.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      {/* 회사소개서 PDF 원본 — 여기서 인쇄해 public/company-profile.pdf 를 만든다 */}
      <Route path="/profile" element={<Profile />} />
      {/* 알 수 없는 해시 경로는 랜딩으로 폴백 */}
      <Route path="*" element={<Landing />} />
    </Routes>
  )
}
