import ProfileTabs from "./tabs";
import { prisma } from "@/lib/prisma";
import { ProfileCard } from "@/components/ui/user-cards";

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

	return (
		<div>
			<div className="mb-8">
				<ProfileCard user={user} />

				<ProfileTabs />
			</div>

			{children}
		</div>
	);
}
