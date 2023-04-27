import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import { Header } from './components/header/Header'
import { LawPage } from './pages/lawPage/lawPage'

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='*' element={<Navigate to={'/laws'}/>}/>
        <Route path='/laws' element={<LawPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
