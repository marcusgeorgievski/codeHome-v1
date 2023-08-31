import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { User } from "@/lib/types";
import { UserCard } from "@/components/ui/user-cards";
import DashboardTabs from "./tab-menu";

// Metadata
export async function generateMetadata({ params: { slug } }: any) {
	const session = await getServerSession();
	const user = await prisma.user.findFirst({
		where: {
			OR: [{ username: slug }, { id: slug }],
		},
	});

	const titleName = user?.username || user?.name;

	return {
		title: "@" + session?.user?.name,
	};
}

export default async function Dashboard() {
	const session = await getServerSession();

	if (!session) {
		redirect("/api/auth/signin");
	} else {
		// Query profile, projects, friends,
	}
	const { user } = session;

	return (
		<>
			<UserCard user={user as User} />

			<DashboardTabs />
		</>
	);
}

// function TabBar() {
// 	return (
// 		<Tabs defaultValue="projects" className="">
// 			{/* Tabs */}
// 			<TabsList className="mb-8">
// 				<TabsTrigger value="profile">
// 					<HiOutlineUser className="mr-1" />
// 					Profile
// 				</TabsTrigger>

// 				<TabsTrigger value="projects">
// 					<BsCode className="mr-1" />
// 					Projects
// 				</TabsTrigger>

// 				<TabsTrigger value="activity">
// 					<CgFeed className="mr-1" />
// 					Activity
// 				</TabsTrigger>

// 				<TabsTrigger value="social">
// 					<PiUsers className="mr-1" />
// 					Social
// 				</TabsTrigger>
// 				<TabsTrigger value="saved">
// 					<IoMdHeartEmpty className="mr-1" />
// 					Saved
// 				</TabsTrigger>

// 				<TabsTrigger value="settings">
// 					<HiOutlineCog className="mr-1" />
// 					Settings
// 				</TabsTrigger>
// 			</TabsList>

// 			{/* Content */}
// 			<TabsContent value="account">
// 				Make changes to your account here.
// 			</TabsContent>
// 			<TabsContent value="password">
// 				Change your password here.
// 			</TabsContent>
// 			<TabsContent value="settings">
// 				<Settings />
// 			</TabsContent>
// 		</Tabs>
// 	);
// }
