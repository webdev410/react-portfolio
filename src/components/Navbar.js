import React from "react";

export default function Navbar({ currentPage, handlePageChange }) {
	return (
		<div>
			<div className="navbar">
				<a
					className={
						currentPage === "Home" ? "nav-link active" : "nav-link"
					}
					href="#home"
					onClick={() => handlePageChange("Home")}
				>
					Home
				</a>
				<a
					className="nav-link"
					href="#about"
					onClick={() => handlePageChange("About")}
				>
					About
				</a>
				<a
					className="nav-link"
					href="#portfolio"
					onClick={() => handlePageChange("Portfolio")}
				>
					Portfolio
				</a>
				<a
					className="nav-link"
					href="#resume"
					onClick={() => handlePageChange("Resume")}
				>
					Resume
				</a>
				<a
					className="nav-link"
					href="#contact"
					onClick={() => handlePageChange("Contact")}
				>
					Contact
				</a>
			</div>
		</div>
	);
}
