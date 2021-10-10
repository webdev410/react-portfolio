import React from "react";
import "../css/Portfolio.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFirefoxBrowser, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function PortfolioCopy() {
	return (
		<div className="">
			<h1>Portfolio</h1>
			<div className=" d-flex justify-content-around ">
				{/* Portfolio */}
				<div className="tile d-flex justify-content-around align-items-center ">
					<h3 className="portfolio-title">Portfolio</h3>
					<div className="links d-flex flex-column">
						<div>
							<a
								href="https://andrewkeiser.me"
								target="blank"
								type=""
								className=""
							>
								<FontAwesomeIcon
									className="portfolio-icon m-4"
									icon={faFirefoxBrowser}
								></FontAwesomeIcon>
							</a>
						</div>
						<div className="">
							<a
								href="https://andrewkeiser.me"
								target="blank"
								type="button"
								className=""
							>
								<FontAwesomeIcon
									className="portfolio-icon m-4  text-center "
									icon={faGithub}
								></FontAwesomeIcon>
							</a>
						</div>
					</div>
				</div>
				{/* Blog */}
				<div className="tile d-flex justify-content-around align-items-center ">
					<h3 className="portfolio-title">Blog</h3>
					<div className="links d-flex flex-column">
						<div>
							<a
								href="https://webdev.github.io/blog"
								target="blank"
								type=""
								className=""
							>
								<FontAwesomeIcon
									className="portfolio-icon m-4"
									icon={faFirefoxBrowser}
								></FontAwesomeIcon>
							</a>
						</div>
						<div className="">
							<a
								href="https://andrewkeiser.me"
								target="blank"
								type="button"
								className=""
							>
								<FontAwesomeIcon
									className="portfolio-icon m-4  text-center "
									icon={faGithub}
								></FontAwesomeIcon>
							</a>
						</div>
					</div>
				</div>
				{/* Invoice System */}
				<div className="tile d-flex justify-content-around align-items-center ">
					<h3 className="portfolio-title">Invoice System</h3>
					<div className="links d-flex flex-column">
						<div>
							<a
								href="https://webdev.github.io/blog"
								target="blank"
								type=""
								className=""
							>
								<FontAwesomeIcon
									className="portfolio-icon m-4"
									icon={faFirefoxBrowser}
								></FontAwesomeIcon>
							</a>
						</div>
						<div className="">
							<a
								href="https://andrewkeiser.me"
								target="blank"
								type="button"
								className=""
							>
								<FontAwesomeIcon
									className="portfolio-icon m-4  text-center "
									icon={faGithub}
								></FontAwesomeIcon>
							</a>
						</div>
					</div>
				</div>
				{/* eCommerce Backend */}
				<div className="tile d-flex justify-content-around align-items-center ">
					<h3 className="portfolio-title">eCommerce Backend</h3>
					<div className="links d-flex flex-column">
						<div>
							<a
								href="https://webdev.github.io/blog"
								target="blank"
								type=""
								className=""
							>
								<FontAwesomeIcon
									className="portfolio-icon m-4"
									icon={faFirefoxBrowser}
								></FontAwesomeIcon>
							</a>
						</div>
						<div className="">
							<a
								href="https://andrewkeiser.me"
								target="blank"
								type="button"
								className=""
							>
								<FontAwesomeIcon
									className="portfolio-icon m-4  text-center "
									icon={faGithub}
								></FontAwesomeIcon>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
