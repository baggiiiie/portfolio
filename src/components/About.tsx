"use client";
import React from "react";
import { motion } from "framer-motion";
import { ProfileType } from "@/src/types";
import { PortableText } from "@portabletext/react";

type Props = {
	profile: ProfileType;
};

function About({ profile }: Props) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className="pageDiv space-y-0"
		>
			<h3 className="pageTitle">About</h3>
			<div
				className="
                pageContent mt-0
                flex flex-col
                md:flex-row
                text-center md:text-left
                "
			>
				<motion.img
					className="m-auto mb-10 md:my-auto
                    flex-shrink-0 w-56 rounded-full
                    object-cover md:rounded-lg md:w-64 md:h-95 
                    xl:w-[400px] xl:h-[400px]"
					initial={{
						x: -200,
						opacity: 0,
					}}
					transition={{
						duration: 1.5,
					}}
					whileInView={{
						x: 0,
						opacity: 1,
					}}
					src={`${profile.profileImage}`}
					alt="profile image"
				/>
				<div className="space-y-10 px-0 md:pl-10 leading-7 lg:leading-10">
					<h4
						className="relative text-4xl font-semibold 
                        md:mt-10"
					>
						{profile.shortBio}
					</h4>
					<div className="space-y-5">
						<PortableText value={profile.fullBio} />
					</div>
				</div>
			</div>
		</motion.div>
	);
}

export default About;
