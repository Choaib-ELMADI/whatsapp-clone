import RightComponent from "@/components/right";
import LeftComponent from "@/components/left";

export default function StarredPage() {
	return (
		<div className="flex h-full">
			<LeftComponent type="Starred messages" placeholder="Search" />
			<RightComponent />
		</div>
	);
}
