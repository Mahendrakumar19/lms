import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-heading">Empower Your Learning</h1>
          <p className="hero-subtext">Join thousands of learners on our platform.</p>
          <button className="hero-btn">Get Started</button>
        </div>
      </section>


      {/* Features Section */}
      <section className="features-section">
        <h2 className="features-heading">Key Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Interactive Courses</h3>
            <p>Engaging and practical courses for all levels.</p>
          </div>
          <div className="feature-card">
            <h3>Track Progress</h3>
            <p>Monitor your achievements in real-time.</p>
          </div>
          <div className="feature-card">
            <h3>Certification</h3>
            <p>Receive certificates upon course completion.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;