import React from "react";
// import FontAwesomeIcon from "@fortawesome/fontawesome-pro";
// import { faBars } from "@fortawesome/pro-regular-svg-icons";

export default function Resume() {
	return (
		<div>
			<div className="px-4 py-5 my-5 text-center">
				<h1 className="display-5 fw-bold">Resume</h1>
				<div className="col-lg-6 mx-auto">
					<p className="lead mb-4">
						Quickly design and customize responsive mobile-first
						sites with Bootstrap, the world’s most popular front-end
						open source toolkit, featuring Sass variables and
						mixins, responsive grid system, extensive prebuilt
						components, and powerful JavaScript plugins.
					</p>
					<div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
						<a
							href="/assets/andrew-keiser-resume.docx"
							download="andrew-keiser-resume.docx"
						>
							<button
								type="button"
								className="btn btn-primary btn-lg px-4 gap-3"
							>
								Download .docx
							</button>
						</a>
						<a
							href="/assets/andrew-keiser-resume.pdf"
							download="andrew-keiser-resume.pdf"
						>
							<button
								type="button"
								className="btn btn-outline-secondary btn-lg px-4"
							>
								Download PDF
							</button>
						</a>
					</div>
				</div>
			</div>
			<div className="container col-xxl-8 px-4 py-5">
				<div className="row flex-lg-row-reverse align-items-center g-5 py-5">
					<div className="col-10 col-sm-8 col-lg-6">
						<img
							src="img/screenshot-2.png"
							className="d-block mx-lg-auto img-fluid"
							alt="Bootstrap Themes"
							width="700"
							height="500"
							loading="lazy"
						></img>
					</div>
					<div className="col-lg-6">
						<h1 className="display-5 fw-bold lh-1 mb-3">
							Responsive left-aligned hero with image
						</h1>
						<p className="lead">
							Quickly design and customize responsive mobile-first
							sites with Bootstrap, the world’s most popular
							front-end open source toolkit, featuring Sass
							variables and mixins, responsive grid system,
							extensive prebuilt components, and powerful
							JavaScript plugins.
						</p>
						<div className="d-grid gap-2 d-md-flex justify-content-md-start">
							<button
								type="button"
								className="btn btn-primary btn-lg px-4 me-md-2"
							>
								Primary
							</button>
							<button
								type="button"
								className="btn btn-outline-secondary btn-lg px-4"
							>
								Default
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
