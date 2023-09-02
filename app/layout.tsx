const inter = Inter({ subsets: ["latin"] });
import { Inter } from "next/font/google";
import type { Metadata } from "next";

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
		<html lang="en" className="dark" style={{ colorScheme: "dark" }}>
			<body className={inter.className}>
				<Providers>
					<Header />
					<main>{children}</main>
				</Providers>
			</body>
		</html>
	);
}
