"use client";

import { useTheme } from "next-themes";

import { Switch } from "./ui/switch";

const SwitchTheme = () => {
	const { resolvedTheme, setTheme } = useTheme();

	return (
		<div>
			<Switch
				id="dark-light-mode"
				checked={resolvedTheme === "dark"}
				onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
			/>
			<label htmlFor="dark-light-mode">Dark mode</label>
		</div>
	);
};

export default SwitchTheme;
