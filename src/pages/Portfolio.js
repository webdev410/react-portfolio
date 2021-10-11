import React, { useEffect } from "react";
import "../css/Portfolio.css";

import PortfolioCard from "../components/PortfolioCard";

const portfolioItems = [
	{
		title: "Full Portfolio",
		repo: "https://github.com/webdev410/andrewkeiser-portfolio",
		deployed: "https://www.andrewkeiser.me/",
	},
	{
		title: "Invoicing System",
		repo: "https://github.com/webdev410/invoice-system",
		deployed: "https://invoice-tech.herokuapp.com/",
	},
	{
		title: "Note Taker Application",
		repo: "https://github.com/webdev410/notes-app",
		deployed: "https://salty-fortress-76405.herokuapp.com/",
	},
	{
		title: "CMS Blog",
		repo: "https://www.github.com/webdev410/blog",
		deployed: "https://secure-spire-42375.herokuapp.com/",
	},
	{
		title: "Workout Tracker",
		repo: "https://github.com/webdev410/workout-tracker-app",
		deployed: "https://mongoose-workout-plan.herokuapp.com/",
	},
	{
		title: "Budget Tracker",
		repo: "https://github.com/webdev410/budget-tracker",
		deployed: "https://budget-trx.herokuapp.com/",
	},
	{
		title: "Team Profile Generator",
		repo: "https://github.com/webdev410/team-profile-generator",
		deployed: "#",
	},
	{
		title: "Employee Tracker",
		repo: "https://github.com/webdev410/employee-tracker",
		deployed: "#",
	},
	{
		title: "eCommerce Backend",
		repo: "https://github.com/webdev410/ecommerce-backend",
		deployed: "#",
	},
];

export default function Portfolio(props) {
	useEffect(() => {
		document.title = `${props.title} | React Portfolio`;
	});
	return (
		<div>
			<h1 className="display-5 fw-bold">{props.title}</h1>
			<div className="container">
				<p>
					This is simply a react version of my portfolio. A full
					portfolio can be found
					<a className="m-1" href="https://www.andrewkeiser.me">
						here.
					</a>
				</p>
				<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
					{portfolioItems.map((site) => (
						<PortfolioCard
							title={site.title}
							repo={site.repo}
							deployed={site.deployed}
						></PortfolioCard>
					))}
				</div>
			</div>
		</div>
	);
}
