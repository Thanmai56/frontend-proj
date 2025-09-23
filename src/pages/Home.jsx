import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-content">
          <Link to="/" className="logo">LearnHub</Link>
          <ul className="nav-links">
            <li><Link to="/student">Student Dashboard</Link></li>
            <li><Link to="/instructor">Instructor Dashboard</Link></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to LearnHub</h1>
          <p>Your comprehensive platform for learning, growth, and success. Access courses, take quizzes, and track your progress all in one place.</p>
          <Link to="/student">
            <button className="cta-button">Start Learning Today</button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Why Choose LearnHub?</h2>
        <p style={{ textAlign: 'center', marginBottom: '3rem', color: '#666' }}>
          Everything you need for successful learning in one platform
        </p>
        
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">📚</div>
            <h3>Comprehensive Courses</h3>
            <p>Access a wide range of courses across various subjects with expert instructors.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Progress Tracking</h3>
            <p>Monitor your learning journey with detailed progress dashboards and analytics.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">🏆</div>
            <h3>Earn Certificates</h3>
            <p>Get recognized for your achievements with verified certificates upon completion.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>Smart Recommendations</h3>
            <p>Receive personalized course recommendations based on your interests and progress.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">📝</div>
            <h3>Interactive Quizzes</h3>
            <p>Test your knowledge with engaging quizzes and immediate feedback.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">👨‍🏫</div>
            <h3>Expert Instructors</h3>
            <p>Learn from industry professionals and experienced educators.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home