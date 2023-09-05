import { Project } from "@prisma/client";
import { ProjectCard } from "./cards";

export function ProjectList({
	username,
	projects,
}: {
	username: string;
	projects: Project[] | null;
}) {
	if (projects === null) {
		return <>no projects yet</>;
	}
	return (
		<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 ">
			{projects.map((prj, i) => {
				return (
					<div key={i}>
						<ProjectCard project={prj} username={username} />
					</div>
				);
			})}
		</div>
	);
}
