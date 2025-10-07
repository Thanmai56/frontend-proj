import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import StudentDashboard from './pages/StudentDashboard'
import InstructorDashboard from './pages/InstructorDashboard'
import Practise from './pages/userprofile';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/student" element={<StudentDashboard />} />
          <Route path="/instructor" element={<InstructorDashboard />} />
          <Route path="/practise" element={
            
                    <Practise/>
          
            }/>
         
        </Routes>
      </div>
    </Router>
  )
}

export default App