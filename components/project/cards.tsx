import { prisma } from "@/lib/prisma";
import { Project, User } from "@prisma/client";
import { getServerSession } from "next-auth";
import Link from "next/link";
import Card from "../ui/card";
import LikeButton from "./like-button";

export async function ProjectCard({
	username,
	project,
}: {
	username?: string;
	project: Project;
}) {
	const session = await getServerSession();

	let user: User | null = null;
	let self: boolean = false;

	if (session) {
		user = await prisma.user.findUnique({
			where: { email: session.user?.name! },
		});
		// self ==
	}

	const data = {
		userId: user?.id,
	};

	return (
		<Card className="p-3 transition-all shadow bg-slate-50/50 border-slate-200/50  h-[155px]">
			<h3 className="text-xl font-bold text-slate-800 mb-1 flex justify-between items-center">
				<Link
					href={`/${username}/${project.name}`}
					className="border-b border-transparent hover:border-slate-300 transition-all"
				>
					{project.name}
				</Link>{" "}
				<LikeButton />
			</h3>
			{/* Tags here */}
			<div className="inline-flex mb-2 gap-1">
				<Tag text={"tags"} />
				<Tag text={"coming"} />
				<Tag text={"soon"} />
			</div>

			<div className="flex items-center gap-2 mb-1 text-xs text-slate-700 font-mono">
				<div
					className={
						"w-2  h-2 rounded-full   " +
						options[project.status].colour
					}
				/>
				{project.status}
			</div>

			<p className="text-slate-700 line-clamp-2">
				{project.description} feesfwe ljlfweo igweo gweng owng enwoien
			</p>
		</Card>
	);
}

function Tag({ text }: { text: string }) {
	return (
		<span className="text-xs font-mono bg-slate-200 text-slate-700 border-slate-300 px-2 rounded py-[2px]">
			{text}
		</span>
	);
}

const options: any = {
	active: {
		value: "active",
		text: "Active",
		colour: "bg-blue-600",
	},
	complete: {
		value: "complete",
		text: "Complete",
		colour: "bg-green-600",
	},
	planning: {
		value: "planning",
		text: "Planning",
		colour: "bg-fuchsia-600",
	},
	hold: {
		value: "hold",
		text: "Paused",
		colour: "bg-slate-600",
	},
};
