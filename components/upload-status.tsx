import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import Image from "next/image";

import { storage } from "@/lib/db/firebase";

const UploadStatus = ({
	setViewModel,
}: {
	setViewModel: (state: boolean) => void;
}) => {
	const [fileUrl, setFileUrl] = useState<string | null>(null);
	const [file, setFile] = useState<File | null>(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(false);
	}, [file]);

	const uploadFileToDb = () => {
		if (!file) return;

		if (!file?.type.startsWith("image") && !file?.type.startsWith("video"))
			return;

		setLoading(true);

		const type = file.type.startsWith("image") ? "image" : "video";

		const storageRef = ref(
			storage,
			`${type}/${file?.name}__${new Date().getTime()}`
		);

		const uploadTask = uploadBytesResumable(storageRef, file);

		uploadTask.on(
			"state_changed",
			(snapshot) => {},
			(error) => {
				setLoading(false);
				setFileUrl(null);
				return;
			},
			() => {
				getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
					setLoading(false);
					setFileUrl(downloadURL);
					console.log(downloadURL);
				});
			}
		);

		let timeoutId = setTimeout(() => {
			setLoading(false);
			setFileUrl(null);
		}, 4 * 60 * 1000);

		if (fileUrl) {
			clearTimeout(timeoutId);
		}
	};

	return (
		<div className="w-full h-screen fixed top-0 left-0 bg-[rgba(255,255,255,0.6)] dark:bg-[rgba(0,0,0,0.6)] flex justify-center">
			<X
				className="w-6 h-6 cursor-pointer fixed top-2 right-2 bg-text text-background rounded-full"
				onClick={() => setViewModel(false)}
			/>
			<div className="bg-background w-full overflow-auto custom-scrollbar max-w-[500px] p-2 rounded-lg border border-white dark:border-black">
				<h1 className="text-normal font-bold tracking-wide text-center mb-2">
					Upload Status
				</h1>
				<label
					htmlFor="status-file"
					className="bg-custom_03 w-full max-w-[360px] h-[560px] mx-auto rounded-sm flex flex-col items-center justify-center cursor-pointer border border-dashed border-tertiary relative"
				>
					{file ? (
						<>
							{file.type.startsWith("image") ? (
								<Image
									src={URL.createObjectURL(file)}
									alt="Status File"
									width={100}
									height={100}
									className="w-full h-full rounded-sm object-cover"
								/>
							) : file?.type.startsWith("video") ? (
								<video
									src={URL.createObjectURL(file)}
									controls
									muted
									className="w-full h-full rounded-sm object-cover"
								/>
							) : (
								<p className="text-center text-small text-red-500">
									Wrong file selected
								</p>
							)}
						</>
					) : (
						<>
							<p className="text-center text-normal">
								Video/Photo Preview Here
							</p>
							<p className="text-center text-tertiary text-small">
								Select a video or a picture
							</p>
						</>
					)}
					{file &&
						(file.type.startsWith("image") ||
							file.type.startsWith("video")) && (
							<div className="absolute ml-1 p-1 top-1 left-0 w-[calc(100%-8px)] flex items-center justify-between bg-brand rounded-sm">
								<X
									onClick={(e) => {
										e.preventDefault();
										setFile(null);
									}}
								/>
								<button
									onClick={(e) => {
										e.preventDefault();
										uploadFileToDb();
									}}
									disabled={loading}
									className="disabled:opacity-70"
								>
									{loading ? "Uploading..." : fileUrl ? "Uploaded" : "Upload"}
								</button>
							</div>
						)}
					<input
						type="file"
						accept="image/*, video/*"
						id="status-file"
						onChange={(e) => setFile(e.target.files?.[0]!)}
						hidden
					/>
				</label>
			</div>
		</div>
	);
};

export default UploadStatus;
