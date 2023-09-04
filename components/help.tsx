import Link from "next/link";

const Help = () => {
	return (
		<div>
			<h1 className="text-normal font-bold tracking-wide">Help</h1>

			<h1 className="mt-3">Whatsup for Windows</h1>
			<p className="text-tiny text-secondary my-1">Version 1.0.2.0</p>

			<h1 className="mt-3">Contact us</h1>
			<p className="text-tiny text-secondary my-1">
				We'd like to know your thoughts about this website.
			</p>
			<Link
				href="mailto:choaib3elmadi@gmail.com"
				className="underline text-brand text-tiny block mb-1"
			>
				Contact us
			</Link>
			<Link
				href="https://elmadichoaib.vercel.app"
				target="_blank"
				className="underline text-brand text-tiny block"
			>
				My Portfolio
			</Link>
			<p className="text-tiny text-secondary mt-6">2023 &copy; Whatsup.</p>
		</div>
	);
};

export default Help;
