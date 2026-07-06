import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      {/* 알 수 없는 해시 경로는 랜딩으로 폴백 */}
      <Route path="*" element={<Landing />} />
    </Routes>
  )
}
