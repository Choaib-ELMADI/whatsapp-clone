import { cn } from "@/lib/utils";

const SettingsMenu = ({
	activeMenuItem,
}: {
	activeMenuItem: "settings" | "profile" | null;
}) => {
	return (
		<div
			className={cn(
				"absolute left-[46px] bottom-1 bg-red-400 text-text w-[400px] h-[400px] rounded-lg translate-y-[110%] transition-all",
				activeMenuItem === "settings" && "translate-y-0"
			)}
		>
			<h1>This is Settings</h1>
		</div>
	);
};

export default SettingsMenu;
