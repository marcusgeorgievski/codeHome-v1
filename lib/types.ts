import { User, Project } from "@prisma/client";

export type UserWithProjects = User & {
	projects: Project[];
};
