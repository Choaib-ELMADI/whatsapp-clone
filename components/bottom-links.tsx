"use client";

import { usePathname } from "next/navigation";
import { Star, Archive } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";

const bottomLinks = [
	{
		icon: Star,
		link: "/starred",
	},
	{
		icon: Archive,
		link: "/archived",
	},
];

const BottomLinks = () => {
	const pathname = usePathname();

	return (
		<div className="flex flex-col gap-1">
			{bottomLinks.map((link) => (
				<Link
					href={link.link}
					key={link.link}
					className={cn(
						"w-full flex justify-center py-2 rounded-sm hover:bg-hovery transition-all",
						pathname === link.link &&
							"bg-hovery relative before:absolute before:content-[''] before:top-[50%] before:translate-y-[-50%] before:left-0 before:w-[3px] before:h-4 before:bg-brand before:rounded-sm"
					)}
				>
					<link.icon className="w-5 h-5" />
				</Link>
			))}
		</div>
	);
};

export default BottomLinks;
