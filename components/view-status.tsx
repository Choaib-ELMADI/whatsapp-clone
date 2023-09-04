"use client";

import { useRouter } from "next/navigation";
import { SkipBack } from "lucide-react";
import { useEffect } from "react";
import Image from "next/image";

import { Status } from "@prisma/client";

const ViewStatus = ({ story }: { story: Status }) => {
	const router = useRouter();

	useEffect(() => {
		setTimeout(() => {
			router.back();
		}, story && story.duration * 1000);
	}, []);

	return (
		<div className="w-full max-w-[360px] h-[calc(100vh-45px)] relative">
			<button
				onClick={() => router.back()}
				className="z-50 absolute top-2 right-1 bg-text text-background p-1 rounded-full"
			>
				<SkipBack className="w-5 h-5 cursor-pointer" />
			</button>
			<div className="absolute top-0 left-0 w-full h-[3px] bg-tertiary">
				<div
					className="h-full bg-brand animate-[play]"
					style={{
						animationDuration: `${story && story.duration}s`,
						animationTimingFunction: "linear",
					}}
				/>
			</div>
			{story?.type === "image" && (
				<Image
					src={story.fileUrl}
					alt="Story Picture"
					width={100}
					height={100}
					draggable="false"
					className="w-full h-full object-cover"
				/>
			)}
			{story?.type === "video" && (
				<video
					src={story.fileUrl}
					autoPlay
					className="w-full h-full object-cover"
				/>
			)}
			{story.message && (
				<div className="absolute left-1 w-[calc(100%-8px)] bottom-1 p-1 bg-brand rounded-sm text-center">
					{story.message}
				</div>
			)}
		</div>
	);
};

export default ViewStatus;
