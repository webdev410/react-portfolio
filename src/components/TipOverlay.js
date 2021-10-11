import React from "react";
import { Tooltip } from "react-bootstrap";
import { OverlayTrigger } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/pro-regular-svg-icons";

export default function TipOverlay() {
	const sites = [
		{
			name: "Github",
			url: "https://github.com/webdev410",
			iconClass: "bi bi-github",
		},
		{
			name: "LinkedIn",
			url: "https://github.com/webdev410",
			iconClass: "bi bi-linkedin",
		},
		{
			name: "Portfolio",
			url: "https://andrewkeiser.me",
			iconClass: "bi bi-globe2",
		},
	];

	const renderIcon = (sites) => {
		if (sites.name === "Github") {
			return <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>;
		} else if (sites.name === "LinkedIn") {
			return <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>;
		} else {
			return <FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon>;
		}
	};
	return (
		<div className="d-flex flex-row">
			{sites.map((site) => (
				<li className="ms-3">
					<OverlayTrigger
						key={site.name}
						placement="top"
						overlay={
							<Tooltip id={`tooltip-${site.name}`}>
								{site.name}
							</Tooltip>
						}
					>
						<button className="footer-icon">
							<a
								className="text-muted"
								target="blank"
								href={site.url}
							>
								{renderIcon(site)}
							</a>
						</button>
					</OverlayTrigger>
				</li>
			))}
		</div>
	);
}
