import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { User } from "@/lib/types";
import Users from "./users";

export default async function Explore() {
	const users = await prisma.user.findMany();

	console.log(users);

	return (
		<>
			<section>
				<h2 className="mb-4 text-2xl font-bold">Recent Users</h2>
				<Users users={users} />
			</section>
		</>
	);
}
