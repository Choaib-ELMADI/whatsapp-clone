import { cn } from "@/lib/utils";

const Profile = ({
	activeMenuItem,
}: {
	activeMenuItem: "settings" | "profile" | null;
}) => {
	return (
		<div
			className={cn(
				"absolute left-[46px] bottom-1 bg-green-400 text-text w-[400px] h-[400px] rounded-lg translate-y-[110%] transition-all",
				activeMenuItem === "profile" && "translate-y-0"
			)}
		>
			<h1>This is Profile</h1>
		</div>
	);
};

export default Profile;
