const inter = Inter({ subsets: ["latin"] });
import { Inter } from "next/font/google";
import type { Metadata } from "next";

import Providers from "./providers";
import "./globals.css";

export const metadata: Metadata = {
	title: "WhatsUp Web",
	description: "Whatsapp Web Application Clone",
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
					<main>{children}</main>
				</Providers>
			</body>
		</html>
	);
}
