"use client";
import Image from "next/image";
import Link from "next/link";

import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/shadcn/dropdown-menu";
import { User } from "@/lib/types";
import CodeHome from "./codehome";

export default function UserDropdown({ user }: { user: User }) {
	const { data: session, status } = useSession();

	if (status === "authenticated") {
		console.log("\n\n\nCLIENT: ", session);
	}
	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<div className="flex items-center gap-2 px-2 py-1 transition-colors border rounded shadow-sm outline-none border-slate-200 hover:outline-none hover:bg-slate-100">
					<Image
						src={user.image ?? "fake"}
						width={28}
						height={28}
						alt="alt text"
						className="rounded-full"
						priority
					/>
					<p className="text-xs text-slate-700 ">{user.name}</p>
					<div className="flex flex-col items-center justify-center text-[10px] -translate-y-[1px] font-bold">
						<HiChevronUp className="translate-y-[3px]" />
						<HiChevronDown />
					</div>
				</div>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<div className="grid grid-cols-2 gap-2 sm:grid-cols-1 sm:w-[150px]">
					<div className="">
						<DropdownMenuLabel>
							<span className="text-blue-800">My Account</span>
						</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuItem asChild>
							<Link href={"/dashboard"} className="flex ">
								<HiOutlineUser className="mr-1 text-lg" />
								Dashboard
							</Link>
						</DropdownMenuItem>
						<DropdownMenuItem asChild>
							<Link href={"/projects"} className="flex w-full">
								<BsCode className="mr-1 text-lg" />
								Projects
							</Link>
						</DropdownMenuItem>
						<DropdownMenuItem asChild>
							<Link href={"/activity"} className="flex w-full">
								<CgFeed className="mr-1 text-lg" />
								Activity
							</Link>
						</DropdownMenuItem>
						<DropdownMenuItem asChild>
							<Link href={"/social"} className="flex w-full">
								<PiUsers className="mr-1 text-lg" />
								Social
							</Link>
						</DropdownMenuItem>
						<DropdownMenuItem asChild>
							<Link href={"/saved"} className="flex w-full">
								<IoMdHeartEmpty className="mr-1 text-lg" />
								Saved
							</Link>
						</DropdownMenuItem>
						<DropdownMenuItem asChild>
							<Link href={"/settings"} className="flex w-full">
								<HiOutlineCog className="mr-1 text-lg" />
								Settings
							</Link>
						</DropdownMenuItem>
						<DropdownMenuItem asChild>
							<button
								onClick={() => signOut()}
								className="flex w-full text-slate-500"
							>
								<PiSignOutLight className="mr-1 text-lg " />
								Sign Out
							</button>
						</DropdownMenuItem>
					</div>

					<div className="sm:hidden">
						<DropdownMenuLabel>
							<CodeHome className="font-bold" logo={false} />
						</DropdownMenuLabel>
						<DropdownMenuSeparator />

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
					</div>
				</div>
			</DropdownMenuContent>
		</DropdownMenu>
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
