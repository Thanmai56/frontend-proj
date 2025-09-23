import { Link } from 'react-router-dom'
import { useState } from 'react'

function InstructorDashboard() {
  const [materials, setMaterials] = useState([
    { id: 1, title: 'React Introduction', type: 'PDF', course: 'React Fundamentals', uploadDate: '2024-01-10' },
    { id: 2, title: 'JavaScript Basics', type: 'Video', course: 'JavaScript Advanced', uploadDate: '2024-01-08' }
  ])

  const [assignments, setAssignments] = useState([
    { id: 1, title: 'Component Building', course: 'React Fundamentals', dueDate: '2024-01-20', submissions: 15 },
    { id: 2, title: 'Array Methods', course: 'JavaScript Advanced', dueDate: '2024-01-25', submissions: 12 }
  ])

  const [newMaterial, setNewMaterial] = useState({ title: '', type: 'PDF', course: '' })
  const [newAssignment, setNewAssignment] = useState({ title: '', course: '', dueDate: '' })

  const handleAddMaterial = (e) => {
    e.preventDefault()
    const material = {
      id: materials.length + 1,
      ...newMaterial,
      uploadDate: new Date().toISOString().split('T')[0]
    }
    setMaterials([...materials, material])
    setNewMaterial({ title: '', type: 'PDF', course: '' })
  }

  const handleAddAssignment = (e) => {
    e.preventDefault()
    const assignment = {
      id: assignments.length + 1,
      ...newAssignment,
      submissions: 0
    }
    setAssignments([...assignments, assignment])
    setNewAssignment({ title: '', course: '', dueDate: '' })
  }

  return (
    <div>
      <nav className="navbar">
        <div className="nav-content">
          <Link to="/" className="logo">LearnHub</Link>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/student">Student Dashboard</Link></li>
          </ul>
        </div>
      </nav>

      <div className="dashboard">
        <div className="dashboard-header">
          <h1>Instructor Dashboard</h1>
          <p>Manage your courses, materials, and student evaluations.</p>
        </div>

        <div className="cards-grid">
          <div className="card">
            <h3>Total Students</h3>
            <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#667eea' }}>127</p>
          </div>

          <div className="card">
            <h3>Active Courses</h3>
            <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#4CAF50' }}>5</p>
          </div>

          <div className="card">
            <h3>Pending Evaluations</h3>
            <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#ff6b6b' }}>8</p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
          {/* Add Learning Material */}
          <div className="card">
            <h3>Upload Learning Material</h3>
            <form onSubmit={handleAddMaterial}>
              <div className="form-group">
                <label>Title</label>
                <input 
                  type="text" 
                  value={newMaterial.title}
                  onChange={(e) => setNewMaterial({...newMaterial, title: e.target.value})}
                  required 
                />
              </div>
              <div className="form-group">
                <label>Type</label>
                <select 
                  value={newMaterial.type}
                  onChange={(e) => setNewMaterial({...newMaterial, type: e.target.value})}
                >
                  <option value="PDF">PDF</option>
                  <option value="Video">Video</option>
                  <option value="Presentation">Presentation</option>
                </select>
              </div>
              <div className="form-group">
                <label>Course</label>
                <input 
                  type="text" 
                  value={newMaterial.course}
                  onChange={(e) => setNewMaterial({...newMaterial, course: e.target.value})}
                  required 
                />
              </div>
              <button type="submit" className="btn btn-primary">Upload Material</button>
            </form>
          </div>

          {/* Create Assignment */}
          <div className="card">
            <h3>Create New Assignment</h3>
            <form onSubmit={handleAddAssignment}>
              <div className="form-group">
                <label>Assignment Title</label>
                <input 
                  type="text" 
                  value={newAssignment.title}
                  onChange={(e) => setNewAssignment({...newAssignment, title: e.target.value})}
                  required 
                />
              </div>
              <div className="form-group">
                <label>Course</label>
                <input 
                  type="text" 
                  value={newAssignment.course}
                  onChange={(e) => setNewAssignment({...newAssignment, course: e.target.value})}
                  required 
                />
              </div>
              <div className="form-group">
                <label>Due Date</label>
                <input 
                  type="date" 
                  value={newAssignment.dueDate}
                  onChange={(e) => setNewAssignment({...newAssignment, dueDate: e.target.value})}
                  required 
                />
              </div>
              <button type="submit" className="btn btn-success">Create Assignment</button>
            </form>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          {/* Learning Materials */}
          <div className="card">
            <h3>Learning Materials</h3>
            <ul className="material-list">
              {materials.map(material => (
                <li key={material.id} className="material-item">
                  <div>
                    <h4>{material.title}</h4>
                    <p>Type: {material.type} • Course: {material.course}</p>
                    <small>Uploaded: {material.uploadDate}</small>
                  </div>
                  <div>
                    <button className="btn btn-primary" style={{ marginRight: '0.5rem' }}>Edit</button>
                    <button className="btn btn-danger">Delete</button>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Assignments */}
          <div className="card">
            <h3>Assignments</h3>
            <ul className="material-list">
              {assignments.map(assignment => (
                <li key={assignment.id} className="material-item">
                  <div>
                    <h4>{assignment.title}</h4>
                    <p>Course: {assignment.course} • Due: {assignment.dueDate}</p>
                    <small>Submissions: {assignment.submissions}</small>
                  </div>
                  <div>
                    <button className="btn btn-primary" style={{ marginRight: '0.5rem' }}>Evaluate</button>
                    <button className="btn btn-danger">Delete</button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InstructorDashboard