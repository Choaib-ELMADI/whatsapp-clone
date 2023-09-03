import RightComponent from "@/components/right";
import LeftComponent from "@/components/left";

export default function CallsPage() {
	return (
		<div className="flex h-full">
			<LeftComponent type="Calls" placeholder="Search or start a new call" />
			<RightComponent />
		</div>
	);
}
