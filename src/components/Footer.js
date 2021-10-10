import React from "react";
import LinkedinTooltip from "./LinkedinTooltip";

export default function Footer() {
	return (
		<div>
			<div className="container">
				<footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
					<div className="col-md-4 d-flex align-items-center">
						<span className="text-muted">© 2021 Andrew Keiser</span>
					</div>

					<ul className="nav col-md-4 justify-content-end list-unstyled d-flex footer-list">
						<LinkedinTooltip></LinkedinTooltip>
					</ul>
				</footer>
			</div>
		</div>
	);
}
