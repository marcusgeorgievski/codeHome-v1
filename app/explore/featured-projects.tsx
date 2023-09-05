import { prisma } from "@/lib/prisma";
import { ProjectList } from "@/components/project/project-list";

export const dynamic = "force-dynamic";

export default async function FeaturedProjects() {
	const projects = await prisma.project.findMany({
		take: 10,
		include: {
			likes: true,
			comments: true,
			tags: true,
			images: true,
			user: true,
		},
		orderBy: {
			likes: {
				_count: "asc",
			},
		},
	});

	if (projects.length === 0)
		return (
			<p className="pt-8 font-semibold text-slate-600/70">
				No Projects exist yet, go make one!
			</p>
		);

	return (
		<>
			<ProjectList projects={projects} username={"hi"} />
		</>
	);
}
