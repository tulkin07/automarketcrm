
import { Route, Routes } from 'react-router-dom'
import ProtectedRoute from './routes/ProtectedRoute'
import AuthRoute from './routes/AuthRoute'
import Dashboard from './pages/dashboard'
import Users from './pages/Users'
import News from './pages/News'
import Login from './pages/Login'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<ProtectedRoute />}>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/users' element={<Users />} />
          <Route path='/news' element={<News />} />
        </Route>
        <Route path='/' element={<AuthRoute />}>
          <Route path='/login' element={<Login />} />
        </Route>
      </Routes>
    </div>
  )
}
