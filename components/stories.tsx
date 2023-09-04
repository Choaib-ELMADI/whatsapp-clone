import { Status } from "@prisma/client";

import Story from "./story";

const Stories = ({ stories }: { stories: Status[] }) => {
	return (
		<div className="h-full">
			{stories.length > 0 ? (
				<p className="text-tiny text-secondary mb-2">View updates</p>
			) : (
				<p className="text-tiny text-secondary text-center">
					No contact updates
				</p>
			)}
			{stories.length > 0 && (
				<div className="h-[calc(100vh-200px)] overflow-auto custom-scrollbar flex flex-col gap-2">
					{stories.map((story) => (
						<Story key={story.id} story={story} />
					))}
				</div>
			)}
		</div>
	);
};

export default Stories;
