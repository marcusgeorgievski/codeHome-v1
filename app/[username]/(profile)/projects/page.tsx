import Link from "next/link";
import { IoMdColorFilter } from "react-icons/io";
import { HiOutlinePlusSm } from "react-icons/hi";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { ProjectList } from "@/components/project/project-list";

interface Props {
	params: { username: string };
}

export default async function Projects({ params: { username } }: Props) {
	const session = await getServerSession();
	const projects = await prisma.user.findUnique({
		where: {
			username,
		},
		select: {
			email: true,
			projects: true, // only select projects
		},
	});

	return (
		<div className="text-sm ">
			<div className="mb-6">
				<Link
					href={"/new"}
					className="inline-flex  items-center gap-2 px-4 py-1 mr-2  font-semibold text-green-500 hover:text-white bg-none hover:bg-green-500 rounded transition-colors border border-green-500"
				>
					<HiOutlinePlusSm />
					Create Project
				</Link>

				<button className="inline-flex  items-center gap-2 px-4 py-1 mr-2  font-semibold text-blue-500 hover:text-white bg-none hover:bg-blue-500 rounded transition-colors border border-blue-500">
					<IoMdColorFilter />
					Filter
				</button>
			</div>
			<p className="mb-2 font-medium">Project features coming soon</p>
			<ul className="pl-8 mb-6 list-disc">
				<li>
					Add images and implemented features to show off your skills
				</li>
				<li>Create and track issues and plan future features</li>
			</ul>

			<section>
				<ProjectList
					username={username}
					projects={projects?.projects || null}
				/>
			</section>
		</div>
	);
}
