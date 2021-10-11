import React from "react";

export default function ResumeEducation() {
	return (
		<div>
			<h1 className="display-5 fw-bold">Education</h1>

			<div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
				<div className="feature col">
					<div className="feature-icon bg-gradient">
						<img
							src="img/godaddy.png"
							className="university-logo"
							alt=""
						/>
					</div>
				</div>
				<div className="feature col">
					<div className="feature-icon bg-gradient">
						<img
							src="img/dhs.png"
							className="university-logo"
							alt=""
						/>
					</div>
				</div>
				<div className="feature col">
					<div className="feature-icon bg-gradient">
						<img
							src="img/ticketmaster.png"
							className="university-logo"
							alt=""
						/>
					</div>
				</div>
			</div>
			<div className="row g-4 py-2 row-cols-1 row-cols-lg-3">
				<div className="feature col">
					<h2>GoDaddy</h2>
					<p>Hosting Sales & Support</p>
				</div>
				<div className="feature col">
					<h2>Department of Homeland Security</h2>
					<p>Technical Support</p>
				</div>
				<div className="feature col">
					<h2>Ticketmaster</h2>
					<p>Product Support</p>
				</div>
			</div>
			<div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
				<div className="feature col">
					<code>2020-2021</code>
				</div>
				<div className="feature col">
					<code>2020</code>
				</div>
				<div className="feature col">
					<code>2015-2018</code>
				</div>
			</div>
		</div>
	);
}
