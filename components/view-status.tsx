"use client";

import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";
import Image from "next/image";

import { Status } from "@prisma/client";
import { UserCircle } from "lucide-react";

const ViewStatus = ({ story }: { story: Status }) => {
	const router = useRouter();
	const { user } = useUser();

	useEffect(() => {
		let timeoutId = setTimeout(() => {
			router.push("/chats/status");
		}, story && story.duration * 1000);

		return () => {
			clearTimeout(timeoutId);
		};
	}, []);

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
		<div className="w-full max-w-[500px] h-screen relative flex items-center bg-hovery">
			<div className="absolute top-1 left-[50%] translate-x-[-50%] w-[calc(100%-8px)] max-w-[360px] h-[4px] rounded-full bg-tertiary">
				<div
					className="h-full rounded-full bg-brand animate-[play]"
					style={{
						animationDuration: `${story && story.duration}s`,
						animationTimingFunction: "linear",
					}}
				/>
			</div>
			<div className="absolute top-5 left-[50%] translate-x-[-50%] w-[calc(100%-8px)] max-w-[360px] flex gap-2 items-center">
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
			</div>
			{story?.type === "image" && (
				<Image
					src={story.fileUrl}
					alt="Story Picture"
					width={360}
					height={800}
					draggable="false"
					className="w-full rounded-sm object-cover"
				/>
			)}
			{story?.type === "video" && (
				<video
					src={story.fileUrl}
					autoPlay
					className="w-full rounded-sm object-cover"
				/>
			)}
			{story.message && (
				<div className="absolute left-1 w-[calc(100%-8px)] bottom-2 px-2 py-4 bg-hovery rounded-sm text-center">
					{story.message}
				</div>
			)}
		</div>
	);
};

export default ViewStatus;
