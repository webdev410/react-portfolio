import React, { useState, useEffect } from "react";
import { validateEmail } from "../utils/helpers";

export default function Contact(props) {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	useEffect(() => {
		document.title = `${props.title}`;
	});

	const handleInputChange = (e) => {
		// Getting the value and name of the input which triggered the change
		const { target } = e;
		const inputType = target.name;
		const inputValue = target.value;

		console.log(target.value.length);

		// Based on the input type, we set the state of either email, username, and password
		if (inputType === "email") {
			setEmail(inputValue);
		} else if (inputType === "name") {
			setName(inputValue);
		} else {
			setMessage(inputValue);
		}
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
		// make sure inputs are not empty
		if (name.length === 0) {
			alert("You must enter a name");
			return;
		}
		if (email.length === 0) {
			alert("You must enter a email");
			return;
		}
		if (message.length === 0) {
			alert("You must enter a message");
			return;
		}
		// check if it's a valid email
		if (!validateEmail(email)) {
			alert("Please enter a valid email");
			return;
		}

		alert(`Thank you for your message, ${name}!`);

		// If everything goes according to plan, we want to clear out the input after a successful registration.
		setName("");
		setEmail("");
		setMessage("");
	};

	return (
		<div className="form-signin">
			<h1 className="display-5 fw-bold">{props.title}</h1>
			<div className="d-flex justify-content-center">
				<form className="" action="POST">
					<input
						className="form-control"
						name="name"
						onChange={handleInputChange}
						value={name}
						type="text"
						placeholder="Name"
					/>
					<input
						className="form-control"
						name="email"
						value={email}
						onChange={handleInputChange}
						type="text"
						placeholder="Email"
					/>
					<input
						className="form-control"
						name="message"
						value={message}
						onChange={handleInputChange}
						type="text"
						placeholder="Message"
					/>
					<button type="button" onClick={handleFormSubmit}>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
}
