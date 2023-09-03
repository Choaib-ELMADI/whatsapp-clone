import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
	return (
		<div className="flex flex-col items-center p-4">
			<div className="bg-brand flex flex-col justify-center items-center px-2 py-16 rounded-lg w-full">
				<Image
					src="/logo.svg"
					alt="Whatsapp Logo"
					width={100}
					height={100}
					draggable="false"
					className="mb-4"
				/>
				<h1 className="text-large font-bold">Whatsup</h1>
				<p className="text-center">Simple. Secure. Reliable Messaging.</p>
				<Link href="/chats" className="mt-4 underline text-center">
					Start Messaging
				</Link>
			</div>
			<div className="flex flex-col gap-1 mt-6 items-center justify-center sm:flex-row sm:gap-4 sm:mt-0">
				<Link
					href="https://elmadichoaib.vercel.app"
					target="_blank"
					className="text-tiny hover:underline"
				>
					@Choaib ELMADI
				</Link>
				<Link
					href="mailto:choaib3elmadi@gmail.com"
					className="text-tiny hover:underline"
				>
					choaib3elmadi@gmail.com
				</Link>
			</div>
		</div>
	);
}
