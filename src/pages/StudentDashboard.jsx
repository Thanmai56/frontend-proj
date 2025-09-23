import { Link } from 'react-router-dom'

function StudentDashboard() {
  // Sample data - in real app, this would come from API
  const enrolledCourses = [
    { id: 1, title: 'React Fundamentals', progress: 75, duration: '8 weeks' },
    { id: 2, title: 'JavaScript Advanced', progress: 40, duration: '10 weeks' },
    { id: 3, title: 'Web Development', progress: 20, duration: '12 weeks' }
  ]

  const recommendedCourses = [
    { id: 4, title: 'Node.js Backend', level: 'Intermediate' },
    { id: 5, title: 'Python for Data Science', level: 'Beginner' },
    { id: 6, title: 'UI/UX Design', level: 'Intermediate' }
  ]

  const upcomingQuizzes = [
    { id: 1, title: 'React Components Quiz', course: 'React Fundamentals', date: '2024-01-15' },
    { id: 2, title: 'JavaScript Functions', course: 'JavaScript Advanced', date: '2024-01-18' }
  ]

  return (
    <div>
      <nav className="navbar">
        <div className="nav-content">
          <Link to="/" className="logo">LearnHub</Link>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/instructor">Instructor Dashboard</Link></li>
          </ul>
        </div>
      </nav>

      <div className="dashboard">
        <div className="dashboard-header">
          <h1>Student Dashboard</h1>
          <p>Welcome back! Continue your learning journey.</p>
        </div>

        <div className="cards-grid">
          <div className="card">
            <h3>Overall Progress</h3>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '45%' }}></div>
            </div>
            <p>45% Complete</p>
          </div>

          <div className="card">
            <h3>Courses Enrolled</h3>
            <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#667eea' }}>3</p>
          </div>

          <div className="card">
            <h3>Certificates Earned</h3>
            <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#4CAF50' }}>1</p>
          </div>
        </div>

        {/* Replace this section */}
<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>

{/* With this */}
<div className="dashboard-grid-container">
  {/* Enrolled Courses */}
  <div className="card">
    <h3>My Courses</h3>
    <div className="courses-list">
      {enrolledCourses.map(course => (
        <div key={course.id} className="quiz-item">
          <div style={{ flex: 1 }}>
            <h4>{course.title}</h4>
            <p>{course.duration}</p>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${course.progress}%` }}></div>
            </div>
            <small>{course.progress}% Complete</small>
          </div>
          <button className="btn btn-primary">Continue</button>
        </div>
      ))}
    </div>
  </div>

  {/* Recommended Courses */}
  <div className="card">
    <h3>Recommended For You</h3>
    <div className="courses-list">
      {recommendedCourses.map(course => (
        <div key={course.id} className="quiz-item">
          <div style={{ flex: 1 }}>
            <h4>{course.title}</h4>
            <p>Level: {course.level}</p>
          </div>
          <button className="btn btn-success">Enroll</button>
        </div>
      ))}
    </div>
  </div>
</div>

          {/* Recommended Courses */}
          <div className="card">
            <h3>Recommended For You</h3>
            <div className="courses-list">
              {recommendedCourses.map(course => (
                <div key={course.id} className="quiz-item">
                  <div>
                    <h4>{course.title}</h4>
                    <p>Level: {course.level}</p>
                  </div>
                  <button className="btn btn-success">Enroll</button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Upcoming Quizzes */}
        <div className="card">
          <h3>Upcoming Quizzes</h3>
          <ul className="quiz-list">
            {upcomingQuizzes.map(quiz => (
              <li key={quiz.id} className="quiz-item">
                <div>
                  <h4>{quiz.title}</h4>
                  <p>Course: {quiz.course} • Date: {quiz.date}</p>
                </div>
                <button className="btn btn-primary">Start Quiz</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default StudentDashboard