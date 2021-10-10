import React, { useState } from "react";

import "./css/App.css";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Footer from "./components/Footer";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
	fab,
	faLinkedin,
	faGit,
	faFirefoxBrowser,
} from "@fortawesome/free-brands-svg-icons";

library.add(fab, faLinkedin, faGit, faFirefoxBrowser);

function App() {
	const [currentPage, setCurrentPage] = useState("About");

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
		<div className="App d-flex flex-column justify-content-between">
			{/* Pass Variables through to navbar */}
			<Navbar
				currentPage={currentPage}
				handlePageChange={handlePageChange}
			></Navbar>
			{/* Render component based off currentPage state */}
			{renderPage()}
			<div className="">
				<Footer className=""></Footer>
			</div>
		</div>
	);
}

export default App;
