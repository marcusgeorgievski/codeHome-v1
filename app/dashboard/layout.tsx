import { UserCard } from "@/components/ui/user-cards";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import ProfileTabs from "./tabs";
import { prisma } from "@/lib/prisma";

// Metadata
export async function generateMetadata() {
	const session = await getServerSession();
	const user = await prisma.user.findFirst({
		where: {
			email: session?.user?.email,
		},
	});

	return {
		title: "@" + (user?.username || user?.name),
	};
}

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const session = await getServerSession();

	if (!session) {
		redirect("/api/auth/signin");
	} else {
		// Query profile, projects, friends
	}
	const { user } = session;

	return (
		<div>
			<div className="mb-8">
				<UserCard user={user} />

				<ProfileTabs />
			</div>

			{children}
		</div>
	);
}
