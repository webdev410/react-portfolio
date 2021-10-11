import React, { useEffect } from "react";

export default function Home(props) {
	useEffect(() => {
		document.title = `${props.title}`;
	});
	return (
		<div>
			<h1 className="display-5 fw-bold">{props.title}</h1>
		</div>
	);
}
