import { prisma } from "@/lib/db/prisma";
import Story from "./story";

const Stories = async () => {
	// const stories = await prisma.status.findMany();

	return (
		<div>
			<p className="text-tiny text-secondary mb-2">View updates</p>
			{/* {stories.map((story) => (
				<Story key={story.id} />
			))} */}
		</div>
	);
};

export default Stories;
