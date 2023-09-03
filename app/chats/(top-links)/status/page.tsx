import StatusLeft from "@/components/status-left";
import RightComponent from "@/components/right";

export default function StatusPage() {
	return (
		<div className="flex h-full">
			<StatusLeft />
			<RightComponent />
		</div>
	);
}
