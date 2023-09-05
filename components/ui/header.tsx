import Link from "next/link";
import { Routes } from "./navigation";
import CodeHome from "./codehome";
import { getServerSession } from "next-auth";
import { User } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import UserDropdown from "./user-dropdown";

export default async function Header() {
	const session = await getServerSession();

	// Get user if logged in
	let user: User | null = null;
	if (session !== null) {
		user = await prisma.user.findUnique({
			where: { email: session.user?.email! },
		});
	}

	return (
		<header className="sticky top-0 z-10 py-2 border-b bg-white/80 ems-center backdrop-blur-md border-slate-200/80">
			<div className="flex justify-between w-full px-4 mx-auto max-w-screen-xl ">
				{/* Left Header */}
				<div className="flex items-center gap-8">
					<Link href={"/"} className="text-2xl font-bold">
						<CodeHome className={"text-2xl font-bold"} />
					</Link>

					<Routes />
				</div>

				{/* Right Header */}
				<div className="flex items-center">
					<UserDropdown user={user} />
				</div>
			</div>
		</header>
	);
}
