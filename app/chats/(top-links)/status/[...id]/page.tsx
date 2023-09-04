import { redirect } from "next/navigation";

import ViewStatus from "@/components/view-status";
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
		<div className="flex justify-center">
			<ViewStatus story={story} />
		</div>
	);
}
