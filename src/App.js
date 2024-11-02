// src/App.js
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Router components
import { fetchNews } from "./api";
import NewsList from "./NewsList";
import About from "./About"; // Import the About component
import Contact from "./Contact"; // Import the Contact component
import { Navbar, Nav, Dropdown, Button, Spinner } from "react-bootstrap";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("general");
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const itemsPerPage = 20; // Adjust this as needed

  useEffect(() => {
    const getNews = async () => {
      setLoading(true);
      try {
        const articles = await fetchNews(category, page, itemsPerPage);
        setNews(articles);
        setTotalResults(articles.length);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
      setLoading(false);
    };
    getNews();
  }, [category, page]);

  const loadMore = async () => {
    setLoading(true);
    const nextPage = page + 1;
    try {
      const newArticles = await fetchNews(category, nextPage, itemsPerPage);
      setNews((prevNews) => [...prevNews, ...newArticles]);
      setPage(nextPage);
    } catch (error) {
      console.error("Error fetching more news:", error);
    }
    setLoading(false);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <Router>
      <div className="container">
        <Navbar
          expand="lg"
          className={`shadow-sm mb-4 ${darkMode ? "dark-mode" : ""}`}
        >
          <Navbar.Brand href="/">News Hub</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
              <Button variant="outline-light" onClick={toggleDarkMode}>
                {darkMode ? "Light Mode" : "Dark Mode"}
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        
        <Routes>
          <Route path="/" element={
            <>
              <header className="text-center my-4">
                <h1 className="display-4">Latest News</h1>
                <p className="lead">Your daily dose of news from around the globe.</p>
              </header>
              <div className="text-center mb-4">
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Select Category
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => setCategory("general")}>
                      General
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => setCategory("business")}>
                      Business
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => setCategory("entertainment")}>
                      Entertainment
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => setCategory("health")}>
                      Health
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => setCategory("science")}>
                      Science
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => setCategory("sports")}>
                      Sports
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => setCategory("technology")}>
                      Technology
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              {loading ? (
                <div className="text-center my-5">
                  <Spinner animation="border" variant="primary" />
                  <p>Loading...</p>
                </div>
              ) : (
                <>
                  <NewsList articles={news} darkMode={darkMode} />
                  {totalResults > news.length && (
                    <div className="text-center">
                      <Button onClick={loadMore} variant="primary" className="mt-3">
                        Load More
                      </Button>
                    </div>
                  )}
                </>
              )}
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
