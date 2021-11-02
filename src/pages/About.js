import React, { useEffect } from "react";
import "../css/About.css";

export default function About(props) {
	useEffect(() => {
		document.title = `${props.title} | React Portfolio`;
	});
	return (
		<div className="fadeIn">
			<div className="px-4 py-5 my-5 text-center">
				<img
					className="profile-pic d-block mx-auto mb-4"
					src="img/andrew.png"
					alt=""
				/>
				<h1 className="display-5 fw-bold">About</h1>
				<div className="col-lg-7 mx-auto">
					<p>
						I recently obtained a certificate in Full-Stack
						Development from Johns Hopkins University and am
						currently seeking full-time employment as a software
						developer. I have a background in IT working as Network
						Operations and Technical Support amongst other roles.
						I’ve always had a knack for technology but I feel I’ve
						finally found my calling with software development. I
						feel confident with the front and backend technologies
						that were covered in this course and I worked very hard
						to maintain an A+ academic average and to develop my
						skills beyond the typical boot camp graduate.
					</p>
					<p>
						I am highly-motivated and love learning new things. I
						have taught myself a variety of different skills and
						always dive in passionately with both feet. Previous to
						completing this bootcamp, I ran a successful band and
						was able to work as a self-employed musician for 5
						years. I ran a successful business that grossed over
						$100,000 per year for 3 of those 5 years and dominated
						our local market. I self-taught myself audio-engineering
						at a very high level and put together a live show that
						included complex musical technologies. We dominated our
						local market and had many once in a lifetime
						experiences.
					</p>
					<p>
						I also have much experience working from home as I was
						an AppleCare At-Home Advisor in college and was allowed
						to work from home while working for Ticketmaster. As I
						previously said, I feel I’ve found my calling during
						this boot camp and I am eager to join the workforce.
					</p>
				</div>
			</div>
		</div>
	);
}
