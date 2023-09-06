"use client";

import { SignIn } from "@clerk/nextjs";
import { useTheme } from "next-themes";

export default function Page() {
	const { resolvedTheme } = useTheme();

	return (
		<div className="w-full min-h-[calc(100vh-45px)] py-4 overflow-auto flex justify-center items-center">
			<SignIn
				appearance={{
					variables: {
						colorPrimary: "#00a884",
						colorBackground: resolvedTheme === "dark" ? "#686868" : "#fff",
						colorText: resolvedTheme === "dark" ? "#e0e0e0" : "#000",
					},
				}}
			/>
		</div>
	);
}
