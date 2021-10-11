import React, { useState, useEffect } from "react";

import "../css/Resume.css";

import Technologies from "../components/ResumeTechnologies";
import ResumeMain from "../components/ResumeMain";
import ResumeNav from "../components/ResumeNav";

export default function Resume(props) {
	const [currentModule, setModule] = useState("title");

	const renderModule = () => {
		if (currentModule === "technologies") {
			return <Technologies></Technologies>;
		} else {
			return <ResumeMain title="Resume"></ResumeMain>;
		}
	};
	const handleModuleChange = (module) => setModule(module);
	useEffect(() => {
		document.title = `${props.title}`;
	});
	return (
		<div>
			{renderModule()}
			<ResumeNav
				currentModule={currentModule}
				handleModuleChange={handleModuleChange}
			></ResumeNav>
		</div>
	);
}
