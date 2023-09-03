import { StatusProps } from "@/types/types";
import { prisma } from "./db/prisma";

export const uploadStatus = async (data: StatusProps) => {
	"use server";

	await prisma.status.create({
		data: {
			...data,
		},
	});
};
