import { SignOutButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const General = () => {
	const router = useRouter();

	return (
		<div>
			<h1 className="text-normal font-bold tracking-wide">General</h1>
			<h1 className="mt-2">Login</h1>
			<div className="text-red-400">
				<SignOutButton signOutCallback={() => router.push("/")} />
			</div>
		</div>
	);
};

export default General;
