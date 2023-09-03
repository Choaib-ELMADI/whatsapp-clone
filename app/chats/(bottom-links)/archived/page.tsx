import RightComponent from "@/components/right";
import LeftComponent from "@/components/left";

export default function ArchivedPage() {
	return (
		<div className="flex h-full">
			<LeftComponent type="Archived" placeholder="Search archived chats" />
			<RightComponent />
		</div>
	);
}
