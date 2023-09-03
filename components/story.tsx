import Image from "next/image";
import Link from "next/link";

const Story = () => {
	return (
		<Link
			href="/"
			className="flex gap-2 items-center my-2 p-1 rounded-sm w-full hover:bg-hovery transition-all"
		>
			<Image
				src="/logo.svg"
				alt="Status Image"
				height={48}
				width={48}
				className="rounded-full bg-custom_03"
				draggable="false"
			/>
			<div className="flex flex-col items-start">
				<h1 className="text-tiny font-bold">My status</h1>
				<p className="text-tiny text-secondary">No updates</p>
			</div>
		</Link>
	);
};

export default Story;
