"use client";
import React from "react";
import Link from "next/link";
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
const BlogPage: React.FC = ({ allPostsData }:any) => {
	return (
		// page div
		<div
			className="bg-white
			text-black
			text-center
		"
		>
			{/* display sheet div */}
			<div
				className="w-[70%] max-w-[800px]
				h-[100vh] py-10
			bg-gray-100 m-auto"
			>
				{/* header div */}
				<div className="py-5">
					<h1 className="font-semibold text-2xl pb-2">
						My thoughts and gibberish
					</h1>
					<h2 className="text-sm italic">This is your hackernews style blog</h2>
				</div>
				{/* content div */}
				<div className="px-20">
					{/* individual blog div */}
					
					{allPostsData.map(( { id, date, title } )) => (
					<p>{id}</p>
					)}

					<Link href="/blog/blog-1">
						<div className="flex justify-between hover:underline hover:bg-blue-100 px-4 hover:cursor-pointer">
							<p className="">This is a test for blog title</p>
							<p>2023/12/31</p>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default BlogPage;
