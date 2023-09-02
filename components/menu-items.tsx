"use client";

import { Info, UserCircle2 } from "lucide-react";

import ProfileDetails from "./profile-details";
import { cn } from "@/lib/utils";
import Help from "./help";

const profileLinks = [
	{
		icon: Info,
		label: "Help",
	},
	{
		icon: UserCircle2,
		label: "Profile",
	},
];

const components: Record<string, JSX.Element> = {
	Help: <Help />,
	Profile: <ProfileDetails />,
};

const MenuItems = ({
	activeMenuItem,
	setActiveMenuItem,
}: {
	activeMenuItem: string | null;
	setActiveMenuItem: (item: string) => void;
}) => {
	return (
		<div
			className={cn(
				"absolute left-[46px] bottom-1 bg-backgound border border-white dark:border-black text-text w-[calc(100%-50px)] max-w-[500px] h-[calc(100vh-48px)] max-h-[500px] rounded-lg translate-y-[110%] transition-all custom-scrollbar overflow-auto flex",
				activeMenuItem !== null && "translate-y-0"
			)}
		>
			<div className="flex flex-col gap-1 p-1 w-[160px] bg-backgound border-r border-white dark:border-black">
				{profileLinks.map((link) => (
					<button
						key={link.label}
						onClick={() => setActiveMenuItem(link.label)}
						className={cn(
							"flex items-center gap-3 text-tiny p-2 rounded-sm hover:bg-hovery",
							activeMenuItem === link.label &&
								"bg-hovery relative before:absolute before:content-[''] before:top-[50%] before:translate-y-[-50%] before:left-0 before:w-[3px] before:h-4 before:bg-brand before:rounded-sm"
						)}
					>
						<link.icon className="w-5 h-5" />
						{link.label}
					</button>
				))}
			</div>
			<div className="flex-1 bg-custom_03 p-4">
				{components[activeMenuItem!]}
			</div>
		</div>
	);
};

export default MenuItems;
