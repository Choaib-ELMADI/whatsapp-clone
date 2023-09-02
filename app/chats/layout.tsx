import Sidebar from "@/components/sidebar";

export default function ChatsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<main className="flex">
			<Sidebar />
			<div className="bg-custom_03 w-full border-t border-l border-white dark:border-black rounded-tl-lg">
				{children}
			</div>
		</main>
	);
}
