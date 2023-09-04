/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		serverActions: true,
	},
	images: {
		remotePatterns: [
			{
				hostname: "img.clerk.com",
			},
			{
				hostname: "firebasestorage.googleapis.com",
			},
		],
	},
};

module.exports = nextConfig;
