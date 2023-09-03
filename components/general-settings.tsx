"use client";

import { useRouter } from "next/navigation";
import { useClerk } from "@clerk/nextjs";

const General = () => {
	const { signOut } = useClerk();
	const router = useRouter();

	return (
		<div>
			<h1 className="text-normal font-bold tracking-wide">General</h1>
			<h1 className="mt-2">Login</h1>
			<button
				onClick={() => {
					router.push("/");
					signOut();
				}}
				className="text-red-400"
			>
				Log out
			</button>
		</div>
	);
};

export default General;
