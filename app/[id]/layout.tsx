import { getServerSession } from "next-auth";
import ProfileTabs from "./tabs";
import { prisma } from "@/lib/prisma";
import { ProfileCard } from "@/components/ui/user-cards";

export const dynamic = "force-dynamic";

interface MetadataProps {
	params: {
		id: string;
	};
}
interface LayoutProps {
	children: React.ReactNode;
	params: {
		id: string;
	};
}

// Metadata
export async function generateMetadata({ params: { id } }: MetadataProps) {
	const user = await prisma.user.findUniqueOrThrow({
		where: {
			username: id,
		},
	});

	return {
		title: "@" + user?.username,
	};
}

export default async function ProfileLayout({
	children,
	params: { id },
}: LayoutProps) {
	const user = await prisma.user.findUniqueOrThrow({
		where: {
			username: id,
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
