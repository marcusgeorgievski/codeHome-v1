"use client";
import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { Project } from "@prisma/client";
import Card from "../ui/card";

export function ProjectList({
	self,
	projects,
}: {
	self: boolean;
	projects: Project[] | null;
}) {
	if (projects === null) {
		return <>no projects yet</>;
	}
	return (
		<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
			{projects.map((prj, i) => {
				return (
					<div key={i}>
						<ProjectCard project={prj} self={self} />
					</div>
				);
			})}
		</div>
	);
}
export function ProjectCard({
	self,
	project,
}: {
	self: boolean;
	project: Project;
}) {
	return (
		<Card className="p-3 transition-colors shadow-sm border-slate-200 hover:bg-slate-50">
			<h3 className="text-xl font-bold text-slate-800">{project.name}</h3>
			<p>{project.description}</p>
		</Card>
	);
}
