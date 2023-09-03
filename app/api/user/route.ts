import { NextResponse, NextRequest } from "next/server";
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";
import { User } from "@prisma/client";

export async function GET(request: Request) {}

// Update user info

export async function PATCH(request: Request) {
	const body: User = await request.json();

	// Prepare / validate data
	const data: any = {
		...body,
	};
	const { id } = data;
	delete data.id;

	// Database task
	const updatedUser = await prisma.user.update({
		where: {
			id,
		},
		data,
	});

	const returnUser = await prisma.user.findUnique({
		where: {
			id,
		},
		include: {
			projects: { where: { feature: true } },
		},
	});

	// console.log(updatedUser);

	return NextResponse.json(returnUser);
}
