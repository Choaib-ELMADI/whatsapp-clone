"use client";

import UploadStatus from "./upload-status";
import { UserCircle } from "lucide-react";
import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import Image from "next/image";
import { StatusProps } from "@/types/types";

const CreateStatus = ({
	uploadStatus,
	userStoriesLength,
}: {
	uploadStatus: (data: StatusProps) => void;
	userStoriesLength: number;
}) => {
	const [viewModel, setViewModel] = useState(false);
	const { user } = useUser();

	return (
		<>
			<button
				className="flex gap-2 items-center my-2 p-1 rounded-sm w-full hover:bg-hovery transition-all"
				onClick={() => setViewModel(true)}
			>
				{user && user?.imageUrl ? (
					<Image
						src={user.imageUrl}
						alt={user.fullName!}
						height={48}
						width={48}
						className="rounded-full bg-custom_03"
						draggable="false"
					/>
				) : (
					<UserCircle className="w-12 h-12" />
				)}
				<div className="flex flex-col items-start">
					<h1 className="text-tiny font-bold">My status</h1>
					<p className="text-tiny text-secondary">
						{userStoriesLength < 1
							? "No updates"
							: userStoriesLength === 1
							? "1 update"
							: `${userStoriesLength} updates`}
					</p>
				</div>
			</button>
			{viewModel && (
				<UploadStatus setViewModel={setViewModel} uploadStatus={uploadStatus} />
			)}
		</>
	);
};

export default CreateStatus;
