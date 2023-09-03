import { prisma } from "@/lib/prisma";
import { User } from "@prisma/client";
import Users from "./users";
import Link from "next/link";

import { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
	title: "codeHome - Explore",
	description: "codeHome explore page",
};

export default async function Explore() {
	const users = await prisma.user.findMany();
	const projects = await prisma.project.findMany();

	return (
		<div className="flex flex-col gap-12">
			<section>
				<div className="flex items-center mb-4 gap-2">
					<PiCubeFocusLight className="text-4xl" />
					<h2 className="text-2xl font-bold ">Featured Projects</h2>
				</div>
				<Projects projects={projects} />
			</section>

			<section>
				<div className="flex items-center mb-4 gap-2">
					<TbUserSearch className="text-3xl" />
					<h2 className="text-2xl font-bold ">Recent Users</h2>
				</div>
				<Users users={users} />
			</section>
		</div>
	);
}

// Icons
import { TbUserSearch } from "react-icons/tb";
import { PiCubeFocusLight } from "react-icons/pi";
import Projects from "./projects";
