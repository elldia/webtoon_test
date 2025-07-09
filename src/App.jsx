import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Main from './components/Main'
import Login from './components/Login'
import { useState } from 'react'
import logo from './assets/images/logo.svg'
import './App.css'

function App() {

  const [userId, setUserId] = useState(null)

  return (
    <>
      <BrowserRouter basename="webtoon_test">
        <nav>
          <Link to="/"><img src={logo} alt="네이버웹툰" /></Link>
        </nav>
        <Routes>
          <Route path="/" element={<Main userId={userId} setUserId={setUserId} />} />
          <Route path="/login" element={<Login setUserId={setUserId} />} />
        </Routes>

        {/* {userId ? (<></>) : (<Link to="/login">로그인</Link>)} */}
      </BrowserRouter>
    </>
  )
}

export default App
