"use client";

import { Settings, UserCircle2 } from "lucide-react";
import { useState } from "react";

import SettingsMenu from "./settings";
import Profile from "./profile";

const UserMenu = () => {
	const [activeMenuItem, setActiveMenuItem] = useState<
		"settings" | "profile" | null
	>(null);

	const handleClick = (item: "settings" | "profile") => {
		if (activeMenuItem !== item) {
			setActiveMenuItem(item);
		} else {
			setActiveMenuItem(null);
		}
	};

	return (
		<div className="flex flex-col gap-1">
			<button
				className="w-full flex justify-center py-2 rounded-sm hover:bg-hovery transition-all"
				onClick={() => handleClick("settings")}
			>
				<Settings className="w-5 h-5" />
			</button>
			<button
				className="w-full flex justify-center py-2 rounded-sm hover:bg-hovery transition-all"
				onClick={() => handleClick("profile")}
			>
				<UserCircle2 className="w-5 h-5" />
			</button>

			<SettingsMenu activeMenuItem={activeMenuItem} />
			<Profile activeMenuItem={activeMenuItem} />
		</div>
	);
};

export default UserMenu;
