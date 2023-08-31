import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { User } from "@/lib/types";
import Users from "./users";
import { TbUserSearch } from "react-icons/tb";
import { PiCubeFocusLight } from "react-icons/pi";

import { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
	title: "codeHome - Explore",
	description: "codeHome explore page",
};

export default async function Explore() {
	const users = await prisma.user.findMany();

	return (
		<div className="flex flex-col gap-12">
			<section>
				<div className="flex items-center gap-2 mb-4">
					<PiCubeFocusLight className="text-4xl" />
					<h2 className="text-2xl font-bold ">Featured Projects</h2>
				</div>
				<Users users={users as User[]} />
			</section>

			<section>
				<div className="flex items-center gap-2 mb-4">
					<TbUserSearch className="text-3xl" />
					<h2 className="text-2xl font-bold ">Recent Users</h2>
				</div>
				<Users users={users as User[]} />
			</section>
		</div>
	);
}
