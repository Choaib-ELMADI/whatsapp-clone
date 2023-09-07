import { redirect } from "next/navigation";

import ViewStatus from "@/components/view-status";
import BackBtn from "@/components/back-btn";
import { prisma } from "@/lib/db/prisma";

export default async function StoryDetails({
	params,
}: {
	params: { id: string };
}) {
	const story = await prisma.status.findUnique({
		where: { id: params.id.toString() },
	});

	if (!story) {
		redirect("/chats/status");
	}

	return (
		<div className="fixed top-0 left-0 w-full h-screen bg-background flex justify-center">
			<BackBtn />
			<ViewStatus story={story} />
		</div>
	);
}
