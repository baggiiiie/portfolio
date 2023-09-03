/** @type {import('next').NextConfig} */
const nextConfig = {
	rewrites() {
		return {
			beforeFiles: [
				// if the host is `app.acme.com`,
				// this rewrite will be applied
				{
					source: "/:path*",
					has: [
						{
							type: "host",
							value: "project1.yingchaoooo.me",
						},
					],
					destination: "/project1/:path*",
				},
			],
		};
	},
};

module.exports = nextConfig;
