import React, { useEffect } from "react";
import "../css/About.css";

export default function About(props) {
	useEffect(() => {
		document.title = `${props.title}`;
	});
	return (
		<div>
			<div className="px-4 py-5 my-5 text-center">
				<img
					className="profile-pic d-block mx-auto mb-4"
					src="img/andrew.png"
					alt=""
				/>
				<h1 className="display-5 fw-bold">About</h1>
				<div className="col-lg-6 mx-auto">
					<p>
						Motivated software developer with a background in IT
						troubleshooting. Experience with analytical thinking,
						project management, strong team skills and excellent
						verbal and written communication ability. Comfortable in
						high-pressure, time-sensitive situations. Able to
						resolve conflicts between parties in a professional
						environment to harness productivity and positive
						business relationships. Willingness and ability to learn
						and takes pride in producing high quality work.
					</p>
				</div>
				<div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
					<button className="btn btn-primary btn-lg px-4 gap-3">
						Projects
					</button>
					<button className="btn btn-outline-secondary btn-lg px-4 gap-3">
						Contact
					</button>
				</div>
			</div>
		</div>
	);
}
