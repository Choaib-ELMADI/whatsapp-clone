import { uploadStatus } from "@/lib/actions";
import CreateStatus from "./create-status";
import { prisma } from "@/lib/db/prisma";
import Stories from "./stories";

export default async function StatusLeft() {
	const stories = await prisma.status.findMany();

	const userStoriesLength = stories ? stories.length : 0;

	return (
		<div className="w-[360px] border-r border-white dark:border-black py-2 px-3">
			<h1 className="text-normal font-bold tracking-wide leading-[36px]">
				Status
			</h1>
			<CreateStatus
				uploadStatus={uploadStatus}
				userStoriesLength={userStoriesLength}
			/>
			<Stories stories={stories} />
		</div>
	);
}
