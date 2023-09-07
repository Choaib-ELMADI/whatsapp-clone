"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

const BackBtn = () => {
	const router = useRouter();

	return (
		<button
			onClick={() => router.push("/chats/status")}
			className="z-50 absolute sm:top-2 top-10 left-2 p-2 rounded-sm hover:bg-hovery transition-all"
		>
			<ArrowLeft className="w-5 h-5 cursor-pointer" />
		</button>
	);
};

export default BackBtn;
