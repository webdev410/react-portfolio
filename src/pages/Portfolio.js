import React from "react";
import "../css/Portfolio.css";

import PortfolioCard from "../components/PortfolioCard";

export default function Portfolio() {
	return (
		<div className="container">
			<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
				<PortfolioCard></PortfolioCard>
			</div>
		</div>
	);
}
