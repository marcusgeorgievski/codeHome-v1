import ProfileTabs from "./tabs";
import { prisma } from "@/lib/prisma";
import { ProfileCard } from "@/components/ui/user-cards";
import { getServerSession } from "next-auth";

export const dynamic = "force-dynamic";

interface MetadataProps {
	params: {
		username: string;
	};
}
interface LayoutProps {
	children: React.ReactNode;
	params: {
		username: string;
	};
}

// Metadata
export async function generateMetadata({
	params: { username },
}: MetadataProps) {
	const user = await prisma.user.findUniqueOrThrow({
		where: {
			username,
		},
	});

	return {
		title: "@" + user?.username,
	};
}

export default async function ProfileLayout({
	children,
	params: { username },
}: LayoutProps) {
	const user = await prisma.user.findUniqueOrThrow({
		where: {
			username,
		},
	});

	// Check if user is on their own page
	const session = await getServerSession();

	let self = false;
	if (session) {
		self = session?.user?.email === user?.email;
	}

	return (
		<div>
			<div className="mb-8">
				<ProfileCard user={user} />

				<ProfileTabs self={self} />
			</div>

			{children}
		</div>
	);
}
