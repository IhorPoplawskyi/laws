import './App.css'

import { LawPage } from './pages/lawPage/lawPage'
import { Header } from './components/header/Header'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { CurrencyPage } from './pages/currencyPage/CurrencyPage'
import { OfflinePage } from './pages/offlinePage/OfflinePage'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='*' element={<Navigate to={'/laws'} />} />
        <Route path='/laws' element={<LawPage />} />
        <Route path='/currency' element={<CurrencyPage />} />
        <Route path='/nakaz744' element={< OfflinePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
