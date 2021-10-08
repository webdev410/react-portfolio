import React, { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";

function App() {
	const [currentPage, setCurrentPage] = useState("Home");

	const renderPage = () => {
		if (currentPage === "Home") {
			return <Home></Home>;
		}
		if (currentPage === "About") {
			return <About></About>;
		}
		if (currentPage === "Portfolio") {
			return <Portfolio></Portfolio>;
		}
		if (currentPage === "Resume") {
			return <Resume></Resume>;
		}
		if (currentPage === "Contact") {
			return <Contact></Contact>;
		}
	};

	// create handlePageChange method to set the state
	const handlePageChange = (page) => setCurrentPage(page);

	return (
		<div className="App">
			{/* Pass Variables through to navbar */}
			<Navbar
				currentPage={currentPage}
				handlePageChange={handlePageChange}
			></Navbar>
			{/* Render component based off currentPage state */}
			{renderPage()}
		</div>
	);
}

export default App;
