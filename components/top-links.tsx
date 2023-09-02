"use client";

import { MessageCircle, Phone, CircleDotDashed } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { cn } from "@/lib/utils";

const topLinks = [
	{
		icon: MessageCircle,
		link: "/",
	},
	{
		icon: Phone,
		link: "/calls",
	},
	{
		icon: CircleDotDashed,
		link: "/status",
	},
];

const TopLinks = () => {
	const pathname = usePathname();

	return (
		<div className="flex flex-col gap-1">
			{topLinks.map((link) => (
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

export default TopLinks;
