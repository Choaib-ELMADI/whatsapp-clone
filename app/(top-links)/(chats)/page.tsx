import ChatsRight from "@/components/chats-right";
import ChatsLeft from "@/components/chats-left";

export default function ChatsPage() {
	return (
		<div className="flex h-full">
			<ChatsLeft />
			<ChatsRight />
		</div>
	);
}
