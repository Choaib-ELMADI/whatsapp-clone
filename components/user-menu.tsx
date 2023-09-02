"use client";

import { Settings, UserCircle2 } from "lucide-react";
import { useState } from "react";

import MenuItems from "./menu-items";

const UserMenu = () => {
	const [activeMenuItem, setActiveMenuItem] = useState<string | null>(null);

	const handleClick = (item: string) => {
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
				onClick={() => handleClick("Help")}
			>
				<Settings className="w-5 h-5" />
			</button>
			<button
				className="w-full flex justify-center py-2 rounded-sm hover:bg-hovery transition-all"
				onClick={() => handleClick("Profile")}
			>
				<UserCircle2 className="w-5 h-5" />
			</button>

			<MenuItems
				activeMenuItem={activeMenuItem}
				setActiveMenuItem={setActiveMenuItem}
			/>
		</div>
	);
};

export default UserMenu;
