import React from "react";

export default function ResumeNav({ currentModule, handleModuleChange }) {
	return (
		<div>
			<div class="container">
				<header class="d-flex justify-content-center py-3">
					<ul class="nav nav-pills">
						<li class="nav-item">
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
						</li>
						<li class="nav-item">
							<a
								// if this is the current page, set to active link otherwise just be a nav-link
								className={
									currentModule === "education"
										? "nav-link active"
										: "nav-link"
								}
								href="#technologies"
								onClick={() => handleModuleChange("education")}
							>
								Education
							</a>
						</li>
						<li class="nav-item">
							<a
								// if this is the current page, set to active link otherwise just be a nav-link
								className={
									currentModule === "experience"
										? "nav-link active"
										: "nav-link"
								}
								href="#technologies"
								onClick={() => handleModuleChange("experience")}
							>
								Experience
							</a>
						</li>
						<li class="nav-item">
							<a
								// if this is the current page, set to active link otherwise just be a nav-link
								className={
									currentModule === "technologies"
										? "nav-link active"
										: "nav-link"
								}
								href="#technologies"
								onClick={() =>
									handleModuleChange("technologies")
								}
							>
								Technologies
							</a>
						</li>
					</ul>
				</header>
			</div>
		</div>
	);
}
