"use client";

import { ThemeProvider } from "next-themes";
import { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";

const Providers = ({ children }: { children: React.ReactNode }) => {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return;

	return (
		<ThemeProvider attribute="class">
			<Toaster />
			{children}
		</ThemeProvider>
	);
};

export default Providers;
