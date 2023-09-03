import { Status } from "@prisma/client";

import Story from "./story";

const Stories = ({ stories }: { stories: Status[] }) => {
	return (
		<div>
			<p className="text-tiny text-secondary mb-2">View updates</p>
			{stories.map((story) => (
				<Story key={story.id} story={story} />
			))}
		</div>
	);
};

export default Stories;
