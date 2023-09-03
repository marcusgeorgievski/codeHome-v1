import Card from "@/components/ui/card";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { getServerSession } from "next-auth";
import {
	FeaturedProjects,
	Markdown,
	Sidebar,
} from "@/components/profile/components";
import { Project, User } from "@prisma/client";
import Profile from "./Profile";

/**     Components
 *
 *     Profile
 */
interface Props {
	params: { id: string };
}

type UserWithProjects = User & {
	projects: Project[];
};

export default async function ProfilePage({ params: { id } }: Props) {
	const user = await prisma.user.findUnique({
		where: {
			username: id,
		},
		include: {
			projects: { where: { feature: true } },
		},
	});

	console.log("Page.tsx: ", user);

	const session = await getServerSession();

	let self = false;
	if (session) {
		self = session?.user?.email === user?.email;
	}

	return (
		<>
			<Profile user={user as UserWithProjects} self={self} id={id} />
		</>
	);
}
