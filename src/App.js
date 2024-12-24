// Import necessary modules
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 
import AnimatedBack from "./AnimatedBack2.gif";

const App = () => {
  return (
    <div className="container-fluid">
      {/* Header Section */}
      <header className="d-flex justify-content-between align-items-center p-3 bg-primary text-white">
        <h1 className="h3">Group Page</h1>
        <nav>
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link text-white" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero-section text-center p-5 bg-light">
        <h2 className="display-5">Welcome to the Group</h2>
        <p className="lead">
          Join us to explore responsive designs built with Bootstrap v5 and ReactJS.
        </p>
        <button className="btn btn-primary mt-3">Get Started</button>
      </section>

      {/* Main Content Section */}
      <main className="row mt-4">
        <section className="col-lg-6 col-md-12 p-4">
          <h3 className="h5">About Our Group</h3>
          <p>
            Our group focuses on creating user-friendly and adaptive web designs. Resize the window to see how the layout adjusts seamlessly.
          </p>
          <ul>
            <li>Responsive Design</li>
            <li>Modern Frameworks</li>
            <li>Community Support</li>
          </ul>
        </section>

        <section className="col-lg-6 col-md-12 p-4">
          <img
            src={AnimatedBack}
            alt="Illustrative design"
            className="img-fluid rounded shadow"
          />
        </section>
      </main>

      {/* Footer Section */}
      <footer className="text-center p-4 bg-secondary text-white mt-5">
        <p>&copy; 2024 Responsive Design by Vansh Gautam</p>
        <p>
          <a href="#" className="text-white text-decoration-underline">Privacy Policy</a>
          {' | '}
          <a href="#" className="text-white text-decoration-underline">Terms of Service</a>
        </p>
      </footer>
    </div>
  );
};

export default App;
