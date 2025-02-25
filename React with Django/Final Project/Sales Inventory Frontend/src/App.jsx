
import { BrowserRouter, Routes, Route ,Link } from 'react-router'

import IndexPage from './assets/pages/IndexPage'
import Login from './assets/pages/LoginPage'
import RegisterPage from './assets/pages/RegisterPage'
import PasswordReset from './assets/pages/PasswordReset'
import PasswordResetOtp from './assets/pages/PasswordResetOtp'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgetpassword" element={<PasswordReset />} />
          <Route path="/reset-password" element={<PasswordResetOtp />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App