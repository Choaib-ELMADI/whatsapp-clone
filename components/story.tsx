import { currentUser } from "@clerk/nextjs";
import { UserCircle } from "lucide-react";
import { Status } from "@prisma/client";

import Image from "next/image";
import Link from "next/link";

const Story = async ({ story }: { story: Status }) => {
	const user = await currentUser();

	function formatAMPM(date: Date) {
		let hours = date.getHours();
		let minutes = date.getMinutes();
		const ampm = hours >= 12 ? "PM" : "AM";
		hours = hours % 12;
		hours = hours ? hours : 12;
		//@ts-ignore
		minutes = minutes < 10 ? "0" + minutes : minutes;
		const strTime = hours + ":" + minutes + " " + ampm;
		return strTime;
	}

	return (
		<Link
			href={`/chats/status/${story.id}`}
			className="flex gap-2 items-center p-1 rounded-sm w-full hover:bg-hovery transition-all"
		>
			{story.imgProfile ? (
				<Image
					src={story.imgProfile}
					alt={story.userName}
					height={48}
					width={48}
					className="rounded-full bg-custom_03 object-cover"
					draggable="false"
				/>
			) : (
				<UserCircle className="w-12 h-12" />
			)}
			<div className="flex flex-col items-start w-full truncate">
				<h1 className="text-tiny font-bold truncate">{story.userName}</h1>
				<p className="text-tiny text-secondary">
					{user?.id === story.userId && (
						<span className="text-red-400 mr-2 font-semibold">My status</span>
					)}
					{formatAMPM(story.createdAt)}
				</p>
			</div>
		</Link>
	);
};

export default Story;
