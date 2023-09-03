"use client";
import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";
import { ProfileCardSkeleton } from "@/components/ui/skeletons";
import { Project } from "@prisma/client";

export const dynamic = "force-dynamic";

export default function Projects({ projects }: { projects: Project[] }) {
	if (projects.length === 0)
		return (
			<div className="pt-8 font-semibold text-slate-600/70">
				No Projects exist yet, go make one!
			</div>
		);

	return (
		<div className="grid grid-cols-3">
			{projects.map((project: Project, index: number) => (
				<div key={index}>
					<ProjectCard project={project} />
				</div>
			))}
		</div>
	);
}

function ProjectCard({ project }: { project: Project }) {
	return <>hi</>;
	// return (
	// <Suspense fallback={<ProfileCardSkeleton />}>
	// 	<Link
	// 		href={user.id}
	// 		className="flex gap-2 flex-col px-2 py-1 border rounded shadow outline-none border-slate-100 hover:outline-none hover:scale-[1.01] transition-all"
	// 	>
	// 		<div className="flex items-center gap-2">
	// 			<Image
	// 				src={user.image ?? "fake"}
	// 				width={28}
	// 				height={28}
	// 				alt="alt text"
	// 				className="rounded-full"
	// 				priority
	// 			/>
	// 			<p className=" text-slate-800">{user.name}</p>
	// 		</div>

	// 		{/* Hidden right now */}
	// 		<div className="hidden pl-8 text-sm text-slate-600">
	// 			<p>Projects: 3</p>
	// 			<p>Likes: 3</p>
	// 		</div>
	// 	</Link>
	// </Suspense>
	// );/
}
