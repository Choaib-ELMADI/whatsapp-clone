import { ClerkProvider } from "@clerk/nextjs";
const inter = Inter({ subsets: ["latin"] });
import { Inter } from "next/font/google";
import type { Metadata } from "next";

import Sidebar from "@/components/sidebar";
import Header from "@/components/header";
import Providers from "./providers";
import { cn } from "@/lib/utils";
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
		<ClerkProvider>
			<html
				lang="en"
				className="dark custom-scrollbar"
				style={{ colorScheme: "dark" }}
			>
				<body className={cn("max-w-[2000px] mx-auto", inter.className)}>
					<Providers>
						<Header />
						{children}
					</Providers>
				</body>
			</html>
		</ClerkProvider>
	);
}
