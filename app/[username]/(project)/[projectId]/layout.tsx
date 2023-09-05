import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import Image from "next/image";

export const dynamic = "force-dynamic";

interface MetadataProps {
	params: {
		username: string;
		projectId: string;
	};
}
interface LayoutProps {
	children: React.ReactNode;
	params: {
		username: string;
		projectId: string;
	};
}

// Metadata
export async function generateMetadata({
	params: { username, projectId },
}: LayoutProps) {
	const user = await prisma.user.findUniqueOrThrow({
		where: {
			username,
		},
	});

	return {
		title: "@" + user?.username + " - " + projectId,
	};
}

export default async function ProfileLayout({
	children,
	params: { username, projectId },
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
			<Link
				href={"/" + username + "/projects"}
				className="mb-5 px-4 py-2 text-white bg-blue-700 text-xs rounded inline-flex items-center gap-1 hover:opacity-90 font-semibold"
			>
				<BsArrowLeftShort />
				All Projects
			</Link>

			<div className="mb-8 flex items-center gap-3">
				<div className="flex items-center gap-2">
					<Image
						src={user.image!}
						height={35}
						width={35}
						alt={"image"}
						className="rounded-full"
					/>
					<Link
						href={"/" + username}
						className="text-lg font-semibold hidden sm:inline-block text-slate-800 border-b border-slate-100/0 hover:border-slate-300 transition-colors"
					>
						{username}
					</Link>
				</div>
				<div className="font-bold text-slate-400">/</div>
				<div className="flex items-center gap-2">
					<BsCode className="font-bold" />
					<Link
						href={"/" + username + "/" + projectId}
						className="text-lg font-semibold hidden sm:inline-block text-slate-800 border-b border-slate-100/0 hover:border-slate-300 transition-colors"
					>
						{projectId}
					</Link>
				</div>
			</div>

			{children}
		</div>
	);
}

import { BsCode, BsArrowLeftShort } from "react-icons/bs";
import Link from "next/link";
