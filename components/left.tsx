import { PenSquare, ListFilter } from "lucide-react";

import Searchbar from "./searchbar";

export default function LeftComponent({
	type,
	placeholder,
}: {
	type: string;
	placeholder: string;
}) {
	return (
		<div className="w-[300px] border-r border-white dark:border-black py-2 px-3">
			<div className="flex items-center justify-between">
				<h1 className="text-normal font-bold tracking-wide leading-[36px]">
					{type}
				</h1>
				{type === "Chats" && (
					<div className="flex items-center">
						<span className="px-4 py-2 rounded-sm hover:bg-hovery transition-all cursor-pointer">
							<PenSquare className="w-5 h-5" />
						</span>
						<span className="px-4 py-2 rounded-sm hover:bg-hovery transition-all cursor-pointer">
							<ListFilter className="w-5 h-5" />
						</span>
					</div>
				)}
			</div>
			<Searchbar placeholder={placeholder} />
		</div>
	);
}
