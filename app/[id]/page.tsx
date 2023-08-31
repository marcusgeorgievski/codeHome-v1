import { prisma } from "@/lib/prisma";
import { UserCard } from "@/components/ui/user-cards";
import { User } from "@/lib/types";

// For tabs
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HiOutlineUser } from "react-icons/hi";
import { BsCode } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import { PiUsers } from "react-icons/pi";
import { CgFeed } from "react-icons/cg";

// Dyanmic page
export const dynamic = "force-dynamic";

// Metadata
export async function generateMetadata({ params: { id } }: Props) {
	const user = await prisma.user.findFirst({
		where: {
			OR: [{ username: id }, { id }],
		},
	});

	return {
		title: "@" + (user?.username || user?.name),
	};
}

interface Props {
	params: { id: string };
}

export default async function UserPage({ params: { id } }: Props) {
	const user = await prisma.user.findFirst({
		where: {
			OR: [{ username: id }, { id }],
		},
	});

	return (
		<>
			<UserCard user={user as User} />

			<Tabs defaultValue="projects" className="">
				{/* Tabs */}
				<TabsList>
					<TabsTrigger value="profile">
						<HiOutlineUser className="mr-1" />
						Profile
					</TabsTrigger>
					<TabsTrigger value="projects">
						<BsCode className="mr-1" />
						Projects
					</TabsTrigger>

					<TabsTrigger value="activity">
						<CgFeed className="mr-1" />
						Activity
					</TabsTrigger>

					<TabsTrigger value="social">
						<PiUsers className="mr-1" />
						Social
					</TabsTrigger>
					<TabsTrigger value="saved">
						<IoMdHeartEmpty className="mr-1" />
						Saved
					</TabsTrigger>
				</TabsList>

				{/* Content */}
				<TabsContent value="account">
					Make changes to your account here.
				</TabsContent>
				<TabsContent value="password">
					Change your password here.
				</TabsContent>
			</Tabs>
		</>
	);
}
