import { SignOutButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const General = () => {
	const router = useRouter();

	return (
		<div>
			<h1 className="text-normal font-bold tracking-wide">General</h1>

			<h1 className="mt-3">Typing</h1>
			<p className="text-tiny text-secondary my-1">
				Change typing settings for <b>autocorrect</b> and{" "}
				<b>misspelled highlight</b> from{" "}
				<span className="underline text-brand">Windows Settings</span>
			</p>

			<h1 className="mt-3">Login</h1>
			<div className="text-red-400">
				<SignOutButton signOutCallback={() => router.push("/")} />
			</div>
			<p className="text-tiny text-secondary my-1">
				Your chat history will be saved when you sign out
			</p>
		</div>
	);
};

export default General;
