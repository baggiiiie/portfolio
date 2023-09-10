"use client";
import React from "react";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/20/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
	firstname: string;
	lastname: string;
	email: string;
	message: string;
};

type Props = {};

function Contact({}: Props) {
	const { register, handleSubmit } = useForm<Inputs>();
	const onSubmit: SubmitHandler<Inputs> = (data) => {
		window.location.href = `mailto:yingchao.dai22@gmail.com?subject=${data.firstname}
            &body=${data.message}`;
	};

	return (
		<div className="pageDiv">
			<h3 className="pageTitle">Contact</h3>
			<div className="m-auto flex flex-col space-y-5 pageContent justify-start">
				<h4 className="text-4xl font-semibold text-center">
					Drop a&nbsp;
					<span className=" decoration-gray-100/50 underline">message</span>
					&nbsp;here
				</h4>
				<div className="space-y-1 w-3/4">
					<div className="flex items-center space-x-5 justify-center">
						<EnvelopeIcon className="text-white h-7 w-7 animate-pulse" />
						<p className="text-2x1">Message is sent via email</p>
					</div>
					<div className="flex items-center space-x-5 justify-center">
						<MapPinIcon className="text-white h-7 w-7 animate-pulse" />
						<p className="text-2x1">Singapore / China</p>
					</div>
					<form
						onSubmit={handleSubmit(onSubmit)}
						className="
                        flex flex-col space-y-2 
                        w-full mx-auto justify-center "
					>
						<div
							className="
                            flex flex-col space-y-2
                            md:flex-row md:space-x-2 md:space-y-0
                            justify-center items-stretch
                            mt-5 "
						>
							<input
								{...register("firstname")}
								className="contactInput w-full"
								type="text"
								placeholder="First Name"
							/>
							<input
								{...register("lastname")}
								className="contactInput w-full"
								type="text"
								placeholder="Last Name"
							/>
						</div>
						<input
							{...register("email")}
							className="contactInput"
							type="email"
							placeholder="Email"
						/>
						<textarea
							{...register("message")}
							className="contactInput"
							placeholder="Message"
						/>
						<button className="contactButton">Submit</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Contact;
