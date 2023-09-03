import { SignIn } from "@clerk/nextjs";

export default function Page() {
	return (
		<div className="w-full min-h-[calc(100vh-45px)] py-4 overflow-auto flex justify-center items-center">
			<SignIn />
		</div>
	);
}
