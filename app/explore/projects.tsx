"use client";
import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";
import { ProfileCardSkeleton } from "@/components/ui/skeletons";
import { Project } from "@prisma/client";
import { ProjectCard, ProjectList } from "@/components/project/project-list";

export const dynamic = "force-dynamic";

export default function Projects({ projects }: { projects: Project[] }) {
	if (projects.length === 0)
		return (
			<div className="pt-8 font-semibold text-slate-600/70">
				No Projects exist yet, go make one!
			</div>
		);

	return (
		<>
			<ProjectList self={false} projects={projects} />
		</>
	);
}
