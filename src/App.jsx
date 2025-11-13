import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Contact from "./components/Contact/Contact";
import AdminPanel from "./components/Admin/AdminPanel";
import HomeBanner from "./components/HomeBanner/HomeBanner";

const App = () => {
  return (
    <Router>
      <div>
        {/* --- Simple Navigation Bar --- */}
        <nav style={styles.nav}>
          <Link style={styles.link} to="/">Home</Link>
          <Link style={styles.link} to="/contact">Contact</Link>
          <Link style={styles.link} to="/admin">Admin Panel</Link>
        </nav>

        {/* --- Page Routes --- */}
        <Routes>
          <Route path="/" element={<HomeBanner />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </div>
    </Router>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    padding: "15px",
    backgroundColor: "#111",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "16px",
  },
};

export default App;
