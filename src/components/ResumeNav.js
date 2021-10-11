import React from "react";

export default function ResumeNav({ currentModule, handleModuleChange }) {
	return (
		<div>
			<div className="navbar">
				<a
					// if this is the current page, set to active link otherwise just be a nav-link
					className={
						currentModule === "title"
							? "nav-link active"
							: "nav-link"
					}
					href="#technologies"
					onClick={() => handleModuleChange("title")}
				>
					Resume
				</a>
				<a
					// if this is the current page, set to active link otherwise just be a nav-link
					className={
						currentModule === "technologies"
							? "nav-link active"
							: "nav-link"
					}
					href="#technologies"
					onClick={() => handleModuleChange("technologies")}
				>
					Technologies
				</a>
			</div>
		</div>
	);
}
