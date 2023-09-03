"use client";

import { cn } from "@/lib/utils";
import { Search, X } from "lucide-react";
import { useState } from "react";

const Searchbar = ({ placeholder }: { placeholder: string }) => {
	const [query, setQuery] = useState("");

	return (
		<div className="relative">
			<input
				className="border-[0.5px] border-hovery border-b-[2px] focus:border-b-brand rounded-sm mt-2 pl-2 py-[3px] outline-none w-full text-tiny placeholder:text-tiny"
				placeholder={placeholder}
				onChange={(e) => setQuery(e.target.value)}
				value={query}
			/>
			<span
				className={cn(
					"absolute right-2 top-[50%] -translate-y-[5px] h-max cursor-pointer",
					query.length === 0 && "pointer-events-none"
				)}
				onClick={() => setQuery("")}
			>
				{query.length === 0 ? (
					<Search className="w-4 h-4" />
				) : (
					<X className="w-4 h-4" />
				)}
			</span>
		</div>
	);
};

export default Searchbar;
