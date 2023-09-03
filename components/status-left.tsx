import CreateStatus from "./create-status";

export default function StatusLeft() {
	return (
		<div className="w-[360px] border-r border-white dark:border-black py-2 px-3">
			<h1 className="text-normal font-bold tracking-wide leading-[36px]">
				Status
			</h1>
			<CreateStatus />
		</div>
	);
}
