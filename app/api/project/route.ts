import { NextResponse, NextRequest } from "next/server";
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";
import { Project } from "@prisma/client";

export async function GET(request: Request) {}

// Update user info

export async function POST(request: Request) {
	const data: Project = await request.json();
	console.log(data);

	// Database task
	const newProject = await prisma.project.create({
		data,
	});

	console.log(newProject);

	return NextResponse.json(newProject);
}
