"use client";
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";
import { ProfileType } from "@/src/types";
import { useNavigate, Link } from "react-router-dom";

type Props = {
	profile: ProfileType;
};

export default function Hero({ profile }: Props) {
	function handleClick(id: any) {
		document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
	}

	const [text, count] = useTypewriter({
		words: ["So you've found my website", "Welcome", "Have a look around"],
		loop: 1,
		delaySpeed: 2000,
	});

	return (
		<div
			className="pageDiv
            text-center -mt-[25vh]
            h-[135vh] "
		>
			<BackgroundCircle />
			<img
				className="relative rounded-full 
                h-32 w-32
                mx-auto object-cover"
				src="sticker2.png"
				alt="Welcome Image"
			/>
			<div className="z-20">
				<h2
					className=" text-sm uppercase text-gray-500 
                    pb-2 tracking-[15px] 
                    w-[80%] mx-auto
                    text-center justify-center items-center "
				>
					{profile?.headline}
				</h2>
				<h1 className="text-5xl lg:text-6xl font-semibold px-10">
					<span>{text}</span>
					<Cursor />
				</h1>
				<div className="pt-5">
					<button className="heroButton" onClick={() => handleClick("about")}>
						About
					</button>
					{/* <button
						className="heroButton"
						onClick={() => handleClick("experiences")}
					>
						Experiences
					</button>
					<button
						className="heroButton"
						onClick={() => handleClick("projects")}
					>
						Projects
					</button> */}
					<button className="heroButton" onClick={() => handleClick("contact")}>
						Contact
					</button>
					<a href="/blog">
						<button className="heroButton">Blog</button>
					</a>
				</div>
			</div>
		</div>
	);
}
