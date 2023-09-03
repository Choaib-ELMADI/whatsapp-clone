import RightComponent from "@/components/right";
import LeftComponent from "@/components/left";

export default function ChatsPage() {
	return (
		<div className="flex h-full">
			<LeftComponent type="Chats" placeholder="Search or start a new chat" />
			<RightComponent />
		</div>
	);
}
