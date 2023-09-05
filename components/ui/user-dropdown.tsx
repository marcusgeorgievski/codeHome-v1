"use client";
import Image from "next/image";
import Link from "next/link";
import { signIn, signOut } from "next-auth/react";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/shadcn/dropdown-menu";

import CodeHome from "./codehome";

interface MenuItem {
	text: string;
	icon: React.ReactNode;
	route: string;
}

export default function UserDropdown({ user }: { user: User | null }) {
	const menuItems: MenuItem[] = [
		{
			text: "Profile",
			icon: <HiOutlineUser className="mr-1" />,
			route: "",
		},
		{
			text: "Projects",
			icon: <BsCode className="mr-1" />,
			route: "/projects",
		},
		{
			text: "Activity",
			icon: <CgFeed className="mr-1" />,
			route: "/activity",
		},
		{
			text: "Social",
			icon: <PiUsers className="mr-1" />,
			route: "/social",
		},
		{
			text: "Likes",
			icon: <IoMdHeartEmpty className="mr-1" />,
			route: "/likes",
		},
		{
			text: "Settings",
			icon: <HiOutlineCog className="mr-1" />,
			route: "/settings",
		},
	];

	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<div className="flex items-center px-2 py-1 border rounded outline-none gap-2 transition-colors shadow-sm border-slate-200 hover:outline-none hover:bg-slate-100">
					{user && (
						<Image
							src={user.image ?? "fake"}
							width={28}
							height={28}
							alt="alt text"
							className="rounded-full"
							priority
						/>
					)}
					<p className="text-xs text-slate-700 ">
						{user ? (
							<>
								<span className="text-slate-400 mr-[2px] text-xs">
									@
								</span>
								{user.username}
							</>
						) : (
							"Guest"
						)}
					</p>
					<div className="flex flex-col items-center justify-center text-[10px] -translate-y-[1px] font-bold">
						<HiChevronUp className="translate-y-[3px]" />
						<HiChevronDown />
					</div>
				</div>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<div
					className={`grid gap-2 sm:grid-cols-1 sm:w-[150px] ${
						user ? "grid-cols-2 " : "grid-cols-1"
					}`}
				>
					<div className="">
						<DropdownMenuLabel>
							<span className="text-blue-800">My Account</span>
						</DropdownMenuLabel>
						<DropdownMenuSeparator />

						{/* Loop over routes */}
						{user ? (
							menuItems.map((item) => {
								return (
									<DropdownMenuItem asChild key={item.route}>
										<Link
											href={`/${user.username}${item.route}`}
											className="flex "
										>
											{item.icon}
											{item.text}
										</Link>
									</DropdownMenuItem>
								);
							})
						) : (
							<>
								<DropdownMenuItem asChild>
									<button
										onClick={() => signIn()}
										className="flex w-full font-semibold"
									>
										<HiOutlineUser className="mr-1 text-lg" />
										Sign in
									</button>
								</DropdownMenuItem>
								<SiteLinks />
							</>
						)}

						{/* Sign Out */}
						{user && (
							<DropdownMenuItem asChild>
								<button
									onClick={() => signOut()}
									className="flex w-full text-slate-500"
								>
									<PiSignOutLight className="mr-1 text-lg " />
									Sign Out
								</button>
							</DropdownMenuItem>
						)}
					</div>

					{/* Additional routes for small screen */}
					{user && (
						<div className="sm:hidden">
							<DropdownMenuLabel>
								<CodeHome className="font-bold" logo={false} />
							</DropdownMenuLabel>
							<DropdownMenuSeparator />

							<SiteLinks />
						</div>
					)}
				</div>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

function SiteLinks() {
	return (
		<>
			<DropdownMenuItem asChild>
				<Link href={"/"} className="flex w-full">
					<SiHomeadvisor className="mr-1 text-lg" />
					Home
				</Link>
			</DropdownMenuItem>
			<DropdownMenuItem asChild>
				<Link href={"/explore"} className="flex w-full">
					<BsCodeSlash className="mr-1 text-lg" />
					Explore
				</Link>
			</DropdownMenuItem>
			<DropdownMenuItem asChild>
				<Link href={"/about"} className="flex w-full">
					<LiaBrainSolid className="mr-1 text-lg" />
					About
				</Link>
			</DropdownMenuItem>
		</>
	);
}

import { HiOutlineUser, HiOutlineCog } from "react-icons/hi";
import { LiaBrainSolid } from "react-icons/lia";
import { CgFeed } from "react-icons/cg";
import { BsCode, BsCodeSlash } from "react-icons/bs";
import { SiHomeadvisor } from "react-icons/si";
import { PiSignOutLight, PiUsers } from "react-icons/pi";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import { IoMdHeartEmpty } from "react-icons/io";
import { User } from "@prisma/client";
