import { currentUser } from "@clerk/nextjs";

import { uploadStatus } from "@/lib/actions";
import CreateStatus from "./create-status";
import { prisma } from "@/lib/db/prisma";
import Stories from "./stories";

export default async function StatusLeft() {
	const user = await currentUser();

	const twentyFourHoursAgo = new Date();
	twentyFourHoursAgo.setHours(twentyFourHoursAgo.getHours() - 24);

	const stories = await prisma.status.findMany({
		where: { createdAt: { gte: twentyFourHoursAgo } },
		orderBy: { id: "desc" },
	});

	const userStories = await prisma.status.findMany({
		where: {
			AND: {
				createdAt: { gte: twentyFourHoursAgo },
				userId: user?.id,
			},
		},
		orderBy: { id: "desc" },
	});

	const userStoriesLength = userStories ? userStories.length : 0;

	return (
		<div className="h-[calc(100vh-45px)] w-[360px] border-r border-white dark:border-black py-2 px-3">
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
