import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { UserWithProjects } from "@/lib/types";
import Profile from "./Profile";

interface Props {
	params: { id: string };
}

export default async function ProfilePage({ params: { id } }: Props) {
	// Get user + featured projects
	const user = await prisma.user.findUnique({
		where: {
			username: id,
		},
		include: {
			projects: { where: { feature: true } },
		},
	});

	// Check if user is on their own page
	const session = await getServerSession();

	let self = false;
	if (session) {
		self = session?.user?.email === user?.email;
	}

	return (
		<>
			<Profile user={user as UserWithProjects} self={self} />
		</>
	);
}
