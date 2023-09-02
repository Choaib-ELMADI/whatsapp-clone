"use client";

import { MoonStar, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const SwitchTheme = () => {
	const { resolvedTheme, setTheme } = useTheme();

	return (
		<div
			className="cursor-pointer"
			onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
		>
			{resolvedTheme === "dark" ? (
				<MoonStar className="w-6 h-6" />
			) : (
				<Sun className="w-6 h-6" />
			)}
		</div>
	);
};

export default SwitchTheme;
