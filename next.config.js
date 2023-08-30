/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		// remotePatterns: [
		// 	{
		// 		protocol: "http",
		// 		hostname: "**",
		// 	},
		// ],
		domains: [
			"lh3.googleusercontent.com",
			"www.google.com",
			"avatars.githubusercontent.com",
		],
	},
};

module.exports = nextConfig;
