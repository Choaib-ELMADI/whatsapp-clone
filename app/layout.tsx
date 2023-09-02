const inter = Inter({ subsets: ["latin"] });
import { Inter } from "next/font/google";
import type { Metadata } from "next";

import Sidebar from "@/components/sidebar";
import Header from "@/components/header";
import Providers from "./providers";
import "./globals.css";

export const metadata: Metadata = {
	title: "Whatsup Web",
	description:
		"Whatsapp Web Application Clone. Simple, Secure, & Reliable Messaging.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			className="dark h-screen overflow-hidden"
			style={{ colorScheme: "dark" }}
		>
			<body className={inter.className}>
				<Providers>
					<Header />
					<main className="flex">
						<Sidebar />
						{children}
					</main>
				</Providers>
			</body>
		</html>
	);
}
