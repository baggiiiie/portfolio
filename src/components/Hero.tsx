"use client";
import React, { useRef } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";
import Link from "next/link";
import { ProfileType } from "@/src/types";
import { animate } from "framer-motion";

type Props = {
	profile: ProfileType;
};

export default function Hero({ profile }: Props) {
	function handleClick(id: any) {
		document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
	}

	const [text, count] = useTypewriter({
		words: [
			"So you've found my website",
			"Well, welcome i guess",
			"Have a look around",
		],
		loop: 1,
		delaySpeed: 2000,
	});

	return (
		<div
			className="
            pageDiv
            text-center -mt-[25vh]
            h-[135vh]
        "
		>
			<BackgroundCircle />
			<img
				className="relative rounded-full h-20 w-20 mx-auto object-cover"
				src="sticker.png"
				alt="profile pic"
			/>
			<div className="z-20">
				<h2
					className="
                    text-sm uppercase text-gray-500 
                    pb-2 tracking-[15px] 
                    w-[80%] mx-auto
                    text-center justify-center items-center
                "
				>
					{profile?.headline}
				</h2>
				<h1 className="text-5xl lg:text-6xl font-semibold px-10">
					<span>{text}</span>
					<Cursor />
				</h1>
				<div className="pt-5">
					{/* <Link href="#about"> */}
					<button className="heroButton" onClick={() => handleClick("about")}>
						About
					</button>
					{/* </Link> */}
					{/* <Link href="#experiences"> */}
					<button
						className="heroButton"
						onClick={() => handleClick("experiences")}
					>
						Experiences
					</button>
					{/* </Link> */}
					{/* <Link href='#skills'>
                        <button className='heroButton'>Skills</button>
                    </Link> */}
					{/* <Link href="#projects"> */}
					<button
						className="heroButton"
						onClick={() => handleClick("projects")}
					>
						Projects
					</button>
					{/* </Link> */}
					{/* <Link href='#contact'> */}
					<button className="heroButton" onClick={() => handleClick("contact")}>
						Contact
					</button>
					{/* </Link> */}
				</div>
			</div>
		</div>
	);
}
