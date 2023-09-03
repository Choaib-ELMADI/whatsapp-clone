import Sidebar from "@/components/sidebar";

export default function ChatsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<main className="flex h-[calc(100vh-45px)] relative overflow-hidden">
			<Sidebar />
			<div className="bg-custom_03 w-full flex-1 border-t border-l border-white dark:border-black rounded-tl-lg">
				{children}
			</div>
		</main>
	);
}
