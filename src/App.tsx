import { BrowserRouter as Router,
        Route,
        Routes
        } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Feed from './pages/Feed'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/feed' element={<Feed />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
