import { PortableTextBlock } from "sanity";

export type ProfileType = {
	_id: string;
	fullName: string;
	headline: string;
	profileImage: {
		alt: string;
		image: string;
	};
	shortBio: string;
	email: string;
	fullBio: PortableTextBlock[];
	location: string;
	resumeURL: string;
	socialLinks: string[];
};

export type JobType = {
	_id: string;
	name: string;
	jobTitle: string;
	logo: string;
	url: string;
	description: string;
	startDate: Date;
	endDate: Date;
	isCurrentlyWorkingHere: boolean;
};

export type ProjectType = {
	_id: string;
	name: string;
	slug: string;
	tagline: string;
	projectUrl: string;
	githubUrl: string;
	logo: string;
	coverImage: {
		alt: string | null;
		image: string;
	};
	description: string;
};
