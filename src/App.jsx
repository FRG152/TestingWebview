import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <p>This is the home page of the app.</p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About Page</h2>
      <p>This is the about page of the app.</p>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2>Contact Page</h2>
      <p>This is the contact page of the app.</p>
    </div>
  );
}

function App() {
  useEffect(() => {
    // Escuchar mensajes de React Native
    const handleMessage = (event) => {
      const message = JSON.parse(event.data);
      console.log("Message received from React Native:", message);
    };

    window.addEventListener("message", handleMessage);

    // Limpiar el listener al desmontar el componente
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
