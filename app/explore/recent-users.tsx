import { User } from "@prisma/client";
import { UserCard } from "@/components/profile/cards";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function RecentUsers() {
	const users = await prisma.user.findMany();

	if (users.length === 0)
		return (
			<div className="pt-8 font-semibold text-slate-600/70">
				No users exist yet, join to be the first!
			</div>
		);

	return (
		<div className="grid grid-cols-1 sm:gap-4 gap-2 sm:grid-cols-2 lg:grid-cols-3">
			{users.map((user: User, index: number) => (
				<div key={index}>
					<UserCard user={user} />
				</div>
			))}
		</div>
	);
}
