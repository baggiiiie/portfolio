import React from "react";
import { useRouter } from "next/router";
const Blog1: React.FC = () => {
	const router = useRouter();
	const { slug } = router.query;

	return (
		<div>
			<h1>My First Blog {slug}</h1>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
				consectetur, justo nec aliquam ultricies, nunc nunc tincidunt nunc, id
				aliquam nunc nunc vitae nunc. Sed auctor, nisl id consectetur
				ullamcorper, nunc nunc tincidunt nunc, id aliquam nunc nunc vitae nunc.
				Sed auctor, nisl id consectetur ullamcorper.
			</p>
			<p>
				Nunc nunc tincidunt nunc, id aliquam nunc nunc vitae nunc. Sed auctor,
				nisl id consectetur ullamcorper, nunc nunc tincidunt nunc, id aliquam
				nunc nunc vitae nunc. Sed auctor, nisl id consectetur ullamcorper.
			</p>
		</div>
	);
};

export default Blog1;
