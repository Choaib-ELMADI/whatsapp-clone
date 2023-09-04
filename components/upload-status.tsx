import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { toast } from "react-hot-toast";
import { Send, X } from "lucide-react";
import Image from "next/image";

import { storage } from "@/lib/db/firebase";
import { StatusProps } from "@/types/types";
import SwitchTheme from "./switch-theme";

const UploadStatus = ({
	setViewModel,
	uploadStatus,
}: {
	setViewModel: (state: boolean) => void;
	uploadStatus: (data: StatusProps) => void;
}) => {
	const [fileUrl, setFileUrl] = useState<string | null>(null);
	const [duration, setDuration] = useState<number>(15);
	const [file, setFile] = useState<File | null>(null);
	const [uploading, setUploading] = useState(false);
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState("");

	const inputRef = useRef<HTMLTextAreaElement | null>(null);
	const videoRef = useRef<HTMLVideoElement | null>(null);
	const router = useRouter();
	const { user } = useUser();

	const handleVideoMetadata = () => {
		if (videoRef.current) {
			const durationInSeconds = videoRef.current.duration;
			setDuration(Number(durationInSeconds.toFixed(0)));
		}
	};

	useEffect(() => {
		setLoading(false);
		setDuration(15);
	}, [file]);

	useEffect(() => {
		if (!fileUrl || !inputRef.current) return;

		inputRef.current.scrollIntoView({ behavior: "smooth" });
	}, [fileUrl]);

	const uploadFileToDB = () => {
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
				toast.error("An error occured. Please try again later.", {
					duration: 5000,
					className: "text-small text-center",
				});
				return;
			},
			() => {
				getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
					setLoading(false);
					setFileUrl(downloadURL);
					toast.success(
						"Your file has been successfully uploaded and is ready for sharing.",
						{
							duration: 5000,
							className: "text-small text-center",
						}
					);
				});
			}
		);

		let timeoutId = setTimeout(() => {
			setUploading(false);
			setLoading(false);
			setFileUrl(null);
			toast.error("Action took too long. Please try again later.", {
				duration: 5000,
				className: "text-small text-center",
			});
		}, 4 * 60 * 1000);

		if (fileUrl) {
			clearTimeout(timeoutId);
		}
	};

	const uploadStatusToDB = () => {
		if (!fileUrl) return;

		try {
			setUploading(true);

			uploadStatus({
				fileUrl,
				message,
				type: file?.type.startsWith("image") ? "image" : "video",
				duration,
				userName: user?.fullName!,
				userId: user?.id!,
				imgProfile: user?.imageUrl!,
			});
			toast.success("Status published successfully.", {
				duration: 5000,
				className: "text-small text-center",
			});
		} catch (error) {
			console.log("ERROR UPLOADING: ", error);
			setUploading(false);
			setFileUrl(null);
			setDuration(15);
			toast.error("Error publishing status. Please try again.", {
				duration: 5000,
				className: "text-small text-center",
			});
		} finally {
			setUploading(false);
			setFileUrl(null);
			setDuration(15);
			setMessage("");
			setFile(null);
			setViewModel(false);
			router.refresh();
		}
	};

	return (
		<div className="w-full h-screen fixed top-0 left-0 bg-[rgba(255,255,255,0.6)] dark:bg-[rgba(0,0,0,0.6)] flex justify-center">
			<div className="fixed top-2 right-2 flex items-center gap-4">
				<SwitchTheme />
				<X
					className="w-6 h-6 cursor-pointer bg-text text-background rounded-full"
					onClick={() => setViewModel(false)}
				/>
			</div>

			<div className="bg-background w-full overflow-auto custom-scrollbar max-w-[500px] p-2 rounded-lg border border-white dark:border-black">
				<h1 className="text-normal font-bold tracking-wide text-center mb-2 select-none">
					Upload Status
				</h1>
				<label
					htmlFor="status-file"
					className="bg-custom_03 w-full max-w-[360px] h-[560px] overflow-hidden mx-auto rounded-sm flex flex-col items-center justify-center cursor-pointer border border-dashed border-tertiary relative"
				>
					{file ? (
						<>
							{file.type.startsWith("image") ? (
								<Image
									src={URL.createObjectURL(file)}
									alt="Status File"
									width={360}
									height={800}
									className="w-full rounded-sm object-cover"
								/>
							) : file?.type.startsWith("video") ? (
								<video
									ref={videoRef}
									onLoadedMetadata={handleVideoMetadata}
									controls
									muted
									className="w-full rounded-sm object-cover"
								>
									<source src={URL.createObjectURL(file)} />
								</video>
							) : (
								<p className="text-center text-small text-red-500">
									Wrong file selected
								</p>
							)}
						</>
					) : (
						<>
							<p className="text-center text-normal select-none">
								Video/Photo Preview Here
							</p>
							<p className="text-center text-tertiary text-small select-none">
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
										uploadFileToDB();
									}}
									disabled={loading}
									className="disabled:opacity-70"
								>
									{loading ? "Approving..." : fileUrl ? "Approved" : "Approve"}
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
				<div className="w-full relative max-w-[400px] mx-auto">
					<textarea
						ref={inputRef}
						rows={2}
						className="resize-none w-full mt-4 rounded-sm outline-none p-2 text-small"
						placeholder="Share your thoughts"
						onChange={(e) => setMessage(e.target.value)}
						value={message}
					/>
					<button
						className="absolute bottom-3 right-2 p-2 bg-brand rounded-full disabled:opacity-70 disabled:cursor-not-allowed"
						disabled={!fileUrl || uploading}
						onClick={() => uploadStatusToDB()}
					>
						<Send className="w-5 h-5" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default UploadStatus;
